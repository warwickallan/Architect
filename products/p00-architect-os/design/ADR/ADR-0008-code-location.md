# ADR-0008 — Code lives at `products/p00-architect-os/`

**Status:** Accepted · **Date:** 2026-09-17 · **Product:** P00 Architect OS · **Objective IDs:** — · **Decided by:** Warwick · **Record:** DEC-008

## Context
Warwick made Architect OS Project Zero — a product run through the method like any other.

## Options
| Option | Pros | Cons |
|---|---|---|
| `products/p00-architect-os/` | Consistent with "every product goes through the method"; record, ADRs and code together | `products/` mixes a tool with business products |
| top-level `apps/` | Separates tools from business products | Breaks the one-folder-per-product rule; record would live elsewhere |

## Decision
`products/p00-architect-os/` with `client/`, `server/`, `record/`, `discovery/`, `design/`. ~~The LMS, when built, gets its own top-level root (it is not run through the method).~~ — *that aside is superseded by [ADR-0009](../../../../architecture/ADR/ADR-0009-repo-topology-and-method-exemption.md): the LMS lives in its own repository, `warwickallan/architect-lms`, not a top-level root here.*

## Consequences
Product folder layout in `products/README.md` gains `client/` and `server/` for software products.

**Amended 2026-09-20 (ADR-0009):** the decision above still governs where Architect OS code sits *today*, but the OS is now classed as a CORE platform rather than a project, and is scheduled to move to its own repository (`warwickallan/architect-os`). Until that move happens this path is current.

## Warwick's explain-back
_pending_
