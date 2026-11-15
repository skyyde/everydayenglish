# Everyday English 💙

A free, offline-friendly English learning PWA for Dada.

## Authored curriculum
- **30 daily lessons** in `src/data/curriculum/daily/`: each includes a word, phrase, check questions, examples, a dialogue, a grammar tip, a speaking scenario, guided prompts, and an extended model response.
- **Grammar Academy Module 1** in `src/data/curriculum/grammar/module-01/`: six complete Sentence Foundations lessons, five scored questions per lesson, writing tasks, speaking options, and a final review.
- **Four weekly reviews**, **ten-question placement assessment**, and **three self-reviewed writing prompts**.
- **Personalized messages** in `src/data/messages/dada.json` and interface localization in `src/data/translations/`.

## Data contract
All items have stable IDs. Multiple-choice `correctIndex` is zero-based. Never display a model speaking response before the learner attempts the activity. Do not auto-score open-ended writing or speaking. Daily goal: complete the word, phrase, and speaking activities; optional grammar and reviews do not count toward the 3/3 goal.

## Editorial and QA status
All launch-scope lessons have authored explanations, exercises, and model responses. The content is **not yet learner-tested or independently copyedited**. Automated structure/answer-index checks and a final teaching review are required before production. Some instructional notes and exercise feedback intentionally use English fallback where full Filipino variants are not supplied; the UI should use `en` fallback and must not fabricate missing translations. This repository is a learning-content source, not a running application.

## Codex instructions
Build React + TypeScript + Vite + Tailwind, IndexedDB, MediaRecorder with written fallback, and a GitHub Pages PWA. Use the content files as source of truth; do not replace them with generated placeholders. Validate schemas and question keys, handle Philippine-calendar launch dates, support local backup/restore, and preserve all progress during updates.

## Design
Background `#FAFAF9`, white cards, gray surfaces, charcoal text and buttons. Blue `#2563B8` only for the app name, Dada's nickname, selected icons, and small indicators. No large blue backgrounds or gradients.
