import * as Analytics from 'expo-firebase-analytics';

export async function trackEvent(name: string, params?: Record<string, unknown>) {
  try {
    await Analytics.logEvent(name, params);
  } catch (error) {
    console.warn('Analytics event failed', error);
  }
}
