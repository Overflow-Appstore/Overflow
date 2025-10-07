#!/usr/bin/env bash
set -euo pipefail

if [ ! -f package.json ]; then
  echo "Run from repo root" >&2
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is required" >&2
  exit 1
fi

echo "Installing npm dependencies"
npm install

if command -v firebase >/dev/null 2>&1; then
  echo "Firebase CLI detected"
else
  echo "Installing Firebase CLI"
  npm install -g firebase-tools
fi

if command -v eas >/dev/null 2>&1; then
  echo "EAS CLI detected"
else
  echo "Installing EAS CLI"
  npm install -g eas-cli
fi

if [ -n "${FIREBASE_PROJECT_ID:-}" ]; then
  echo "Setting Firebase project to $FIREBASE_PROJECT_ID"
  firebase use "$FIREBASE_PROJECT_ID" || firebase use --add "$FIREBASE_PROJECT_ID"
fi

if [ -f config/serviceAccountKey.json ]; then
  echo "Service account key present"
else
  echo "TODO: Place Firebase admin service account key at config/serviceAccountKey.json" >&2
fi

echo "Building Cloud Functions"
( cd backend/functions && npm install && npm run build )

echo "Generating env file"
cp -n .env.example .env || true

if [ -z "${SKIP_SEED:-}" ]; then
  echo "Seeding local Firestore with sample data"
  npx ts-node scripts/seed.ts || echo "Seed script requires local emulator or Firestore credentials"
fi

echo "Setup complete"
