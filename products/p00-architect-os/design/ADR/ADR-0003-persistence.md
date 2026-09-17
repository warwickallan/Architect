# ADR-0003 — Persistence: JSON files in the repo, no database

**Status:** Accepted · **Date:** 2026-09-17 · **Product:** P00 Architect OS · **Objective IDs:** AB100-1.1.3 · CPMAI-3.3 · **Decided by:** Warwick · **Record:** DEC-003, REQ-003

## Context
Principle: "Architect OS is the working interface; GitHub is the durable backing store." Claude Code (terminal) and the app must operate on the same record.

## Options
| Option | Pros | Cons |
|---|---|---|
| JSON files per entity type under `products/<id>/record/` | Diff-able, reviewable in PRs, zero infrastructure, terminal and app share it | No queries; naive concurrency |
| SQLite | Queries, single file | Binary blob in git; terminal access needs tooling |
| Supabase (MCP available) | Real DB, hosted | Record leaves the repo; not diff-able; another system to govern |

## Decision
JSON files, one per entity type, plus `meta.json` for stage/gate/ID counters. Artefacts are rendered from the record into `discovery/*.md`.

## Consequences
Single-user only. Migrate only when something needs a query. Rendered Markdown is derived — never hand-edited.

## Warwick's explain-back
_pending_
