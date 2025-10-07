# Component Library Overview

| Component | File | Props | Accessibility |
| --- | --- | --- | --- |
| `Text` | `app/components/Text.tsx` | `variant`, `color` | Uses semantic variants with contrast-aware colors. |
| `ScreenContainer` | `app/components/ScreenContainer.tsx` | `title`, `children` | Wraps screens with heading and safe padding. |
| `PostCard` | `app/components/PostCard.tsx` | `post`, `lowBandwidth` | Marks summary role and disables large media in low bandwidth mode. |
| `Chip` | `app/components/Chip.tsx` | `label`, `selected`, `onPress` | Exposes `accessibilityState` with selected flag. |
| `MessageThreadPreview` | `app/components/MessageThreadPreview.tsx` | `thread` | Button role with aggregated unread badge. |
| `StatsRow` | `app/components/StatsRow.tsx` | `stats` | Summaries of profile metrics. |
| `ToastProvider` | `app/components/ToastProvider.tsx` | `children` | Announces toasts via polite live region. |

All components follow 4pt spacing with minimum 48pt touch targets.
