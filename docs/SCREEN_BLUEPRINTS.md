# Screen Blueprints

## Grid and Spacing
- Base grid: 4pt units, 16pt page margin.
- Primary card radius: 16pt, button radius: 12pt.
- Baseline type scale from `docs/BRAND_SYSTEM.md`.

## Home
- Stack: Daily Highlight card (full width) then feed list.
- Highlight card: 16pt padding, 12pt spacing between text blocks.
- Feed list: uses FlashList/FlatList with 12pt separators.

## Discover
- Filter chips row with wrap. Map section 200pt height.
- Results list: cards with 16pt padding, 12pt vertical margin.

## Create
- Vertical form with 16pt spacing. Buttons 48pt height.

## Messages
- Safety banner 12pt radius, amber background (#FFB34733).
- Thread items: 16pt padding, unread badge 28pt min width.

## Profile
- Header summary with stats row. Sections separated by 24pt.
- Buttons grouped in column with 8pt spacing.

Light and dark themes share layout; color tokens adapt via theme context.
