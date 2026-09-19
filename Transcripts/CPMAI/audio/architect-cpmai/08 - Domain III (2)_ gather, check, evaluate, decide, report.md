---
chapter: 8
title: "Domain III (2): gather, check, evaluate, decide, report"
exam: CPMAI
tasks: [CPMAI-3.5, CPMAI-3.6, CPMAI-3.7, CPMAI-3.8, CPMAI-3.9]
sources: [025, 026, 046, 039 + PMI *Data Governance* article]
status: draft
---

Chapter eight. Domain three, part two: gather, check, evaluate, decide, report. This chapter covers the last five tasks of Domain three of the CPMAI examination — gathering the required data, checking privacy, compliance and access, overseeing data evaluation, determining whether the data meets the solution's needs, and conveying data understanding to leadership.

Why this matters. In chapter seven you specified what data you need, found the people who understand it, mapped where it lives, and stood up a workspace. None of that is worth anything until the data is actually in your hands, lawfully, and you have looked it squarely in the face. This is where AI projects quietly go wrong. A team pulls an extract, glances at the row count, declares victory, and starts modelling. Six weeks later the model is evaluated and it turns out half the records have null timestamps, one region supplies eighty per cent of the rows, and nobody ever checked whether the licence permits training a commercial model on that third-party feed. PMI's own account of why AI projects fail names these directly: too little data, poor quality data, a proof of concept that never survives contact with real-world data, and consistent underestimation of how long acquisition and preparation take. This chapter is where you stop those.

In this chapter you will learn: how to run a controlled data gathering exercise with validation and refresh built in from the start; how to check usage rights, privacy obligations, access controls and lineage before the data reaches your workspace; how to oversee a data evaluation across the recognised quality dimensions; how to make a defensible go, no-go or conditional-go decision on data readiness; and how to translate all of that into language a steering committee will actually act on.

Start with task three point five, gathering the required data. There are five moving parts here and they arrive in a sensible order.

First, extraction. You execute the pull from the sources you identified — the operational databases, the data warehouse, the third-party feeds, the legacy systems nobody wants to touch. Your job is not to write the query. Your job is to make sure the extract is specified against the requirement, that someone with the right permissions runs it, and that what comes back is the thing you asked for.

Second, transfer and migration into your AI development environment. Data in motion is data at risk. Agree the transfer mechanism, the encryption, the destination, and who is allowed to see it once it lands.

Third, ongoing feeds. Most AI solutions are not fed by a single snapshot. If your model will run in production against live data, you need a collection process, not a one-off extract, and you need it early enough to discover that the live feed differs from the historical extract. That difference is one of the most common reasons a model that passed testing fails in operation.

Fourth, validation during collection. Check completeness and accuracy while the data is arriving, not afterwards. Row counts against the source. Nulls in the fields you care about. Duplicate keys. Date ranges that match what you were promised. Spot checks against a system of record.

Fifth, refresh and update procedures. How often does this dataset change? Who refreshes it? What happens to the old version? Agree this now, while people are paying attention.

**In practice…** on real delivery I insist on a data receipt for every dataset that enters the workspace: source system, extraction date, row and column counts, the owner who approved it, the transfer method, and the refresh commitment. It takes twenty minutes and it settles a dozen arguments later.

Task three point six is the compliance gate. Five things to establish, and they are as much about evidence as about permission.

Usage rights and licensing first. Having the data is not the same as being allowed to train on it. Third-party feeds often permit analysis but not model training, or permit internal use but not a commercial product. Read the agreement or get someone who can.

Then regulatory compliance. Data protection law, sector rules, and your own internal policy. If personal data is involved, the questions are consent, purpose limitation, minimisation and retention. Note that consent given for one purpose does not automatically extend to training a model — that is exactly the sort of assumption the exam likes to test.

Then access controls. Role-based access control, so that only the people who need the sensitive fields can see them, plus multi-factor authentication and audit logs. Think of a fraud detection project: analysts and auditors may need to see raw transaction detail, while most of the wider team does not. Same database, different entitlements.

Then the privacy impact assessment. A PIA is a structured look at how a proposed use of personal data could harm the people in that data, and what you will do about it. It is a governance artefact, produced before the processing, not a retrospective note.

Finally, lineage and documentation. Where did every dataset come from, what has been done to it, who touched it and when. Lineage is what makes an audit survivable, and it is what lets you explain a model's behaviour two years from now when the people who built it have moved on.

**It's important to remember that…** privacy, licensing and access are checked in Data Understanding, before the data is transformed. Anonymisation and masking are applied in phase three, Data Preparation. The decision is made in phase two; the treatment happens in phase three. The exam separates those deliberately.

Task three point seven is data evaluation, and here you are overseeing rather than executing. Five angles.

Quality dimensions — accuracy, completeness and consistency, with timeliness and uniqueness close behind. Accuracy is whether the value reflects reality. Completeness is whether the value is there at all. Consistency is whether the same fact agrees across systems: one customer, three identifiers, three different dates of birth.

Distributions and bias. Look at how the data is spread across the groups that matter. If a healthcare dataset is ninety-nine per cent one gender, or draws almost entirely from one geography, or only covers patients over seventy, the model will encode that skew as if it were the world. This is bias scanning, and it belongs here, at the point where the cost of fixing it is lowest.

Freshness and relevance. Stale data produces confidently wrong decisions. Ask how old the data is relative to the behaviour you are modelling, and whether anything material changed in between — a process redesign, a new product, a regulatory shift.

Schema and structure. Is the data shaped in a way a model can consume? Data types, encodings, key relationships, free-text fields masquerading as categories.

And exploratory data analysis, or EDA — the systematic first look. Summary statistics, distributions, missingness patterns, correlations, outliers. EDA is how you find the missing timestamps and the inconsistent identifiers in the customer system before they become a modelling problem.

**A common mistake is…** treating volume as a proxy for quality. A hundred million rows of one narrow slice of your customer base is worse than a million rows that are representative. Quantity and representativeness are separate tests and the exam will offer you the option that confuses them.

Task three point eight is the decision. Compare what you have against the requirements you defined in task three point one. Assess sufficiency — is there enough data, and enough variation within it, to train a robust model rather than one that memorises. Identify gaps and, crucially, propose strategies for each: acquire more, buy an external dataset, augment or resample, relax the scope, or change the approach. Validate representativeness against the target use case — not against the general population, against the population the solution will actually serve. And then make the call.

Three outcomes are legitimate. Go, the data supports the use case. No-go, it does not and no realistic remedy closes the gap — stop, and say so early, because that is a cheap failure. Or conditional go, which in practice is the most common: proceed on a narrower scope, or proceed while a named gap is closed by a named date. Remember that CPMAI's phases are iterative. Discovering in phase two that your data will not support the agreed success criteria sends you back to phase one to renegotiate the problem, and that is the method working, not the project failing.

Task three point nine is communication, and it is a scored task, so treat it as work rather than as an afterthought. Prepare an executive summary of the assessment findings. Use visualisations — a coverage map, a completeness chart, a distribution by segment — because a picture of a demographic gap lands in a way that a table never will. Present readiness status with a recommendation attached, not just a status. Translate: say "we can reliably assess claims in three of our five regions, and we would be guessing in the other two", not "the categorical variable has high cardinality with sparse support in two strata". And provide regular updates on progress and challenges, because data preparation is the phase that consumes the most time in an AI project and the sponsor needs to see that consumption as work, not as delay.

**In practice…** lead the summary with the decision you are asking for. One line: here is what we found, here is what it means for the use case, here is what I recommend, here is what I need from you. Everything else is supporting detail.

Before we move on, a quick check.

First question. A vendor supplies a market dataset your team wants to train on. The contract permits internal analytical use. Which task and which action apply.

(pause)

The answer is task three point six, checking privacy, compliance and access — specifically verifying data usage rights and licensing. Internal analytical use does not automatically extend to model training, and you resolve that with legal before the data enters the workspace.

Second question. Your dataset is large, complete and accurate, but ninety per cent of records come from one of the six regions the solution will serve. Is the data sufficient.

(pause)

The answer is no. Quality dimensions are satisfied but representativeness is not. This is a conditional go at best — scope down to the region you can serve, or close the gap before proceeding.

Third question. At which phase do you apply anonymisation and masking to personal data.

(pause)

The answer is phase three, Data Preparation. The privacy decision and the assessment happen in phase two, Data Understanding; the transformation happens in phase three.

By the end of this chapter you should be able to run a controlled gathering exercise with validation and refresh built in, clear the compliance gate on rights, regulation, access, privacy impact and lineage, oversee an evaluation across the quality dimensions and bias, make a defensible go, no-go or conditional-go call, and report it in language leadership can act on.

Four takeaways. Validate data as it arrives, not after modelling starts. Having data and being allowed to use it are two different questions, and licensing is checked before transformation, not after. Sufficiency and representativeness are separate tests from quality, and volume proves neither. And a no-go in phase two is the cheapest good decision an AI project can make.

Next, chapter nine takes you into phase three, Data Preparation, where raw data becomes an AI-ready dataset.
