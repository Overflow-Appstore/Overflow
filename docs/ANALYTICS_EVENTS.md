# Analytics Schema

| Event | Description | Key Params |
| --- | --- | --- |
| `app_open` | App launched | `locale`, `version` |
| `profile_view` | Profile viewed | `profileId`, `source` |
| `follow` | Follow action | `profileId`, `relation` |
| `message_start` | Message thread initiated | `threadId`, `recipientRole` |
| `post_create` | New post uploaded | `mediaType`, `tagsCount`, `bandwidthMode` |
| `donation_start` | Donation intent created | `orgId`, `projectId`, `currency` |
| `donation_complete` | Donation confirmed | `amount`, `currency`, `paymentIntentId` |
| `volunteer_intent_submit` | Volunteer form submitted | `orgId`, `skills`, `availability` |
| `report_submit` | Abuse report filed | `targetType`, `reason` |
| `highlight_share` | Daily highlight shared | `profileId`, `channel` |

## Dashboard Queries
- **Weekly Active Profiles**: Count distinct `profile_view` events per profile in trailing 7 days.
- **Follows per Profile**: Average `follow` events per profile within 7 days of profile creation.
- **Message Starts**: Count `message_start` events per locale per week.
- **Donation Conversions**: Ratio of `donation_complete` to `donation_start` by cause tag.
