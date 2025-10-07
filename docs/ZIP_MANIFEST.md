# ZIP Manifest of Generated Assets

When packaging for delivery, include the following paths:

- `App.tsx`
- `app/**/*`
- `assets/` (icons, splash artwork placeholders)
- `backend/functions/**/*`
- `firebase/**/*`
- `scripts/**/*`
- `docs/**/*`
- `.github/workflows/ci.yml`
- `.env.example`
- `package.json`
- `tsconfig.json`
- `app.json`
- `eas.json`
- `DECISIONS.md`
- `README.md`

Use `zip -r overflow-v1.zip <paths>` with the list above to create the archive.
