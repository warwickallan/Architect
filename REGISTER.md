# Project register

What exists, where it lives, and which of the two kinds it is. Authoritative list; `products/` holds only PROJECTS.

## CORE — platforms that support the programme

Exempt from the method's discovery/process gates ([ADR-0009](architecture/ADR/ADR-0009-repo-topology-and-method-exemption.md)). They keep lightweight ADRs and evidence where that adds learning value.

| Platform | Repository | State | Purpose |
|---|---|---|---|
| **Architect programme** | `warwickallan/architect` (this repo) | active | Syllabus, qualification coverage, learning resources, transcripts and audio courses, evidence and portfolio, the method, cross-project architecture learning |
| **Architect OS** | `warwickallan/architect-os` *(planned; code currently at `products/p00-architect-os/`)* | v0.2 built | Personal architecture/workflow application: discovery, architecture workspace, decision support, evidence capture |
| **Architect LMS** | [`warwickallan/architect-lms`](https://github.com/warwickallan/architect-lms) | v0.1 built 2026-09-20 | Adaptive learning / competency platform: Knowledge Engine, Q&A Engine, Assessment Console, Learner Model, Assurance Engine, Analytics |

Dependency direction is one-way: this repo may reference the applications; neither application reads this repo's filesystem. Qualification data reaches the LMS through an explicit export/ingestion boundary (`tools/import-syllabus.mjs` there, taking a path as an argument) and is committed in that repository.

## PROJECTS — initiatives run through the method

| ID | Project | Stage | Note |
|---|---|---|---|
| **P01** | Tech PMO AI *(candidate)* | 0 Opportunity | Becomes P01 only if it passes discovery, run through Architect OS. Where the AB-410/AB-620 evidence comes from. |

Numbering is reserved for method-run initiatives. The CORE platforms are not projects and are not numbered.

## What the LMS build covered

AB-100 is its first tenant: the 74 official objectives were imported with provenance, a concept graph was authored over them, and questions were minted by a writer pass and independently reviewed (10 of 18 approved). Objective IDs exercised by the build itself: AB100-1.3.3 (build/buy/extend), AB100-3.1.4 and 3.1.5 (monitoring and telemetry), AB100-3.2.1 (test metrics), AB100-1.1.3 (organising solution data), CPMAI-2.4, 2.7, 4.2 and 1.5. None are marked *Evidenced* in the coverage matrix until Warwick can explain and defend them — see the evidence rule in `CLAUDE.md`.
