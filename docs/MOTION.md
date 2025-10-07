# Motion Guidelines

- Default transitions: 200ms ease-in-out using React Native Reanimated presets.
- Emphasized transitions (modal open, highlight reveal): 300ms ease-out.
- Use spring animations for card lifts with damping 15, mass 1.
- Respect `prefers-reduced-motion` via `useReducedMotion` pattern (TODO: implement hook). Disable non-essential animations when enabled.
