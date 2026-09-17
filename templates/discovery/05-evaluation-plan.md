# 05 — Evaluation plan: <product>

**Objective IDs:** CPMAI-1.1.5 · CPMAI-1.1.6 · AB100-3.1.4 · AB100-3.2.1 · AB620-3.1.1 · AB620-3.1.2
**Author:** Warwick + Claude · **Date:** · **Status:** Draft | Reviewed

This plan becomes the real test set. Test cases below are copied — not reinvented — into `products/<id>/tests/` at build time and results are recorded against the same IDs.

## Business success

| Metric | Baseline (from 03) | Target | Measured how | When |
|---|---|---|---|---|
| e.g. PM admin effort per meeting | | ≥ 50% reduction | | after 4 weeks' adoption |
| adoption (eligible vs processed) | | | | |
| user correction rate | | trend down | | |

## System / AI success

| Metric | Target | Measured how |
|---|---|---|
| interpretation / extraction precision (per class) | baseline then ≥ 90% auto-accepted | eval set |
| tool-call / external write success after retries | ≥ 95% | logs |
| consequential writes with audit receipt | 100% | logs |
| high-risk cases routed to human | 100% of defined cases | eval set |
| false approvals / false auto-actions | 0 in defined high-risk cases | eval set |
| duplicate creation | < 2% | eval set |

## Seed test cases

| ID | Class | Scenario (plain language) | Input / fixture | Expected outcome | Expected HIL? | Objective IDs |
|---|---|---|---|---|---|---|
| T001 | happy | | | | no | |
| T002 | failure | | | | | |
| T003 | boundary | | | | | |
| T004 | HIL | | | | yes | |
| T005 | adversarial / prompt manipulation | | | | | AB100-3.4.4 |

Aim for at least three of each class before the Discovery Decision; grow the set during build.

## Evaluation method

How results are judged (exact match / rubric / human review / LLM-judge with human sample), who reviews, cadence, and where results are stored.
