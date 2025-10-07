# App Store Submission Kit

## Metadata
- **App Name**: Overflow
- **Subtitle**: Stories of people doing good.
- **Keywords**: Humanitarian, Missions, Nonprofit, Volunteer, Donation, Global

## Description
Overflow spotlights people bringing hope to communities around the world.

Meet verified workers, humanitarians, and local leaders. Learn what they need today and how you can help.

Follow projects you care about, share support, and stay connected to the impact you make.

### Feature Highlights
- Discover people and projects by region, cause, and language filters.
- Follow, message, and donate with safety checks and transparent status updates.
- Share volunteer intent securely with organizations you trust.

## Screenshots Plan
1. **Home Feed** – "See real stories from the field" – 6.5" portrait (1242x2688)
2. **Daily Highlight** – "Meet today's featured humanitarian" – 6.5" portrait
3. **Discover Map** – "Find impact by region and cause" – 6.5" portrait
4. **Create Post** – "Share updates with supporters in seconds" – 6.5" portrait
5. **Donations Flow** – "Give with transparent receipts" – 6.5" portrait
6. **Messages** – "Stay connected with safe messaging" – 6.5" portrait

## Privacy Policy
See [`docs/privacy/POLICY.md`](privacy/POLICY.md) for Markdown and HTML versions.

## App Privacy Nutrition Labels
- **Data Linked to You**
  - Contact Info (email, name) – Account setup and support
  - Identifiers (device token) – Notifications
  - Usage Data (interactions) – Analytics
  - Financial Info (donation amount) – Donations processing (Stripe)
- **Data Not Linked to You**
  - Diagnostics – App performance, crash reports
  - Location (approximate) – Discover map personalization

## Review Notes for Apple
- Test login: email `test.user@overflowapp.com`, password `Overflow123!`
- Donations use Stripe test mode with card `4242 4242 4242 4242`.
- Volunteer intent form stores contact info in Firestore and flags as test data.

## Age Rating Questionnaire
- **Alcohol, Tobacco, Drugs**: No references.
- **Medical/Health**: No references.
- **Profanity**: Infrequent/mild user-generated content with moderation.
- **Sexual Content**: No sexual content or nudity.
- **Violence**: Infrequent/mild (contextual humanitarian reporting).
- **Gambling**: None.
- **Contests**: None.
- **Horror/Fear**: None.
- **User-Generated Content**: Yes, with moderation tools.
- **Location Sharing**: Yes (user-controlled, approximate by default).
- **Account Creation**: Required.
- **Third-Party Analytics**: Yes (Amplitude optional).
- **Advertising**: None.
- **Restricted Content**: None.
