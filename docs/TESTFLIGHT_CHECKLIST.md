# TestFlight Readiness Checklist

1. [ ] Run `npm install` and `npm run typecheck`.
2. [ ] Execute `npm test`.
3. [ ] Update `.env` with production-safe values.
4. [ ] Run `eas build --platform ios --profile production`.
5. [ ] Verify build in EAS dashboard and download `.ipa`.
6. [ ] Smoke test on physical iPhone: onboarding, home feed, discover, create post (draft), donation deep link, messages.
7. [ ] Confirm push notifications via Expo Push tool using test topic keys.
8. [ ] Verify localization toggles via Settings > Language.
9. [ ] Check accessibility: VoiceOver focus on home cards, tab order, dynamic type scaling.
10. [ ] Capture App Store screenshots per [`docs/APP_STORE_KIT.md`](APP_STORE_KIT.md).
