import * as WebBrowser from 'expo-web-browser';

interface DonationIntent {
  orgId?: string;
  projectId?: string;
  amount: number;
  currency: string;
}

export async function startDonation(intent: DonationIntent) {
  // TODO: call Cloud Function to create Stripe Checkout session.
  const sessionUrl = `https://checkout.stripe.com/pay/test?amount=${intent.amount}`;
  await WebBrowser.openBrowserAsync(sessionUrl);
}
