# Architect CPMAI audio course — chapter plan

**Spine:** the PMI-CPMAI Examination Content Outline (Sept 2025): five domains, 37 tasks (`curriculum/objectives/cpmai.md`), plus the six-phase methodology.
**Sources:** ECO tasks + enablers (primary) · PMI reference articles (`../../sources/pmi-reference-notes.md`) · Udemy transcript (Sanal Mathew John) for structure and examples where the coverage audit rated it *well* (`../../Udemy - Sanal Mathew John/COVERAGE.md`).
**Format:** `tools/narrate/FORMAT.md` — same shape every chapter. Target 1,400–2,000 words (9–13 min). Thirteen chapters ≈ 2½–3 hours.
**Model:** Opus writes; Fable planned and reviews; Warwick reviews chapter 3 or 4 before the batch.

| # | Chapter | ECO tasks | Sources (transcript lectures / articles) | Notes |
|---|---|---|---|---|
| 1 | What CPMAI is, and why AI projects are different | intro; exam facts | 004, 008–010 (V7→V8), ECO pp.4–5, 13–14 | CRISP-DM roots + agile + governance; data-driven, iterative, probabilistic; the exam: 5 domains/weights, 120 Q (100 scored), 160 min, prep course required; how to use this course |
| 2 | The six phases and the project manager's role | CPMAI-2.4, 2.8 (gates), 3.8, 4.5, 4.6 (go/no-go) | 022, 023, 025–030 | Phases as an iterative loop with go/no-go gates; PM deliverables per phase; "which phase are we in?" as the exam's favourite question |
| 3 | The seven patterns of AI | CPMAI-2.1 (map problems to patterns), 2.2 | PMI *Seven Patterns* article (primary); 017, 018, 020 | Fills the 6 uncaptioned lectures; combining patterns; dominant-pattern rule |
| 4 | Domain II (1): find the right problem and test feasibility | CPMAI-2.1, 2.2 | 011, 022, 005 + ECO enablers | Stakeholder interviews, personas, AI vs traditional alternatives, organisational readiness; *In practice:* the Architect discovery interview |
| 5 | Domain II (2): risk, scope, resources and adoption | CPMAI-2.3, 2.4, 2.6, 2.10 | 044, 006, 035 + ECO enablers | Failure modes, cyber, ethics, reputation; scope statement with in/out, assumptions, constraints; team skills, compute, contractors; change management and adoption metrics — all *light* in the course, written from the ECO |
| 6 | Domain II (3): ROI, business case, success criteria, solution draft | CPMAI-2.5, 2.8, 2.9, 2.7 | 022, 028, 030, 009 + ECO enablers | TCO, cost-benefit, KPI thresholds, technical benchmarks, adoption criteria; high-level architecture, data flow, integration points, deployment considerations |
| 7 | Domain III (1): what data, who knows it, where it lives, where to work | CPMAI-3.1, 3.2, 3.3, 3.4 | 025, 026, 022 + ECO enablers | Types/formats/volume/granularity/quality standards; data SMEs and stewards; internal, external, cloud, legacy sources; ownership and permissions; secure AI workspace; the four Vs |
| 8 | Domain III (2): gather, check, evaluate, decide, report | CPMAI-3.5, 3.6, 3.7, 3.8, 3.9 | 025, 026, 046, 039 + PMI *Data Governance* article | Extraction/transfer validation/refresh; rights, licences, PIA, lineage; quality dimensions and EDA; sufficiency, representativeness, gaps, go/no-go; executive summaries |
| 9 | Domain IV (1): machine learning for project managers | CPMAI-4.1 | 032, 033, 034, 027 | Supervised/unsupervised/reinforcement; the algorithms to recognise; LLMs, foundation models, RAG, fine-tuning; complexity vs interpretability trade-off |
| 10 | Domain IV (2): prepare, train, check quality, evaluate, approve | CPMAI-4.2, 4.3, 4.4, 4.5, 4.6 | 026, 027, 028, 050, 052 | Cleaning/labelling/feature engineering/augmentation; train/validation/test; hyperparameters; experiment tracking; metrics (precision, recall, F1, RMSE, confusion matrix), over/underfitting; the data-readiness gate and the deployment gate |
| 11 | Domain V: deploy, operate, govern, hand over | CPMAI-5.1–5.7 | 029, 054, 030 + ECO enablers | Deployment plan and rollback; deployment coordination and post-deployment checks; model governance — versioning, concept/data/model drift, retraining; dashboards and alerts; final report and lessons; transition to operations; incident response and continuity |
| 12 | Domain I: responsible and trustworthy AI, across every phase | CPMAI-1.1, 1.2, 1.3, 1.4, 1.5 | 035, 037–039, 044–056 + PMI *Ten Ethical Considerations* | Privacy/security plan; transparency and explainability; bias checks; regulatory tracking (GDPR, CCPA, EU AI Act); accountability records, version control, go/no-go documentation; embedding trustworthy AI phase by phase |
| 13 | Passing the exam, and using CPMAI for real | exam strategy | 005–007, 057–059; `method/README.md` | Question styles ("what should the PM do next", "which phase"), elimination, single vs multi-select; a study plan; how CPMAI maps onto Architect's discovery-to-review lifecycle |

## Coverage check

Every one of the 37 tasks appears in at least one chapter; Domain II and III tasks the course covers lightly (2.3–2.7, 2.9, 2.10, 3.1–3.5, 3.8, 3.9, 5.1, 5.2, 5.4–5.6) are written from the ECO enablers rather than the transcript. Domain weights vs chapters: I 15% → 1 chapter (+ woven through); II 26% → 3; III 26% → 2; IV 16% → 2; V 17% → 1. Chapter 8 and 11 may need splitting if they overrun.

## Status

| # | Script | Reviewed | Narrated |
|---|---|---|---|
| 1–13 | draft (Opus, 2026-09-19; 24,657 words, 153,608 chars, $2.98) — Fable read 3, 4, 11 | — | — |
