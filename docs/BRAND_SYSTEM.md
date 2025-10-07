# Overflow Brand System

## Identity
- **Essence**: Quiet confidence, human first, global perspective.
- **Voice**: Clear, kind, and specific. Avoid hype; emphasize impact and authenticity.

## Palette
| Role | Color | Hex | Usage |
| --- | --- | --- | --- |
| Primary | Deep Teal | `#06282F` | App bar backgrounds, primary buttons, links |
| Accent | Warm Coral | `#FF6F5B` | Highlights, CTA accents, active states |
| Neutral 1 | Mist Gray | `#F2F5F7` | Backgrounds, cards |
| Neutral 2 | Cloud Gray | `#C9D1D8` | Borders, dividers |
| Neutral 3 | Storm Gray | `#4E5D68` | Secondary text |
| Success | Meadow Green | `#3CB371` | Positive toasts, verified badges |
| Warning | Sun Amber | `#FFB347` | Caution banners |
| Error | Clay Red | `#D64541` | Error toasts, destructive actions |

### Usage Rules
- Maintain 4.5:1 contrast ratio for text. Pair Deep Teal text with Mist Gray backgrounds, and vice versa.
- Accent color limited to 20% of any screen to preserve calm aesthetic.
- Use Neutral palette for structural elements and backgrounds.

## Typography
- **Primary typeface**: SF Pro Display and SF Pro Text (system default on iOS).
- **Scale**
  - Display / Hero: 32pt, Regular, 38pt line height.
  - Page Title: 28pt, Semibold, 34pt line height.
  - Section Title: 22pt, Semibold, 28pt line height.
  - Body Large: 18pt, Regular, 26pt line height.
  - Body: 16pt, Regular, 24pt line height.
  - Body Small: 14pt, Regular, 20pt line height.
  - Caption: 12pt, Medium, 16pt line height.

## Components
Each component is documented in code with props and accessibility notes:
- **Buttons**: Primary, secondary, tertiary. Minimum hit size 48x48pt.
- **Cards**: Content containers with 12pt corner radius, 16pt padding.
- **Chips**: Filter chips with outline, 12pt radius, 12pt vertical padding.
- **Avatars**: Circle, 40pt default, include `accessibilityLabel`.
- **Tags**: Text label with neutral background and bold text.
- **Badges**: Small indicator with semantic color usage.
- **Loaders**: Lottie-ready placeholder, fallback to ActivityIndicator.
- **Empty States**: Illustration optional, message and CTA.

## Motion
- Standard transitions: 200ms ease-in-out.
- Emphasized transitions: 300ms ease-out.
- Use `useReducedMotion` hook to disable non-essential animations.

## Themes
- Light and dark themes defined in [`app/theme/theme.ts`](../app/theme/theme.ts).
- Respect system preference and allow manual override in Settings.
