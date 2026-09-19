---
chapter: 7
title: "Domain III (1): what data, who knows it, where it lives, where to work"
exam: CPMAI
tasks: [CPMAI-3.1, CPMAI-3.2, CPMAI-3.3, CPMAI-3.4]
sources: [025, 026, 022 + ECO enablers]
status: draft
---

Chapter seven. Domain three, part one: what data, who knows it, where it lives, and where to work. This chapter covers the first four tasks of Domain three of the PMI-CPMAI examination — defining the data you require, identifying your data subject matter experts, identifying data sources and locations, and coordinating the AI workspace and infrastructure.

Why this matters. Domain three carries twenty-six per cent of the exam, the same weight as Domain two, and that is not an accident. CPMAI treats AI work as data-centric rather than code-centric. PMI's own list of why most AI projects fail has four data failures in the top seven: too little data, poor quality data, a proof of concept built on clean lab data that collapses on real-world data, and underestimating how long acquisition and preparation take. Every one of those traces back to work that should have happened here, in phase two, Data Understanding. Get this wrong and you do not find out in phase three. You find out in phase five, when the model is evaluated and fails, and by then the money is spent.

In this chapter you will learn: how to specify data requirements precisely enough that someone can go and fetch the data; how to use the four Vs — volume, variety, velocity and veracity — as a structured lens on a dataset; how to identify and engage the four different kinds of data expert an AI project needs; how to map internal, external, cloud and legacy sources and document who owns each one; and how to stand up a secure AI workspace with the compute, storage, tooling and controls the team will actually need.

Start with the shift in your own role. In phase one, Business Understanding, you were doing business alignment. You were confirming the problem was probabilistic rather than deterministic, mapping it to one of the seven patterns of AI, and agreeing the success criteria. In phase two your posture changes. You move towards technical and data feasibility. You are not doing the hands-on work — you are almost certainly not writing the queries — but you are accountable for knowing whether the data exists, whether it can be reached, whether it can lawfully be used, and whether it represents the world the model will operate in.

Task three point one is defining the required data. Work outwards from the use case. Every data requirement should trace back to a business objective you agreed in phase one; if you cannot say which decision or which prediction a field supports, do not put it on the list. Then get specific in five directions.

First, types and formats. Structured records, semi-structured logs, free text, images, audio, sensor readings. File formats, encodings, schemas. A recognition problem needs labelled images in a consistent resolution; a conversational problem needs transcripts with speaker attribution. Second, volume. How much do you need to train on, and what is your sampling strategy if the full population is too large or too expensive to move? Sampling is a design decision, not a shortcut — a badly drawn sample is how bias enters quietly. Third, temporal requirements and granularity. How far back does history need to go, and at what grain? Per transaction, per customer per day, per sensor per second? A model that needs to detect a seasonal effect needs several seasons of history. Fourth, quality standards and acceptance criteria. Write down the thresholds: completeness on the critical fields, permitted missing-value rates, tolerance for duplicates, timestamp consistency, identifier consistency across systems. Fifth, the mapping back to the objective, so the whole list is defensible.

That fourth point deserves an example. Say you are building a virtual assistant and the source is the existing customer relationship management system. A data audit finds missing timestamps on a chunk of the interaction history and customer identifiers that do not reconcile between two modules. Neither of those looks dramatic in phase two. Both of them are fatal by phase four, because you cannot sequence a conversation without timestamps and you cannot build a customer-level feature without a reliable key. Finding them now costs a fortnight. Finding them later costs the project.

Now the four Vs, which is a structured way to interrogate any dataset and a near-certain exam topic. Volume is how much data there is, and what that implies for storage, transfer and processing cost. Variety is the mix of forms — structured, semi-structured and unstructured — and how much integration work that mix implies. Velocity is the speed at which data is created and arrives, and therefore whether you are dealing with batch or streaming, and what the processing must keep up with. Veracity is trustworthiness: is the source reliable, is the data accurate, can it be believed.

**It's important to remember that** veracity, not velocity, is the "V" about trust. Velocity is only about speed. The exam will happily offer you a swapped definition as a distractor.

Task three point two is identifying your data subject matter experts, and the enablers name four distinct groups. Domain experts, who know the relevant data sources in that field. Business users, who understand context and meaning — the people who can tell you why a status code is set to nine, and that everybody in the Leeds office uses it to mean something different. Data stewards and the data governance team, who own definitions, quality and policy. And technical experts who know the systems and structures: the database administrators, the platform engineers, the person who has kept the legacy warehouse alive for eleven years. You need all four. A domain expert without a technical expert gives you a wish list nobody can extract. A technical expert without a business user gives you a schema with no meaning attached.

Then the final enabler, which people skip: establish communication channels with them. Named people, agreed access, an agreed route for questions, and their availability in the plan. These experts almost always have a day job. If you have not booked their time, you do not have them.

Task three point three is identifying data sources and locations, and it is an inventory exercise in four sweeps. Sweep one, internal: operational databases and data warehouses. Sweep two, external: third-party providers, purchased datasets, open data, partner feeds — here you check licensing and permitted use before you get attached to the idea. Sweep three, cloud storage and distributed repositories, including the data that has drifted into departmental cloud accounts that central IT has never catalogued. Sweep four, legacy systems and historical archives — the mainframe extract, the tape, the decommissioned platform that still holds the only five years of history you have.

And then the enabler that binds the whole task: document ownership and access permissions. For every source, who owns it, who authorises access, what classification the data carries, whether it contains personally identifiable information, and what the retention position is. This is where your bias check belongs as well. Ask what population each source actually represents. If the healthcare records come overwhelmingly from one region, or one age band, or one sex, you have a representativeness problem that no amount of clever modelling will fix later. PMI's ethics guidance is explicit that fairness starts with scrutiny of the training data, and it starts before implementation, not after.

**A common mistake is** to treat "we can technically reach the data" as the same thing as "we are permitted to use the data for this purpose". They are separate questions, and the exam tests the second one. Access is technical. Permission is governance.

Task three point four is coordinating the AI workspace and infrastructure. Five things, and they are all yours to arrange rather than to build. Compute resources sized for data processing and model training, which is a different profile from ordinary application development and a different cost profile too. Secure development environments for the AI team, segregated from production, with controlled data in them. Data storage and backup configured for the project's actual volumes, with a recovery position, not just a folder. Collaboration tooling and version control — and in an AI project that means versioning datasets and experiments, not only code, because a result you cannot reproduce is not a result. And compliance with security and governance requirements throughout.

PMI's data governance guidance gives you the checklist to work against: encryption, role-based access control, multi-factor authentication, audit logging, monitoring for unauthorised data use, and a documented retention and deletion position aligned to the applicable regimes such as the General Data Protection Regulation or the California Consumer Privacy Act. Backup and breach response are part of the environment, not an afterthought.

**In practice…** stand the workspace up early, in parallel with the source inventory, and give it a named owner. On real programmes the environment is the longest lead item you control. Procurement, security sign-off and network access routinely take six weeks. If you wait until phase three to ask for the sandbox, your data scientists will spend their first month reading documentation, and you will have burned the schedule contingency before a single line of preparation code has run.

Before we move on, a quick check.

First question. Which of the four Vs concerns whether the data source can be trusted?
(pause)
The answer is veracity. Volume is quantity, variety is the mix of forms, and velocity is the speed at which data is created and arrives.

Second question. You have documented that the team can technically query a partner's customer dataset. What remains outstanding under task three point three?
(pause)
The answer is documented ownership and access permission — who owns the data, who authorises its use, and whether the licence or consent covers this purpose. Technical access is not authorisation.

Third question. Name two of the four groups of data experts the enablers ask you to identify.
(pause)
The answer is any two of: domain experts with knowledge of the relevant sources, business users who understand data context and meaning, data stewards and the governance team, and technical experts familiar with the systems and structures.

By the end of this chapter you should be able to specify data requirements across type, format, volume, granularity and quality, and trace each one to a business objective. You should be able to apply the four Vs as an assessment lens. You should be able to identify the four kinds of data expert and establish working channels with them. You should be able to inventory internal, external, cloud and legacy sources and record ownership and permissions for each. And you should be able to describe the components of a secure, compliant AI workspace.

Five takeaways. Phase two shifts your focus from business alignment to data feasibility, and you oversee rather than execute. Every data requirement needs a stated threshold, because "good quality data" is not an acceptance criterion. Veracity is trust, velocity is speed — do not swap them. Technical access and lawful permission are separate questions and you must answer both. And the workspace is a long lead item, so start it early.

In the next chapter we stay in Domain three and move from understanding the data to preparing it: acquisition, cleansing, labelling, pipelines and the governance that wraps around them.
