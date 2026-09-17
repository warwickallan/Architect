# The delivery method — "Product Zero"

Architect's reusable AI transformation / solution-architecture playbook: what to do, in what order, what evidence to capture, what decisions to make, and what must exist before moving on. Built on the first projects, reused and improved on every later one.

**Version:** 0.2 (2026-09-17) — lifecycle with gates and a structured record; no worked example yet. Bump after each project retrospective and log below.

**Working interface:** the method runs through **Architect OS** (`products/p00-architect-os/`) — a conversational interface over a structured project record — with the same skills runnable from Claude Code in the terminal. **GitHub is the durable store**: the record and every rendered artefact live in the repo. Markdown is persistence and deliverable format, not the user interface.

## Lifecycle: stage → activities → artefacts → gate

A stage does not finish because someone clicked *Next*. It finishes when the gate's evidence conditions are demonstrably true in the record.

| # | Stage | Lens | Activities (what the architect does) | Artefacts (durable outputs) | Gate (must be true to progress) |
|---|---|---|---|---|---|
| 0 | **Opportunity** | CPMAI D2 | Capture candidate pain points; light brief; score against criteria | Candidate brief | Candidate selected by Warwick |
| 1 | **Discover** | CPMAI D2, D3, D1 · AB-100 1.1 | Interview stakeholders; map current state; establish authority; baseline; assess AI suitability per step; data/source-of-truth; risks; evaluation plan | Structured record + discovery pack (brief, current-state, value & suitability, data/authority/constraints, evaluation plan) | **Discovery Decision**: validated problem · current state · stakeholder authority · baseline · AI suitability · data feasibility · value hypothesis · risks · success criteria — then *proceed / reshape / stop* |
| 2 | **Architect** | AB-100 · CPMAI 2.7 | Target architecture; source-of-truth decisions; AI/deterministic boundaries; trust/security boundaries; HIL authority; integration choices; NFRs | Architecture pack, ADRs, trace table | **Architecture baseline**: all of the above explicit, key ADRs accepted by Warwick, explain-back done |
| 3 | **Mobilise** | CPMAI 2.6, 2.10 · PM practice | Scope; backlog; milestones; dependencies; RAID; resources; stakeholders & comms; change/adoption plan; environments & access | Backlog, plan, RAID, stakeholder/comms plan, environment/access confirmation | **Ready to build**: access confirmed, backlog sized, RAID owned, reviewers named |
| 4 | **Build & Evaluate** | AB-410 · AB-620 · CPMAI D4 | Vertical slices; tests and eval set from the evaluation plan (continuous, not a phase after build); HIL; audit; error paths | Working software/config, tests, eval results, security & authority model, runbook | **Release readiness**: eval targets met on the defined set, failure & boundary cases pass, security/platform review done, UAT accepted |
| 5 | **Deploy & Operate** | CPMAI D5 · AB-100 3.x · AB-620 3.2 | Deployment/ALM; monitoring/telemetry; governance; contingency; adoption; handover | ALM evidence, telemetry plan, governance & HIL model, runbook, handover pack | **Transition complete**: operated by its owners, monitored, incidents have a path |
| 6 | **Review** | CPMAI 5.5 · AB-100 | Realised value vs hypothesis; architecture review against evidence; lessons; method changes; case study | Realised-value review, architecture review, case study / portfolio pack, sanitised derivative | **Value reviewed**: baseline vs actual recorded, method changelog updated, case study published (privately) |

Templates for stages 2–6 are drafted from the first real need, not speculated. Stage 1's artefacts are *renders* of the record (see below), not forms.

## The structured record ("capture once, reuse everywhere")

Everything learned about an initiative is an entity with a stable ID and a source pointer; artefacts reference or render entities rather than restating them. Architect OS manages the IDs — nobody types them.

| Type | Prefix | Holds |
|---|---|---|
| Fact | `FACT` | Something true about the business/process/organisation ("PM approval exists to control budget") |
| Pain | `PAIN` | A cost, waste, delay or risk experienced today |
| Hypothesis | `HYP` | A belief to test ("budget governance can be preserved without PM involvement in routine bookings") |
| Unknown | `UNKNOWN` | A question discovery must answer |
| Stakeholder | `STK` | Person/role + what they request / perform / decide / approve / own / operate / bear risk for |
| System | `SYS` | A system, the data it holds, whether authoritative, read/write paths |
| Risk | `RSK` | Risk, assumption or dependency with treatment and owner |
| Metric | `MET` | Baseline and target; business or system/AI |
| Requirement | `REQ` | A constraint or need the solution must satisfy |
| Decision | `DEC` | A decision taken, linking to its ADR where material |

Each entity: `id`, `text`, `status` (pending → confirmed / rejected), `source` (session, timestamp), `links` (other IDs), `tags`, `objectives` (syllabus IDs it evidences). The set of types is expected to change during project one — that is the point of running the method before productising it.

Traceability falls out of links: `ADR-0007 → REQ-012 → RSK-003 → FACT-006 → discovery session 2026-10-02 14:32`.

## The skills (durable stage methods)

| Skill | Stage | Status |
|---|---|---|
| `.claude/skills/discovery-interview/` | 1 Discover | v0.1 — first to be built |
| `/architect` | 2 | not yet |
| `/mobilise` | 3 | not yet |
| `/build-review`, `/evaluate` | 4 | not yet |
| `/operate` | 5 | not yet |
| `/review-value` | 6 | not yet |

A skill defines: purpose and gate; interview stages; question strategy; follow-up and challenge rules; evidence requirements; things never to assume; syllabus mapping; entities it may create/update; confirmation protocol; completion criteria; handoff. Architect OS loads the skill as the interview's system prompt; Claude Code can run the same skill in the terminal.

## Teaching in context

The OS teaches when a concept is hit, not in module order: when discovery identifies a system as authoritative, it offers the short *source of truth* lesson then. Lessons remain the learning artefacts (`lessons/`), but they are unlocked by the work.

## Learning artefacts vs professional artefacts

| Learning (per lesson) | Professional (per product) |
|---|---|
| lesson, slides, narration/storyboard, diagram, curated resources, lab, quiz, explain-back, spaced retest, objective mapping | record, discovery pack, process model, value case, suitability assessment, data/authority model, architecture pack, ADRs, backlog, RAID, security/authority model, implementation evidence, eval datasets & results, ALM evidence, telemetry plan, governance/HIL model, runbook, adoption notes, realised-value review, architecture review, case study |

Don't duplicate: the professional artefact is the lab and the evidence wherever possible; cite all objective IDs on the one artefact.

**PMI-CPMAI domain mapping**: stages 0–1 ↔ Domain II *Business Needs* and Domain III *Data Needs*; stage 4 ↔ Domain IV; stages 5–6 ↔ Domain V; Domain I *Responsible & Trustworthy AI* is cited wherever privacy, transparency, bias, compliance or audit trail is actually handled, at every stage.

## Method changelog

| Version | Date | Change | Triggered by |
|---|---|---|---|
| 0.1 | 2026-09-17 | Discovery pack (6 parts), trace table, lifecycle table defined | ChatGPT programme instruction; no project yet |
| 0.2 | 2026-09-17 | Seven stages with explicit gates; Mobilise added; structured record with entity IDs; skills as stage methods; Architect OS as working interface; teach-in-context | Warwick's decision: OS first (visual/process learner; proven single-tab-and-iterate pattern) |
