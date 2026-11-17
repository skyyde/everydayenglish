# Everyday English 💙

A free, offline-friendly English learning PWA for Dada.

## Authored curriculum
- **30 daily lessons** in `src/data/curriculum/daily/`: each includes a word, phrase, check questions, examples, a dialogue, a grammar tip, a speaking scenario, guided prompts, and a short model response.
- **Grammar Academy Module 1** in `src/data/curriculum/grammar/module-01/`: six complete Sentence Foundations lessons, five scored questions per lesson, writing tasks, speaking options, and a final review.
- **Four weekly reviews**, **ten-question placement assessment**, and **three self-reviewed writing prompts**.
- **Personalized messages** in `src/data/messages/dada.json` and interface localization in `src/data/translations/`.

## Data contract
All items have stable IDs. Multiple-choice `correctIndex` is zero-based. Never display a model speaking response before the learner attempts the activity. Do not auto-score open-ended writing or speaking. Daily goal: complete the word, phrase, and speaking activities; optional grammar and reviews do not count toward the 3/3 goal.

## Editorial and QA status
All launch-scope lessons have authored explanations, exercises, and model responses. A targeted editorial review and automated structure/answer-index checks have been completed. The content is **not yet learner-tested or independently copyedited**. Validate the 5–8-minute daily flow with Dada before production. Some instructional notes and exercise feedback intentionally use English fallback where full Filipino variants are not supplied; the UI should use `en` fallback and must not fabricate missing translations. The repository now includes the React application, automated checks, and a GitHub Pages deployment workflow. See `DEPLOYMENT.md` for setup and verification.

## Codex instructions
Build React + TypeScript + Vite + Tailwind, IndexedDB, MediaRecorder with written fallback, and a GitHub Pages PWA. Use the content files as source of truth; do not replace them with generated placeholders. Validate schemas and question keys, handle Philippine-calendar launch dates, support local backup/restore, and preserve all progress during updates.

## Design
Background `#FAFAF9`, white cards, gray surfaces, charcoal text and buttons. Blue `#2563B8` only for the app name, Dada's nickname, selected icons, and small indicators. No large blue backgrounds or gradients.

## Curriculum review — content v1.1.0
- Corrected mismatched grammar explanations and hints, ambiguous question wording, and speaking models that did not answer their scenarios.
- Replaced generic daily grammar tips with usable patterns and made dialogue turns respond to each other.
- Varied correct-answer positions while preserving correct answer text and all existing IDs.
- Added the missing prepositions question to the Grammar Academy final review (now six questions, one per lesson).
- Added optional recall inside speaking, explicit optional-duration guidance, and self-review models for weekly applications.
- Clarified that the placement score uses only the ten closed questions and is not a speaking or proficiency rating. Writing remains optional and unscored.
- Daily practice remains word + phrase + speaking (3/3). Grammar and reviews are optional additional sessions. One short complete speaking attempt counts; models are short examples, not timed scripts.
- Weekly reviews become available after Days 7, 14, 21, and 28. The legacy manifest review checkpoints remain documented separately.
- Implementation must consume the additive guidance fields documented in the manifest. The application renders these authored guidance fields.

### Remaining learner check
Try an early workplace lesson, an everyday conversation lesson, and one grammar lesson with Dada. Check whether instructions are clear, the daily core fits 5–8 minutes, and the prompts match situations he actually encounters. Shorten or simplify based on that evidence; do not assume a one-minute response or a perfect quiz score is required.

## Application

Install with `npm ci`, run locally with `npm run dev`, and build with `npm run build`. Run `npm test` for unit/component tests and `npm run test:e2e` for production-preview browser tests after installing Playwright Chromium. See `DEPLOYMENT.md` for the manual Pages workflow and `IMPLEMENTATION_STATUS.md` for verified results.
