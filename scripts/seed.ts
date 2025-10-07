import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, collection } from 'firebase/firestore';
import { config } from 'dotenv';
import path from 'path';
import { UserProfile, Organization, Project, Post, MessageThread, Donation } from '../app/types/models';

config({ path: path.resolve(process.cwd(), '.env') });

const app = initializeApp({
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
});

const db = getFirestore(app);

const sampleOrgs: Organization[] = Array.from({ length: 5 }).map((_, index) => ({
  id: `org-${index + 1}`,
  name: `Hope Collective ${index + 1}`,
  domain: `hopecollective${index + 1}.org`,
  description: 'Grassroots organization providing relief efforts.',
  regions: ['Global', 'Africa'],
  verificationDocs: [],
  languages: ['en', 'es'],
  createdAt: new Date().toISOString(),
}));

const sampleUsers: UserProfile[] = Array.from({ length: 20 }).map((_, index) => ({
  uid: `user-${index + 1}`,
  name: `Impact Maker ${index + 1}`,
  bio: 'Dedicated to community upliftment and humanitarian aid.',
  role: index % 4 === 0 ? 'worker' : 'donor',
  orgId: sampleOrgs[index % sampleOrgs.length].id,
  location: { country: 'Kenya', region: 'Nairobi' },
  languages: ['en'],
  verified: index % 3 === 0,
  stats: { followers: 10 + index, follows: 5 + index, posts: 2 + index, donations: index },
  avatarUrl: `https://picsum.photos/seed/${index}/200/200`,
  createdAt: new Date().toISOString(),
}));

const sampleProjects: Project[] = Array.from({ length: 10 }).map((_, index) => ({
  id: `project-${index + 1}`,
  ownerId: sampleUsers[index].uid,
  orgId: sampleOrgs[index % sampleOrgs.length].id,
  tags: ['education', 'health'],
  country: 'Kenya',
  status: 'active',
  title: `Project ${index + 1}`,
  summary: 'Providing resources and training to local communities.',
  supportLinks: ['https://example.org'],
  createdAt: new Date().toISOString(),
}));

const samplePosts: Post[] = Array.from({ length: 50 }).map((_, index) => ({
  id: `post-${index + 1}`,
  ownerId: sampleUsers[index % sampleUsers.length].uid,
  mediaRefs: [{ type: 'image', url: `https://picsum.photos/seed/post${index}/600/400` }],
  caption: 'Sharing moments from the field.',
  tags: ['community', 'education'],
  createdAt: new Date().toISOString(),
  visibility: 'public',
  likeCount: index * 3,
  commentCount: index,
  shareCount: index % 5,
}));

const sampleThreads: MessageThread[] = Array.from({ length: 10 }).map((_, index) => ({
  threadId: `thread-${index + 1}`,
  members: [`user-${(index % 5) + 1}`, `user-${(index % 7) + 6}`],
  lastMessage: {
    id: `msg-${index + 1}`,
    threadId: `thread-${index + 1}`,
    senderId: `user-${(index % 5) + 1}`,
    content: 'Thanks for checking in! Supplies are on the way.',
    contentType: 'text',
    createdAt: new Date().toISOString(),
    safeFlagged: false,
  },
  unreadCountByUser: { [`user-${(index % 7) + 6}`]: index % 2 },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}));

const sampleDonations: Donation[] = [
  {
    id: 'donation-1',
    userId: 'user-1',
    orgId: sampleOrgs[0].id,
    amount: 50,
    currency: 'USD',
    status: 'succeeded',
    stripePaymentIntentId: 'pi_test_1',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'donation-2',
    userId: 'user-2',
    projectId: sampleProjects[0].id,
    amount: 75,
    currency: 'USD',
    status: 'pending',
    stripePaymentIntentId: 'pi_test_2',
    createdAt: new Date().toISOString(),
  },
];

async function seed() {
  for (const org of sampleOrgs) {
    await setDoc(doc(collection(db, 'orgs'), org.id), org);
  }
  for (const user of sampleUsers) {
    await setDoc(doc(collection(db, 'users'), user.uid), user);
  }
  for (const project of sampleProjects) {
    await setDoc(doc(collection(db, 'projects'), project.id), project);
  }
  for (const post of samplePosts) {
    await setDoc(doc(collection(db, 'posts'), post.id), post);
  }
  for (const thread of sampleThreads) {
    await setDoc(doc(collection(db, 'threads'), thread.threadId), thread);
  }
  for (const donation of sampleDonations) {
    await setDoc(doc(collection(db, 'donations'), donation.id), donation);
  }
  console.log('Seed complete');
}

seed().catch((error) => {
  console.error('Seed failed', error);
  process.exit(1);
});
