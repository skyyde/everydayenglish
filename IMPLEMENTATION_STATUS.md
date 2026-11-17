# Implementation status

The v1 application is implemented and prepared for the manual GitHub Pages release workflow. No hosted deployment has been verified yet. Existing `src/data/` curriculum files and IDs are unchanged by application implementation.

## Implemented

- Responsive sidebar and mobile navigation, onboarding, editable nickname, three language choices, Manila greetings, and a learner-selected launch date.
- All 30 daily lessons, persistent word/phrase checks, three-activity completion, past-lesson archive, and an end-of-calendar message without recycling lessons.
- Six Module 1 grammar lessons, writing self-review, final quiz, four optional weekly reviews, and retakable placement with first-answer scoring and informal recommendations.
- Speaking preparation and optional targets, recording/playback/retry, written fallback, delayed model responses, self-review, local recording download/delete, and opt-in browser transcription.
- Saved vocabulary, optional spaced word reviews capped at three per day, factual progress and weekly recaps, and achievements derived from distinct completed activities.
- Versioned Dexie storage, validated JSON backup preview/confirmation/transactional restore excluding audio, and a cached PWA with update prompts.
- GitHub Actions CI and a manually triggered Pages deployment workflow that requires successful build and test checks.

## Verification

The production build and 13 Vitest/React Testing Library tests pass. The 10-test Chromium Playwright suite passed in GitHub Actions on commit `3c0809adc078aa76fbe3bdfb936bf9b29b90e775`; subsequent changes connect additional authored guidance and strengthen the microphone-denial assertion. Check the latest CI result before publishing.

Browser coverage includes all 90 daily activity routes; phone, tablet and desktop layouts; automated WCAG A/AA checks on Learn; daily 3/3 completion; grammar writing/result persistence; placement retakes; weekly review results; backup download/import; simulated microphone recording; and production-cache offline reload/written speaking. Unit/component checks cover date boundaries, answer indexes, distinct achievements, scheduling limits, persistence, backup validation, and denied microphone access.

Chromium could not run inside the local execution environment, so browser tests run in GitHub Actions against the actual production preview. Automated accessibility checks are scoped checks, not a complete accessibility audit.

## Release and learner checks

Follow `DEPLOYMENT.md`: select GitHub Actions as the Pages source, run Publish to GitHub Pages, and verify the hosted URL and hash-route refresh. On Dada’s actual device, try microphone permission, a short recording/playback, installation, and reopening a cached lesson offline. Browser tests use simulated audio; real microphone hardware and voice quality have not been tested here.

The curriculum still needs learner timing/usability testing and independent copyediting. Available authored translations are displayed; missing translations and some interface labels use English fallback. No generated translations, AI scoring, notifications, or cross-device sync are promised. Historical progress without timestamps is not assigned invented dates or retroactive speaking attempts.
