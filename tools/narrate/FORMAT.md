# Architect audio course — chapter format

Every chapter of every narrated course follows this shape. Consistency is the point: the listener always knows where they are.

## Structure

1. **Title line** — "Chapter N. <Title>." Then the exam anchor in one sentence: "This chapter covers Domain II, tasks 1 to 3: identifying the problem, evaluating feasibility and assessing risk."
2. **Why it matters** — two or three sentences: what goes wrong on real AI projects when this is done badly.
3. **"In this chapter you will learn…"** — three to five objectives, each a verb phrase ("…how to separate the intended purpose of a control from what it does in practice").
4. **Body** — the teaching, in a logical order that may differ from the source course. Plain British English, spoken register, short sentences. Concrete examples from PMO/implementation work where they help. Every fact traceable to the ECO, PMI's public material, or the source lecture; no invented statistics.
5. **Callouts** — used sparingly and always with the same cue words, so they're audible:
   - "**It's important to remember that…**" — an exam-critical fact.
   - "**A common mistake is…**" — a distractor the exam is likely to use.
   - "**In practice…**" — the Architect method's view (how we'd do it on a real project).
6. **"Before we move on, a quick check."** — two or three self-test questions. After each question write the stage direction `(pause)` on its own line — the narration step turns it into a two-second silence and never reads it aloud — then "The answer is…".
7. **Recap — "By the end of this chapter you should be able to…"** — the objectives restated as outcomes, then three to five key takeaways in one sentence each.
8. **Bridge** — one sentence pointing to the next chapter.

## Rules

- Target 1,400–2,000 words per chapter (9–13 minutes at narration pace). Split rather than overrun.
- No "in this video", "click on", "as you can see on the screen", Udemy housekeeping, ratings, or instructor self-promotion.
- Numbers, acronyms and names read cleanly aloud: expand on first use ("the Examination Content Outline, or ECO"), write "Phase one" not "Phase I" in the body, spell out DACUM the first time.
- Say "PMI-CPMAI" once at the start; "CPMAI" thereafter.
- Never reproduce course text verbatim; the source is for structure and examples, the facts come from the syllabus.
- Chapters end with a full stop, never a question, so the audio doesn't hang.

## File conventions

`Transcripts/<exam>/audio/<course-slug>/NN - <Title>.md` — the script, with a YAML header: chapter number, title, ECO tasks covered, sources used, word count, status (draft / reviewed / narrated).
`…/NN - <Title>.mp3` — the narration, same name.
`…/PLAN.md` — the chapter plan with ECO coverage per chapter.
