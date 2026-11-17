# Deploy Everyday English

The production build uses `/everydayenglish/` and hash routes. The learner's Day 1 date is selected in Settings; deploying does not start the calendar.

## GitHub Pages

1. In the repository, open **Settings → Pages** and choose **GitHub Actions** as the source.
2. Open **Actions → Publish to GitHub Pages → Run workflow**, using `main`.
3. The workflow installs locked dependencies, runs unit and browser tests, builds the PWA, and uploads the Pages artifact. Deployment only follows successful checks.
4. After the workflow succeeds, open `https://skyyde.github.io/everydayenglish/`. Verify the welcome screen, an internal hash route, and refresh. This hosted check is separate from the automated production-preview tests.

## Local commands

Use Node 24 and `npm ci`.

- `npm run dev`: development server.
- `npm run build`: TypeScript checks and production assets.
- `npm test`: Vitest and React Testing Library checks.
- `npx playwright install --with-deps chromium`: browser test dependencies.
- `npm run test:e2e`: production-preview Playwright checks; build first.

## Data and updates

Progress lives in IndexedDB, separately from the authored curriculum. Schema version 2 adds indexes without clearing existing records. App updates ask the learner to reload; finish the current response first. Export JSON backups regularly. Audio is excluded from JSON backups and has separate download/delete controls.

A backup restores the included tables transactionally and replaces current settings and progress. Existing audio stays on the device. Clearing site data or removing a browser profile may erase everything stored locally. There is no account, backend, cloud synchronization, or paid API.

## Browser-dependent behavior

Install prompts, speech voices, microphone codecs, and optional speech recognition depend on the browser. Recognition is opt-in and may use the browser vendor's online service. It is not required for learning; written responses work offline. Browser tests use a simulated microphone, not Dada's physical device. Try one short recording on his actual device after deployment.

Taglish is the default. Existing English/Filipino/Taglish content is used where provided; missing translations fall back to English. The curriculum was preserved rather than silently translated or rewritten. Learner testing of the 5–8-minute practice length remains an editorial check.
