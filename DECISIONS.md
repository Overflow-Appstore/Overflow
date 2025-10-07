# Decisions

1. **Expo Router Adoption**: Expo Router is included but navigation defaults to React Navigation with a root `NavigationContainer`. Expo Router is left optional for future nested routing because the current app structure maps cleanly to tab navigation.
2. **Map Implementation**: `react-native-maps` is used with a Mapbox style URL to satisfy the Mapbox requirement while keeping Expo compatibility. A TODO marker notes future migration to the official Mapbox SDK once compatible with Expo SDK 51.
3. **Media Handling**: Media uploads are capped at 8 MB for images and 50 MB for short videos to honor low-bandwidth requirements. Compression utilities are stubbed with TODOs for integrating native modules if needed.
4. **Moderation Pipeline**: Cloud Functions orchestrate SafeSearch checks; the rules favor explicit rejection of suspicious content and queue edge cases for manual review. This prioritizes safety over speed for launch.
5. **Localization Coverage**: English, Spanish, and French translations are provided for core navigation and onboarding strings. Additional locales will be added post-launch with the same folder structure.
