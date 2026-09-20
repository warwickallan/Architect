# Weekly review

One entry per week, newest first. Keep to the headings; the value is in the trend, not the prose.

---

## Week of 2026-09-21

**Delivery track:** Repo topology settled (ADR-0009): three repositories — programme, OS, LMS — with Architect OS and Architect LMS explicitly exempt from the method's discovery gates, on the grounds that gating the tools the method depends on is circular and that proportionate governance is itself the lesson. **Architect LMS v0.1 built and pushed**: Assessment Console (six question types, locked reveal, keyboard, responsive), full interaction telemetry with monotonic timing and active-vs-wall separation, explainable learner model, weighted adaptive selection, ports for Supabase/Neo4j/AI/ingestion. 43 unit tests, clean typecheck, end-to-end acceptance test.

**Learning track:** AB-100 syllabus imported into the LMS with provenance (74 objectives); a concept graph authored over it; questions minted by a writer pass and independently reviewed — 10 of 18 approved, the rejections catching answer-length cues, grammatical polarity tells and a key that leaked through its own wording. That rejection rate is the argument for two-stage minting.

**Objectives moved:** none — the build touches AB100-1.3.3, 3.1.4, 3.1.5, 3.2.1, 1.1.3 and CPMAI-2.4, 2.7, 4.2, 1.5, but nothing advances past *Applied* until Warwick can explain and defend it.

**Evidence added:** none yet.

**Warwick did personally:** ruled on repo topology and the method exemption, over Claude's contrary argument.

**Blockers / decisions needed:** A03 licences & environments; A13 name reviewers; A14 price the CPMAI Exam Prep Course; run P01 candidate selection; split Architect OS into its own repo.

---

## Week of 2026-09-14

**Delivery track:** Repo bootstrapped and linked to GitHub. Programme model refined (CPMAI as lifecycle loop; discovery before architecture); method v0.2. Warwick decided P00 = Architect OS first; ADR-0001–0008 accepted; **Architect OS v0.1 (Discovery tab) built and smoke-tested the same day** — interview via `claude -p`, human-confirmed record, rendered discovery pack. P01 Tech PMO AI awaits its interview.

**Learning track:** Syllabus baseline established from live Microsoft study guides (AB-410, AB-620, AB-100) and the official PMI-CPMAI ECO (Sept 2025) supplied by Warwick — 203 objectives registered. AB-100 study transcripts pulled in bulk (2026-09-18): Microsoft Learn course 16/16, Coding With Chuck 32/46 — the rest are members-only; Warwick joined the channel, remainder due next day. Tooling: `Transcripts/AB-100/manifest.json` + `tools/fetch_transcripts.py`; the MyPKA Telegram→Cockpit route stays for one-offs. Udemy (Burton) enrolled course: full curriculum extracted and analysed (`references/udemy-ab100-burton-*`), 97/97 lecture transcripts saved and committed on 2026-09-19 at Warwick's decision.

**Objectives moved:** none.

**Evidence added:** none.

**Warwick did personally:** —

**Blockers / decisions needed:** A03 licences & environments; A13 name reviewers; A14 price the CPMAI Exam Prep Course; run candidate selection.

**Allocation (target 60/25/15):** n/a this week — setup.

**Next week:** L000 stack-map lesson → candidate selection → discovery on the chosen candidate (L001, `discovery/01`–`02`). No architecture until the Discovery Decision.
