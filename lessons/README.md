# Lessons

Visual-first lesson packages. None built yet. L000 is a standalone orientation; L001–L004 are **unlocked in context** by the discovery interview (the skill emits `unlock` concepts — see `.claude/skills/discovery-interview/SKILL.md`) rather than taught as prerequisites; everything after is chosen just-in-time by what the selected product needs. The LMS that will eventually present these is a separate app from Architect OS.

## Numbering

`L<nnn>-<slug>/`. L000–L004 are the opening sequence; later lessons take the next free tens number within a theme. Numbers are stable once used.

## Opening sequence

| Lesson | Primary lens | Purpose | Produces (professional artefact) | Status |
|---|---|---|---|---|
| L000 stack-map | all four | Short visual orientation: four viewpoints + lifecycle. No product decisions. | — | planned |
| L001 business-problem-and-value | CPMAI | Problem, people, current process, why the control exists, scale, baseline, value hypothesis. No solution design. | `discovery/01`, `discovery/02` | planned |
| L002 ai-suitability | CPMAI + early AB-100 | Is AI justified; deterministic vs language vs human; failure consequences; go/no-go/reshape. | `discovery/03` | planned |
| L003 data-authority-constraints | CPMAI + AB-100 | Stakeholders, authority, sources of truth, read/write, identity, sensitivity, evaluation criteria; Discovery Decision. | `discovery/04`, `05`, `06` | planned |
| L004 architecture-hypothesis | AB-100 | First end-to-end hypothesis and material ADRs, from discovery evidence only. | `design/`, ADRs, `TRACE.md` | planned |

For L001–L004 the lab **is** the real artefact: Warwick fills the discovery template for the selected product and defends it. No practice worksheets.

## Package contents (from `templates/lesson-template.md`)

```
lesson.md         concept, fundamentals, where it sits in the architecture, alternatives
slides.md         6–10 slide outline for a 5–10 minute visual explanation
video-script.md   narration
storyboard.md     shot-by-shot, or diagram.mmd when a single diagram carries it
diagram.mmd       the reusable mental model (Mermaid)
references.md     sources with IDs from references/SOURCE-REGISTER.md + curated supplements
lab.md            one representative hands-on task Warwick performs himself
quiz.md           5–10 retrieval questions; used again for the delayed retest
evidence.md       what Warwick did, explained, and when it was retested
```

Every file opens with the objective IDs it covers.

## Index

| Lesson | Objective IDs | Diagram | Status |
|---|---|---|---|
| — | | | |
