# Implementation status

The v1 application is implemented and prepared for the manual GitHub Pages release workflow. The previous version was published successfully through GitHub Pages. This interface update must be published with the manual workflow after its CI checks pass. Existing `src/data/` curriculum files and IDs are unchanged by application implementation.

## Implemented

- Responsive sidebar and mobile navigation, onboarding, editable nickname, three language choices, Manila greetings, and a learner-selected launch date.
- All 30 daily lessons, persistent word/phrase checks, three-activity completion, past-lesson archive, and an end-of-calendar message without recycling lessons.
- Six Module 1 grammar lessons, writing self-review, final quiz, four optional weekly reviews, and retakable placement with first-answer scoring and informal recommendations.
- Speaking preparation and optional targets, recording/playback/retry, written fallback, delayed model responses, self-review, local recording download/delete, and opt-in browser transcription.
- Saved vocabulary, optional spaced word reviews capped at three per day, factual progress and weekly recaps, and achievements derived from distinct completed activities.
- Versioned Dexie storage, validated JSON backup preview/confirmation/transactional restore excluding audio, and a cached PWA with update prompts.
- GitHub Actions CI and a manually triggered Pages deployment workflow that requires successful build and test checks.

## Verification

The production build and 13 Vitest/React Testing Library tests pass locally. The expanded 13-test Chromium release suite runs in GitHub Actions; use the latest green Build and test run on main as the release gate.

Browser coverage includes all 90 daily activity routes; phone, tablet and desktop layouts; automated WCAG A/AA checks across 16 main routes with larger text at 320px; keyboard skip links and guided practice controls; daily 3/3 completion; grammar writing/result persistence; placement retakes; weekly review results; backup download/import; simulated microphone recording; and production-cache offline reload/written speaking. Unit/component checks cover date boundaries, answer indexes, distinct achievements, scheduling limits, persistence, backup validation, and denied microphone access.

Chromium could not run inside the local execution environment, so browser tests run in GitHub Actions against the actual production preview. Automated accessibility checks are scoped checks, not a complete accessibility audit.

## Release and learner checks

Follow `DEPLOYMENT.md`: select GitHub Actions as the Pages source, run Publish to GitHub Pages, and verify the hosted URL and hash-route refresh. On Dada’s actual device, try microphone permission, a short recording/playback, installation, and reopening a cached lesson offline. Browser tests use simulated audio; real microphone hardware and voice quality have not been tested here.

The curriculum still needs learner timing/usability testing and independent copyediting. Available authored translations are displayed; missing translations and some interface labels use English fallback. No generated translations, AI scoring, notifications, or cross-device sync are promised. Historical progress without timestamps is not assigned invented dates or retroactive speaking attempts.

## Interface refresh

Consistent spacing and readable cards across pages; visible daily activity steps; a next-activity button; quiz hints and answer selection; question progress and jump controls; speaking preparation, recording and reflection sections; interactive self-review; saved-word reveal cards; quiet completion celebrations; persistent larger text; route titles and focus management; visible keyboard focus; and reduced-motion support. The neutral palette and all authored curriculum files remain unchanged.
