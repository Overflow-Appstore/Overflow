# Moderation Pipeline

1. **Upload** – Client compresses media (TODO) and uploads to Firebase Storage.
2. **Post Create Function** – Cloud Function `onPostCreate` adds entry to `moderationQueue`.
3. **SafeSearch Check** – TODO: integrate Google Cloud Vision SafeSearch. Failed checks mark post as `flagged`.
4. **Keyword Filter** – Cloud Function (TODO) scans captions for blocked terms using config list.
5. **Manual Review** – Staff panel consumes `moderationQueue` and applies actions (`approve`, `remove`, `escalate`).
6. **Audit Trail** – All actions logged in Firestore `moderationLogs` collection for accountability.
