# AB-410 — Microsoft Learn official preparation

What Microsoft itself provides for the Intelligent Applications Builder Associate certification, captured so the LMS can point at it unit by unit rather than "go and read Learn".

| File | What |
|---|---|
| `learn-syllabus.md` | Readable syllabus: course AB-410T00 → 4 learning paths → 17 modules → 147 units, with every module's learning objectives, prerequisites and mapping to our `AB410-x.y.z` objectives |
| `learn-syllabus.json` | The same, machine-readable (uids, URLs, durations, last-modified dates, objectives, units, coverage, gap search results) — the LMS import |

Source: Microsoft Learn catalog API (`/api/catalog/?type=courses,learningPaths,modules`) plus each module page, 2026-09-21. The exam objectives themselves live in `curriculum/objectives/ab-410.md` (study guide S01); this folder is the *training* side.

## The official prep in one view

| Path | Length | Modules | Covers |
|---|---|---|---|
| 1 Get started with AI-first solutions in Microsoft Power Platform | 1h 31m | 3 | requirements → components, extensibility, Plans / generative pages, prompt basics (area 1.1) |
| 2 Build your data model with Microsoft Dataverse | 3h 22m | 3 | tables, columns, relationships, calculated/rollup, security roles (area 1.2) |
| 3 Build intelligent apps and portals with Microsoft Power Apps | 7h 06m | 7 | canvas apps, model-driven apps, forms/charts/dashboards, **Power Pages** (2 modules — audience profile only, no exam objective) |
| 4 Automate and extend your solutions with AI in Microsoft Power Automate | 3h 27m | 4 | flows, Dataverse triggers/actions, approvals, AI Builder grounded prompts (areas 3.1, 3.2) |

15h 26m in total; all four paths were refreshed May–June 2026, i.e. after the AB-410 study guide (April 2026).

## Coverage: 36 of 48 objectives — and where the official paths fall short

The official paths are established Power Platform modules re-badged for AB-410. They are solid on Dataverse, canvas and model-driven apps and flows, and **thin on exactly the objectives that make AB-410 "intelligent"**. No official-path module covers:

| Objective | Fill from |
|---|---|
| `AB410-1.1.4` Recommend environment types · `1.1.5` Solution & ALM strategy | Burton L9, L10, L79 (+ bonus L192–L196); Learn *Extend ALM with Git and CI/CD in Power Platform*, *Manage operations and monitoring in Power Platform* |
| `1.2.6` Prompt columns · `1.2.7` Row summaries | Burton L72, L35; Microsoft Docs (Copilot in Dataverse) — no Learn module found |
| `2.2.3` Automate business processes from canvas apps | Burton L68 + bonus L189; Learn *Identify Microsoft Power Automate components* |
| `2.2.8` Create a Copilot Studio agent from a canvas app | Burton L67; Copilot Studio docs — no Learn module found |
| `3.2.5` Customise prompt settings incl. models | Burton L69, L73; Learn *Govern AI-enabled resources in Power Platform* (governance angle only) |
| `3.2.7` / `3.2.8` Consume an AI model in apps / in cloud flows | Learn *Use AI Builder models in Power Apps*, *Use AI Builder in Power Automate*; Burton L74, L75 |
| `3.3.1` Business rules | Learn *Define and create business rules in Dataverse*; Burton L37 |
| `3.3.2` Business process flows | Burton L38 (+ bonus); Learn has only client-script / model-driven-form modules — use the docs |
| `3.3.4` Evaluate use cases for business logic | Architect method (discovery suitability classification) + Burton L37–L38 |

Full search results per gap (top catalog hits with URLs and dates) are in the JSON under `supplementary_modules_for_gaps`; the table above is the curated pick.

## Notes for the LMS

What this data supports, and what an LMS built on it needs:

1. **Three-level content model:** `objective (AB410-x.y.z)` ↔ `module (uid, url, duration, last_modified, learning_objectives[], prerequisites[])` ↔ `unit (uid, slug, title, duration)`. The JSON is already that shape; a unit's URL is `module.url + unit.slug`.
2. **Coverage is a first-class field.** Each module carries `objectives_ab410`; the coverage matrix's `Lesson` column can point at a module uid or unit URL, and the LMS can show, per objective, *official module / Burton lecture / Architect lesson / none*. The 12 gaps above are the first thing an AB-410 dashboard should surface.
3. **Freshness.** Keep `last_modified` and re-run the catalog pull monthly (same script; diff by uid — Microsoft adds and retires modules, it doesn't renumber). All four paths were re-dated in May–June 2026.
4. **Prerequisites are environment/licence requirements** (developer environment, Dataverse database, AI Builder add-on or Copilot Studio licence). Roll them up per path so `ASSUMPTIONS.md` A03 can be resolved once, not per module.
5. **Sequencing.** Microsoft's order (AI-first → Dataverse → apps → automation) suits a beginner; Architect's just-in-time principle means the LMS should let a project pull units on demand (e.g. *prompt columns* the day P01 needs one) and record that as *Applied*, rather than forcing path order.
6. **Progress signal.** Learn tracks unit completion behind its own login; the LMS should hold its own record — unit read / lab done / explain-back — per the status ladder, not depend on Learn's.
7. **Power Pages** is in the audience profile and gets two official modules but no study-guide bullet — treat as *awareness* in the LMS, not a tracked objective, until the study guide changes.
8. **Same shape for the other exams.** The catalog API works identically for AB-620 (`course.ab-620t00`?) and AB-100 (no official path yet — the LMS should show that absence explicitly); the CPMAI side is PMI's course, not Learn.
