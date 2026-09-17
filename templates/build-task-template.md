# Build task template

Paste into a session (or a `products/<id>/backlog.md` item) for implementation work.

```
Implement this Architect product task:

[TASK]

Before changing anything:
- read README.md, CLAUDE.md, the product README, current architecture and ADRs;
- state the business outcome;
- identify data ownership and trust/security boundaries;
- map relevant syllabus objective IDs;
- separate deterministic logic from agentic reasoning;
- list assumptions about unavailable APIs / MCP / licences / authentication (→ ASSUMPTIONS.md).

Then:
1. Propose the minimum viable design.
2. Identify the one representative step Warwick performs himself (teaching-first rule).
3. Implement.
4. Add happy-path, failure and boundary tests.
5. Add error handling and audit evidence.
6. Update the runbook.
7. Create an ADR if the architecture changed.
8. Create evidence scaffolding for what Warwick must understand.
9. Update COVERAGE-MATRIX.csv conservatively (Applied at most).

Never fabricate an external system capability. Use a clearly labelled mock/stub when real access is unavailable.
```
