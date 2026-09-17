# ADR-0002 — Back end: Node + Express

**Status:** Accepted · **Date:** 2026-09-17 · **Product:** P00 Architect OS · **Objective IDs:** AB100-1.3.3 · **Decided by:** Warwick · **Record:** DEC-002

## Context
The browser cannot read/write the repo's files or spawn the Claude CLI; a local server process is required. Warwick specified Node.

## Options
| Option | Pros | Cons |
|---|---|---|
| Express | Boring, ubiquitous, Warwick's likely muscle memory | Older API style |
| Fastify / Hono | Faster, typed | No material benefit at this scale |

## Decision
Express (TypeScript, run with `tsx`). Interchangeable with Fastify/Hono later — the server is thin: file I/O for the record, one route that runs the interview turn, one that renders artefacts.

## Consequences
Two processes in dev (Vite dev server proxying `/api` to Express). Concurrency is single-user; no locking.

## Warwick's explain-back
_pending_
