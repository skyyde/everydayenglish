# Everyday English 💙

A free, offline-friendly English learning PWA made for Dada.

## Curriculum data
The `src/data` folder contains versioned, static, learner-facing content. It is **not** the application or a deployed website. Codex should build the React + TypeScript app around these files, without silently replacing lesson content.

- `curriculum/daily/day-NNN.json`: 30 daily word, phrase, and speaking lessons.
- `curriculum/grammar/module-01/lesson-NN.json`: six Sentence Foundations lessons.
- `curriculum/placement/assessment.json`: ten automatically graded questions and three self-reviewed prompts.
- `curriculum/reviews/week-NN.json`: four weekly reviews.
- `curriculum/manifest.json`: available content and release status.
- `messages/dada.json`: personal greetings and encouragement, separate from teaching content.

## Data contract
Every item has a stable `id`. Daily activities are `word`, `phrase`, and `speaking`. Multiple-choice answers use **zero-based** `correctIndex`. Display answers only after a submitted attempt. Open-ended answers use guided self-review, never automatic AI grading. A grammar lesson has five scored questions and one self-reviewed writing prompt. Content in English, Taglish, and Filipino may be extended over time; missing translations must fall back to English and be flagged during editorial QA.

## Editorial status
This is the **v1 content seed** assembled from the approved 30-day plan and previous drafts. Wording has been normalized for machine-readable use; some examples and checks have been reconstructed, not verbatim recovered. Before public launch, review the content with Dada, verify all answer keys, and complete any missing translation variants. Modules 2–8 are roadmap only, not usable lessons.

## Product constraints
Design: warm off-white, gray accents, blue only for app name, 'Dada', icons, and small indicators. Personal progress belongs in IndexedDB, never in the public repo. Support Philippine-calendar launch dates, backups, and an optional written speaking alternative. Do not use fabricated speech scoring.
