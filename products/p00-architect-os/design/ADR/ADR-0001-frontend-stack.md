# ADR-0001 — Front end: Vite + React + TypeScript

**Status:** Accepted · **Date:** 2026-09-17 · **Product:** P00 Architect OS · **Objective IDs:** AB100-1.3.3 · **Decided by:** Warwick (Claude presented options) · **Record:** DEC-002

## Context
Warwick chose a React/Node web app (not a Power Apps canvas app) as the working interface, following the proven single-tab-and-iterate pattern of Concerto Studio, Launch and RAID (FACT-002). The record's entity shapes will change repeatedly during project one (UNKNOWN-001).

## Options
| Option | Pros | Cons |
|---|---|---|
| Vite + React + TS | Fastest edit/refresh loop; no SSR or routing needed for a single-tab local tool; TS catches breakage as entity shapes change | TS adds some ceremony |
| Next.js | Routing, SSR, API routes in one | Unneeded weight for a local single-user tool |
| Plain JS React | Least ceremony | Shape drift goes unnoticed until runtime |

## Decision
Vite + React + TypeScript.

## Consequences
Single-page app; back end is a separate Node process (ADR-0002). Revisit if the OS is ever deployed off this machine or grows multi-page navigation.

## Warwick's explain-back
_pending_
