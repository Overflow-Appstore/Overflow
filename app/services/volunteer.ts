import { trackEvent } from './analytics';

interface VolunteerIntentPayload {
  orgId: string;
  projectId?: string;
  skills: string[];
  availability: string;
  consentToShare: boolean;
}

export async function submitVolunteerIntent(payload: VolunteerIntentPayload) {
  // TODO: persist to Firestore via callable function.
  trackEvent('volunteer_intent_submit', payload);
}
