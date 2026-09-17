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
`products/p00-architect-os/` with `client/`, `server/`, `record/`, `discovery/`, `design/`. The LMS, when built, gets its own top-level root (it is not run through the method).

## Consequences
Product folder layout in `products/README.md` gains `client/` and `server/` for software products.

## Warwick's explain-back
_pending_
