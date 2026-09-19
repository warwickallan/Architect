---
chapter: 5
title: "Domain II (2): risk, scope, resources and adoption"
exam: CPMAI
tasks: [CPMAI-2.10, CPMAI-2.3, CPMAI-2.4, CPMAI-2.6]
sources: [044, 006, 035 + ECO enablers]
status: draft
---

Chapter five. Domain two, part two: risk, scope, resources and adoption. This chapter covers four more tasks from Domain two of the CPMAI examination — conducting risk assessments across security, safety and ethics; developing the AI project scope statement; identifying project resources, meaning people, hardware and contractors; and managing adoption and integration risks.

Why this matters. These four tasks are where a well-framed problem quietly turns into a stalled project. You can pick the right problem, prove it feasible, and still lose, because nobody costed the graphics processing units, nobody wrote down what was out of scope, nobody asked whether the claims team would actually use the output, and nobody assessed what happens when the model is wrong in public. PMI's own list of why most AI projects fail includes resource underestimation and proofs of concept that never survive the real world. Both live here.

In this chapter you will learn: how to run an AI risk assessment that covers failure modes, cyber, ethics, reputation and continuity, and turns into mitigations rather than a register nobody reads; how to write a scope statement that names what is out of scope as clearly as what is in; how to identify the people, infrastructure and external help an AI initiative actually needs, phase by phase; and how to plan for adoption and integration from the start, with metrics that tell you whether it happened.

Start with risk, and start with where you are. This is still phase one, Business Understanding, the first of the six iterative CPMAI phases. Risk is not a chapter you write at the end. In phase one you are doing three things: spotting safety-critical use cases, running an impact assessment, and putting governance in place early.

Safety-critical first. Ask whether the system makes or informs a decision where a wrong answer causes physical harm, financial harm or loss of a right. Autonomous vehicles and medical diagnostics are the obvious cases. So is a model that decides who gets credit, who gets shortlisted, who gets an inspection. If the answer is yes, the requirements change: higher accuracy thresholds, explainability, human oversight, and a defined fail-safe. And here is the crucial project-management move — those requirements have to be written into the requirements set. If a trust requirement is not in the requirements, it is not in scope, and if it is not in scope, nobody is funded to build it.

Second, the impact assessment. Work out how the system affects different stakeholder groups, and look specifically for potential harms and discriminatory outcomes. Think beyond your direct users. If you are building a model for an infrastructure programme, the affected parties may include communities and ecosystems who will never log in. If a public body is involved, expect scrutiny. The question is not only "does this work" but "who could this hurt, and how would we know".

Third, governance planning. Identify the regulatory regimes that bite — data protection law such as the General Data Protection Regulation, or state privacy law such as the California Consumer Privacy Act — and define success metrics that include fairness and equity alongside accuracy. Set out where decision rights sit, so that when phase two shows you do not have enough data, you already know which steering group or AI council takes the go, no-go call.

Now widen the lens to the four risk families the exam names. Failure modes and safety: how does this system fail, how would you detect it, and what is the fallback. Cybersecurity: AI systems widen the attack surface. You now have training data, pipelines, model artefacts, endpoints and prompts, all of which can be poisoned, stolen or abused. Apply what PMI's data governance guidance asks for — encryption, role-based access control, multi-factor authentication, audit logs, anomaly monitoring, and a breach response plan you have actually rehearsed. Ethics: PMI's ten ethical considerations give you the checklist — fairness and bias, transparency, privacy, human safety, environmental footprint, explainability, human oversight, human-centred design, responsibility and long-term thinking. Address these before implementation, not after. And reputational and business continuity risk: what does it cost you if this appears in the press, or if the model becomes unavailable on a Monday morning and twelve thousand invoices need processing anyway.

Then turn every significant risk into a strategy. Avoid, mitigate, transfer, accept — and contingency as the backstop, not the front door.

**A common mistake is** answering a risk question with "establish a contingency plan" when a mitigation is on offer. Consider an aerospace firm building predictive maintenance, worried about delays from external dependencies. The instinct is to write a contingency plan. The better answer is to engage additional suppliers, because that removes the single point of failure rather than preparing to survive it. CPMAI favours acting on the cause. Contingency is what you hold for the risk you could not reduce.

Now scope. The AI project scope statement does five things. It defines the boundaries and the deliverables. It establishes success criteria and performance metrics. It states what is in scope and, just as importantly, what is out. It documents assumptions and constraints. And it aligns all of that with the business objectives and the resources you actually have.

Be concrete. In scope: extraction of eight named fields from supplier invoices in English, for the four highest-volume suppliers, with a confidence score and a human review queue. Out of scope: handwritten documents, non-English invoices, automatic posting to the ledger without review, and any supplier outside the four. Assumptions: three years of historical invoices are accessible and labelled by the finance team. Constraints: the data may not leave the EU region, and the review interface must sit inside the existing finance system.

Two AI-specific points. First, success criteria need both a model metric and a business metric. Ninety-four per cent extraction accuracy means nothing on its own; tie it to hours saved, or to error rate at month-end. Second, write the criteria now, in phase one, because these are the very metrics you will hold the model against in phase five, Model Evaluation, and monitor against in operations. If you set them loosely here, you will have no basis to fail a model later.

**It's important to remember that** out-of-scope statements and documented assumptions are as examinable as the deliverables. In an AI initiative, the assumption "the data exists and is usable" is the one that sinks projects, so it belongs in writing, owned by someone, and revisited when phase two tells you the truth.

Next, resources. The enablers ask you to assess the skills your team needs, evaluate hardware and infrastructure for both development and deployment, identify gaps that need contractors or consultants, plan allocation across the phases, and coordinate with procurement for specialist tools and platforms.

Skills first. An AI team is not a software team with a new library. You need data engineering to build pipelines, data science or machine-learning engineering to build and tune models, subject-matter expertise to judge whether outputs are sensible, data governance and legal input for privacy and compliance, and operations capability to run and monitor the model once live. On many initiatives the largest single effort is data preparation, not modelling, and that work sits with engineers and domain specialists, not with your most expensive data scientist.

Hardware and infrastructure. Distinguish development from deployment. Training may need bursts of accelerated compute; serving may need low-latency inference near the users, or a batch window overnight. Storage for training data, and for the versions of it. Environments for experimentation that do not sit on production data unless governance says they may. Note that compute has an energy cost, which is one of PMI's ten ethical considerations, so the sustainable option is a legitimate design factor, not a nicety.

Where you have gaps, decide deliberately between hiring, training and contracting. External specialists are the right answer for a short, deep need — a fairness audit, an architecture review — and the wrong answer for capability you will need every month for the next three years, unless you have a plan to transfer that knowledge. Engage procurement early, because specialist platforms carry model licensing, data residency and intellectual property terms that take longer to negotiate than ordinary software.

**In practice…** resource the phases, not the project. Phase two and phase three, Data Understanding and Data Preparation, are where the hours actually go, and they are iterative, so a single block estimate will be wrong. Plan a first pass, then re-plan after Data Understanding, when you know what the data really looks like.

Finally, adoption and integration. This is where good models go to die. The enablers ask you to assess organisational change requirements, identify resistance and adoption barriers, plan integration with existing systems and workflows, develop training and communication, and monitor adoption metrics.

Start with the workflow, not the interface. Where exactly in the working day does the output appear, and what does the person do with it. If your prediction arrives in a separate dashboard that nobody opens, adoption is zero regardless of accuracy. Integrate into the system people already live in.

Then take resistance seriously and specifically. Some of it is fear for jobs. Some is professional pride — an experienced underwriter will not accept a score they cannot interrogate. Some is entirely rational scepticism from people who were burned by the last tool. The counters are explainability, a visible human-in-the-loop, involving those users in defining success back in phase one, and being honest about what changes for them.

And measure it. Adoption metrics are things like the proportion of eligible cases actually processed through the system, the override rate where humans reject the model's suggestion, time-to-decision before and against after, and the volume of user-reported issues. A rising override rate is a signal, not a nuisance — it tells you the model, or the trust in it, has a problem.

**A common mistake is** treating training as a one-off event at go-live. Models change, thresholds change, and staff turn over. Communication and training are a continuing strand, and they belong in the plan with a budget line.

Before we move on, a quick check. First question. A supplier shortage threatens an AI predictive-maintenance project. Should you reach first for a contingency plan or a mitigation.

(pause)

The answer is mitigation. Reduce the exposure — for example by engaging additional suppliers to remove the single point of failure. Contingency is the fallback for risks you could not reduce.

Second question. Your scope statement lists deliverables, success criteria and in-scope functionality. What three things are still missing.

(pause)

The answer is out-of-scope functionality, documented assumptions, and constraints.

Third question. Adoption has stalled six weeks after go-live. Which metric tells you whether users trust the model's output.

(pause)

The answer is the override rate — how often humans reject or overrule the system's suggestion.

By the end of this chapter you should be able to run an AI risk assessment covering failure modes, cyber, ethics, reputation and continuity, and convert it into mitigations; write a scope statement with explicit boundaries, assumptions and constraints; identify the skills, infrastructure and external help the initiative needs across its phases; and plan adoption and integration with metrics that prove it happened.

Key takeaways. Trust requirements only get built if you write them into the requirements in phase one. Mitigation before contingency — reduce the cause before you plan to survive it. Out-of-scope and assumptions are the load-bearing parts of an AI scope statement. Resource the data phases generously and re-plan after Data Understanding. And adoption is engineered, not hoped for, through workflow integration, explainability and measurement.

Next we move into Domain three, the data domain, which carries the same twenty-six per cent weight and is where most of the real work of an AI project actually lives.
