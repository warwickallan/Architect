# ADR-0009 — Three repositories; Architect OS and Architect LMS are exempt from the method's gates

**Status:** Accepted · **Date:** 2026-09-20 · **Scope:** programme-wide · **Objective IDs:** AB100-1.3.3, CPMAI-2.4, CPMAI-2.7 · **Decided by:** Warwick (ChatGPT proposed; Claude had argued the opposite)

## Context

Architect OS is a working application. Architect LMS — the adaptive learning and competency platform, with the Q&A Engine as its first major subsystem — is now specified as a reusable product with commercial potential beyond this programme.

Two questions came to a head.

**Boundary.** `products/p02-architect-lms/` inside this repository was proposed. That places a reusable product inside a programme-of-record repo, and makes "does it depend on Architect?" a question a reader answers by inspection rather than by structure.

**Process.** The method (`method/README.md`) says every product runs candidate → discovery → Discovery Decision → architecture. Claude argued that if the LMS is a portfolio project it must therefore go through discovery, and proposed writing a discovery record from the brief for Warwick to confirm.

Warwick rejected both.

## Decision

**Three repositories, three concerns.**

| Repository | Role |
|---|---|
| `warwickallan/architect` | **Programme of record.** Master syllabus, qualification coverage, learning resources, transcripts and audio courses, evidence and portfolio, project register, cross-project architecture learning, the method itself. Not an application. |
| `warwickallan/architect-os` | **Personal architecture/workflow application.** Discovery, architecture workspace, decision support, evidence capture, method tooling. Currently still at `products/p00-architect-os/`; splitting out is scheduled, not yet done. |
| `warwickallan/architect-lms` | **Adaptive learning / competency platform.** Knowledge Engine, Q&A Engine, Assessment Console, Learner Model, Assurance Engine, Analytics. Created 2026-09-20. |

**Dependency direction is one-way.** `architect` may reference the applications. Neither application may read `architect`'s filesystem. If the LMS needs qualification data it arrives through an ingestion boundary — an export step, a published JSON/YAML, a package, an API or a source URL — and the result is committed to the LMS repo. `architect-lms` must be independently cloneable and runnable. This is not tidiness: it is the test of whether the platform is genuinely subject-agnostic. A single relative path into this repository would make it subject-specific while appearing to work.

**Architect OS and Architect LMS are exempt from mandatory method discovery/process gates.**

> Architect OS and Architect LMS are internal learning/infrastructure products and are exempt from mandatory Architect Method discovery gates. They should still maintain lightweight architecture decisions and evidence where doing so adds learning value, but process must not impede experimentation or delivery.

The reasoning is circularity: the OS exists partly to embody the method, and the LMS exists partly to build the knowledge the method needs. Gating them behind the method means *"you may not build the machine that teaches you to build machines until you have demonstrated you can build machines."*

A retrospective discovery record written after the product was conceived is not discovery — it is theatre, and it would teach the wrong lesson about what discovery is for. The method is not weakened by this exemption; it is demonstrated by it. **Governance should be proportionate to risk and context.** A customer-facing enterprise AI initiative follows the method. A personal learning console on a Saturday morning does not.

**Numbering.** `P01`, `P02`… are reserved for initiatives run *through* the method. The platforms are not projects in that sense:

```
CORE                      PROJECTS
├── Architect programme   ├── P01 Tech PMO AI
├── Architect OS          ├── P02 …
└── Architect LMS         └── P03 …
```

**The delay to P01 is knowingly accepted** (RSK-001 in the OS record). One sentence, no ceremony.

## Options considered

| Option | Pros | Cons |
|---|---|---|
| **Three repos (chosen)** | Correct boundary; proves independence; each product cloneable and sellable; clean CI per product | Three places to look; cross-repo changes need two commits |
| One repo, `products/p02-architect-lms/` | One trace, one CI, `git subtree split` later | Wrong boundary for a reusable product; invites filesystem coupling; forces a product-numbering fiction |
| LMS in its own repo, OS stays inside | Half the move | Inconsistent; the same argument applies to both |

| Option | Pros | Cons |
|---|---|---|
| **Exempt OS/LMS from the gates (chosen)** | No circularity; no manufactured artefacts; demonstrates proportionate governance | The method is not exercised on these two products |
| Full method compliance for both | Consistency; more method practice | Circular; slows the tools the method depends on; produces fake discovery evidence |

## Consequences

- `method/README.md` gains an explicit scope statement: the method applies to PROJECTS; CORE platforms keep lightweight ADRs and evidence only.
- `products/` describes projects run through the method. CORE platforms are listed in `REGISTER.md` with their repository URLs.
- ADR-0008's decision (OS code at `products/p00-architect-os/`) stands for now; its closing aside about where the LMS lives is superseded by this ADR, and a note is appended there.
- Evidence for the syllabus can still come from these builds; it is cited from the objective IDs on the ADRs and artefacts, not from a discovery pack.
- Risk accepted: without gates, the LMS can sprawl. The mitigation is the milestone list in its build brief plus per-milestone ADRs, not a gate.

## Warwick's explain-back

_pending_ — the question worth answering here: *when is process proportionate, and what does it cost you to apply it where it does not belong?*
