# Commands from Zero to TestFlight

```bash
# 1. Clone and install
npm install

# 2. Configure environment
cp .env.example .env
# Update values in .env

# 3. One-time setup (installs CLIs, builds functions, seeds data)
npm run setup

# 4. Start local development
npm run dev

# 5. Run quality gates
npm run lint
npm run typecheck
npm test

# 6. Build iOS binary
npx eas build --platform ios --profile production

# 7. Submit to App Store Connect
npx eas submit --platform ios --profile production
```
