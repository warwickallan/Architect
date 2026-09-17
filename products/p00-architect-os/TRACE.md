# TRACE — P00 Architect OS

| Chain | Problem | Discovery evidence | Requirement / constraint | ADR | Implementation | Test / evaluation | Outcome | Realised value | Portfolio | Objective IDs |
|---|---|---|---|---|---|---|---|---|---|---|
| C01 | PAIN-001 templates are theatre | FACT-001, FACT-002, HYP-001 | REQ-001 one Discovery tab | ADR-0001, 0002, 0008 | client/, server/ | manual: run discovery for P01 | | MET-001 | | CPMAI-2.1, 2.4 |
| C02 | PAIN-002 retyped facts, lost provenance | HYP-002, UNKNOWN-001 | REQ-003 record in repo; REQ-007 rendered artefacts | ADR-0003, 0005 | record/, server/render | MET-002 review | | MET-002 | | CPMAI-1.5, 3.3 |
| C03 | wrong facts would propagate | — | REQ-002 confirm before commit | ADR-0007 | canvas confirm/edit/discuss | pending-vs-confirmed render check | | | | AB100-3.4.8, CPMAI-1.5 |
| C04 | no API key available; subscription exists | FACT-003, UNKNOWN-002 | — | ADR-0004 | server/llm.ts | interview turn round-trips | | | | CPMAI-3.4 |
| C05 | conversational input | — | REQ-005 dictation | ADR-0006 | client/src/input | dictation → transcript → turn | | | | — |
