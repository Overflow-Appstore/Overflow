# Manual Setup Steps

1. Install dependencies: `npm install`.
2. Install Expo CLI globally (optional): `npm install -g expo-cli`.
3. Authenticate with Expo: `npx expo login`.
4. Install EAS CLI: `npm install -g eas-cli`.
5. Authenticate with EAS: `eas login`.
6. Create Firebase project or set `FIREBASE_PROJECT_ID` before running the setup script.
7. Update `.env` with generated keys.
8. Run `npm run setup` to execute the one-time automation.
9. Start the app with `npm run dev`.
