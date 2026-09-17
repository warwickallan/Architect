# Lesson template

Create `lessons/L<nnn>-<slug>/` with the files below. Every file starts with the objective IDs it covers. Slides/script target a 5–10 minute visual explanation with **one clear mental model**.

## lesson.md

```
# L<nnn> — <Title>
Objectives: <IDs across CPMAI / AB-100 / AB-410 / AB-620>
Product context: <feature or "none — foundation">

## Why this exists (business/CPMAI lens)
## The concept, from fundamentals (plain British English)
## Where it sits in our architecture (AB-100 lens) — link diagram.mmd
## How it's implemented (AB-410 / AB-620 lens)
## At least one alternative and the trade-off
## What Warwick must do himself → lab.md
## Common mistakes / exam traps
```

## slides.md — 6–10 slides, one idea each

```
1. The question this lesson answers
2. The mental model (the diagram)
3–7. Build the model up one element at a time
8. Alternative & trade-off
9. Where it lands in Architect
10. Recap + lab
```

## video-script.md — narration per slide, ≤ 150 words each

## storyboard.md or diagram.mmd — the reusable visual (Mermaid preferred)

## references.md — `S<nn>` IDs from `references/SOURCE-REGISTER.md`; curated supplements with objective IDs

## lab.md — one representative task Warwick performs; expected result; what to screenshot

## quiz.md — 5–10 retrieval questions with answers; reused for the delayed retest (≥ 7 days later)

## evidence.md — use `templates/evidence-template.md`

After the lesson: update `lessons/README.md` index and `curriculum/COVERAGE-MATRIX.csv` (to *Explained* only; *Labbed* once lab evidence exists).
