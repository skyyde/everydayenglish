# Implementation status

This is a work in progress, not a production release. Curriculum files remain untouched.

Implemented: responsive app shell; local profile and Philippine-calendar launch date; daily word and phrase quizzes; lesson archive; Module 1 grammar lessons and final; weekly reviews; placement assessment; JSON backup preview, confirmation, validation and transactional restore; saved words; optional review schedules at 2, 7, 14 and 30 days for newly completed word activities; progress, factual recent completions and derived achievements; speaking preparation timer, optional targets, recording/playback/retry, written fallback, and optional browser transcription. Recordings remain separate from JSON backups. Text-to-speech has a browser capability fallback.

Before release: complete onboarding and full language coverage, persist individual exercise attempts, review assessment and completion semantics, test browser media and permission failures, verify responsive/accessibility and offline behavior in a browser, add installable icon sizes, configure and verify GitHub Pages deployment, and perform learner testing. Existing word completions before review scheduling was added have no recorded completion dates and therefore cannot be scheduled retroactively without inventing dates. Speaking attempts from before attempt tracking are not counted. The PWA configuration is preliminary.

Playwright browser tests are present, but the execution environment denied Chromium permission to create a local socket; they have not yet passed. Do not deploy as production v1 until acceptance criteria are verified.
