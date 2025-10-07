import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import Stripe from 'stripe';

admin.initializeApp();

const db = admin.firestore();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', { apiVersion: '2023-10-16' });

const HIGHLIGHT_COLLECTION = 'highlights';
const USERS_COLLECTION = 'users';
const DONATIONS_COLLECTION = 'donations';
const REPORTS_COLLECTION = 'reports';

export const onUserCreate = functions.auth.user().onCreate(async (user) => {
  const profileDoc = db.collection(USERS_COLLECTION).doc(user.uid);
  await profileDoc.set({
    uid: user.uid,
    name: user.displayName ?? 'New Overflow Member',
    bio: '',
    role: 'donor',
    languages: ['en'],
    verified: false,
    stats: { followers: 0, follows: 0, posts: 0, donations: 0 },
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  }, { merge: true });

  if (user.email) {
    await admin.auth().generateEmailVerificationLink(user.email);
  }
});

export const onPostCreate = functions.firestore.document('posts/{postId}').onCreate(async (_snapshot, context) => {
  functions.logger.info('New post created', { postId: context.params.postId });

  // TODO: integrate Google Cloud Vision SafeSearch once key is provisioned.
  const flagged = false;
  await db.collection('moderationQueue').doc(context.params.postId).set({
    postId: context.params.postId,
    status: flagged ? 'flagged' : 'pending',
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });
});

export const dailyHighlightCron = functions.pubsub.schedule('every 24 hours').onRun(async () => {
  const profiles = await db.collection(USERS_COLLECTION)
    .where('verified', '==', true)
    .orderBy('stats.followers', 'desc')
    .limit(20)
    .get();

  if (profiles.empty) {
    functions.logger.warn('No profiles eligible for highlight');
    return null;
  }

  const selected = profiles.docs[Math.floor(Math.random() * profiles.docs.length)];
  await db.collection(HIGHLIGHT_COLLECTION).add({
    profileId: selected.id,
    curatedOn: admin.firestore.FieldValue.serverTimestamp(),
    featuredBy: 'automation',
    reason: 'Top supporter engagement',
  });
  return null;
});

export const stripeWebhook = functions.https.onRequest(async (req, res) => {
  const sig = req.headers['stripe-signature'];
  if (!sig) {
    res.status(400).send('Missing signature');
    return;
  }
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    res.status(500).send('Webhook secret not configured');
    return;
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, webhookSecret);
  } catch (err) {
    functions.logger.error('Webhook signature verification failed', err);
    res.status(400).send(`Webhook Error: ${(err as Error).message}`);
    return;
  }

  switch (event.type) {
    case 'payment_intent.succeeded': {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      const donationId = paymentIntent.metadata?.donationId;
      if (!donationId) break;
      await db.collection(DONATIONS_COLLECTION).doc(donationId).set({
        status: 'succeeded',
        stripePaymentIntentId: paymentIntent.id,
        receiptUrl: paymentIntent.charges.data[0]?.receipt_url ?? null,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });
      break;
    }
    case 'payment_intent.payment_failed': {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      const donationId = paymentIntent.metadata?.donationId;
      if (!donationId) break;
      await db.collection(DONATIONS_COLLECTION).doc(donationId).set({
        status: 'failed',
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });
      break;
    }
    default:
      functions.logger.info(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
});

export const abuseTriage = functions.firestore.document('reports/{reportId}').onWrite(async (change, context) => {
  const data = change.after.exists ? change.after.data() : change.before.data();
  if (!data) {
    return null;
  }
  const countSnap = await db.collection(REPORTS_COLLECTION)
    .where('targetRef.id', '==', data.targetRef.id)
    .where('createdAt', '>=', admin.firestore.Timestamp.fromMillis(Date.now() - 1000 * 60 * 60 * 24 * 7))
    .get();

  if (countSnap.size >= 3) {
    await db.collection('autoActions').doc(context.params.reportId).set({
      targetId: data.targetRef.id,
      enforcedAt: admin.firestore.FieldValue.serverTimestamp(),
      action: 'lock',
    });
  }
  return null;
});
