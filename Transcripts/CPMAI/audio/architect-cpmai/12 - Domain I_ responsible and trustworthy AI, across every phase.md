---
chapter: 12
title: "Domain I: responsible and trustworthy AI, across every phase"
exam: CPMAI
tasks: [CPMAI-1.1, CPMAI-1.2, CPMAI-1.3, CPMAI-1.4, CPMAI-1.5]
sources: [035, 037–039, 044–056 + PMI *Ten Ethical Considerations*]
status: draft
---

Chapter twelve. Domain one: responsible and trustworthy AI, across every phase. This chapter covers all five tasks of Domain one — overseeing the privacy and security plan, managing transparency in data and algorithm selection, conducting bias checks, monitoring regulatory and policy compliance, and managing accountability documentation and the audit trail.

Why this matters. Domain one is worth fifteen per cent of the CPMAI exam, which makes it the smallest domain by weight and the easiest to under-prepare. That would be a mistake, because Domain one is not a phase. It is a thread that runs through all six phases of the methodology, and the exam tests it that way. On real projects the failure mode is familiar. Nobody asks who owns the outcome until something goes wrong. Nobody writes down why one model was chosen over another, so when a regulator or an executive asks, six months later, the honest answer is that the data scientist who left in March preferred it. Nobody tests fairness across population groups, so the system quietly works less well for some of your customers than others. PMI's guidance is blunt on the direction of travel: ethics has to be addressed before implementation, not bolted on afterwards.

In this chapter you will learn: how to distinguish the trustworthy AI concepts the exam uses — ethical, responsible, transparent, explainable and governed; how to build and oversee a privacy and security plan across the data lifecycle; how to run bias checks on data, algorithm and model output rather than just once before launch; how to track regulation and coordinate with legal and compliance; and how to keep accountability documentation, version control and go/no-go records that would survive an audit.

Let us start with vocabulary, because the exam leans on it heavily.

Ethical AI is the question of right versus wrong. It sits above the law. Something can be legal and still be the wrong thing to build, or the wrong way to build it. The guiding instinct is do no harm — to users, to bystanders, to people who never consented to be in your dataset.

Responsible AI is about accountability. The keyword is ownership. If your system makes a decision that harms someone, your organisation owns that outcome. You cannot point at the algorithm and shrug. In practice this shows up as the human in the loop — a named person who reviews, interprets and can override. Think of a clinician using a diagnostic model. The model suggests; the clinician decides and carries the responsibility. It also shows up as escalation paths for system failure, and, for agentic systems, safety circuit breakers that halt an autonomous agent when its behaviour crosses a predefined threshold.

Transparent AI is about visibility. What data did you use, where did it come from, how is it protected, how does the system work in general terms, and were people informed. Transparency is a property of the project.

Explainable AI is narrower and more personal. It answers why this particular output, for this particular person. A loan application is rejected despite a strong credit history. Explainability means you can say which factors drove that decision — and the applicant has a route to understand it. Where a technique cannot be made explainable, you owe interpretable results instead.

**A common mistake is** treating transparency and explainability as the same thing. Transparency is disclosure about the system; explainability is reasoning about an individual decision. Exam items will use both words in the same set of options.

Governed AI is the control layer: policies, audits, risk management, and compliance with law and organisational standards. Its classic artefacts are the privacy impact assessment, or PIA, and role-based access control, often abbreviated to R-B-A-C. A fraud detection platform where only fraud analysts and auditors can see sensitive transaction detail is governed AI in one sentence.

Underneath all of that sit PMI's ten ethical considerations: fairness and bias; transparency; privacy; human safety; environmental responsibility; explainability; human oversight; human-centred design; responsibility; and long-term thinking. Two of those are easy to forget and therefore worth remembering — environmental responsibility, meaning the energy and compute footprint of training and inference, and long-term thinking, meaning the societal effects you should mitigate proactively rather than discover later.

Now the tasks.

Task one point one is the privacy and security plan, and you oversee it. That means establishing data governance protocols for personally identifiable information, or PII, and in healthcare for protected health information too. It means encryption and access controls on training data, not just on production data — training sets are routinely the least protected copy of the most sensitive material in the organisation. It means conducting privacy impact assessments before deployment. It means demonstrable compliance with data protection regulation such as the General Data Protection Regulation, the GDPR, and the California Consumer Privacy Act, the CCPA. And it means secure handling procedures across the whole AI lifecycle, from acquisition through preparation, training, inference and eventual deletion. PMI's data governance guidance adds the operational detail: multi-factor authentication, audit logs, anomaly monitoring for unauthorised data use, backup and recovery, a breach response strategy, and retention and deletion policies so stale data does not linger and drive bad decisions.

Task one point two is transparency in data and algorithm selection. Document your model selection criteria and the rationale behind the decision. Report openly on data sources and preprocessing steps. Agree explainability requirements with stakeholders early, because they are a requirement like any other. Maintain audit trails for algorithmic decision-making. And use interpretability tools where the technique allows it.

**In practice…** we write the decision record at the moment of the decision, in a single short document per model: the candidates considered, the criteria, the winner, the trade-off accepted, and who signed. Reconstructing that eight months later is guesswork wearing a suit.

Task one point three is bias checks, and note the three targets in the task itself — model, data and algorithm. Start with the training data: analyse it for demographic and representation imbalances. Then perform fairness testing across different population groups. Then implement bias detection metrics and continuous monitoring. Then review live outputs for discriminatory patterns. And apply mitigation techniques during development rather than after release. The textbook illustration is an image or classification system that returns only women for "nurse" and only men for "doctor" — the model has absorbed a stereotype from its data. But be careful with the mirror image: if a system returns only women for "pregnancy", that is not bias, that is the world. Fairness testing is about unjustified differences in treatment or accuracy, not about forcing every output to be evenly distributed.

**A common mistake is** treating bias as a pre-launch gate. Populations shift, data pipelines change, and a model that was fair at launch can drift. Bias monitoring belongs in operations.

Task one point four is monitoring regulatory and policy compliance. Track evolving AI regulation and industry standards — the EU AI Act, which classifies systems by level of risk, sits alongside data protection law rather than replacing it. Meet sector-specific requirements, such as HIPAA in United States healthcare. Coordinate with legal and compliance teams rather than interpreting the law yourself. Implement compliance monitoring and reporting mechanisms with real-time alerts where you can. And maintain documentation for audits and reviews. Cross-border data flow is the case that catches teams out: a multinational moving patient or customer data between jurisdictions needs a mapped assessment of which rules apply where.

**It's important to remember that** the exam expects escalation, not heroics. When a decision exceeds your authority — a legal constraint, a risk beyond the organisation's tolerance, a data source you are not sure you may use — you take it to the AI governance council or steering committee with the case laid out, and they decide.

Task one point five is accountability documentation and the audit trail. Create comprehensive records of model development decisions. Establish version control for models, data and training processes — all three, not just the code. Document stakeholder approvals and go/no-go decision points, which exist at the end of every phase. Maintain chain of custody records for training and test data. And prepare accountability reports for executive and regulatory review.

Finally, how this threads through the six phases. In Business Understanding you identify safety-critical use cases, run stakeholder impact assessments to surface potential harms, plan governance, and write fairness and equity into your success metrics — because if trust requirements are not requirements, they are not in scope, and they will not be delivered. In Data Understanding you interrogate provenance, consent and representation. In Data Preparation you anonymise or encrypt sensitive fields, document every transformation, and keep chain of custody. In Model Development you choose techniques with your explainability commitments in mind and apply mitigation as you go. In Model Evaluation you test fairness across groups, evidence explainability, and take the go/no-go formally. In Model Operationalisation you monitor for drift and for discriminatory output, keep humans in or on the loop, and report to governance on a schedule.

Before we move on, a quick check.

First question. A customer asks why their application was declined. Is that transparency or explainability.

(pause)

The answer is explainability — it concerns the reasoning behind one individual decision. Transparency would be publishing what data the system uses and how it is protected.

Second question. Which Domain one task covers chain of custody for training and test data.

(pause)

The answer is task one point five, accountability documentation and audit trail.

Third question. A model achieves strong overall accuracy but performs noticeably worse for one demographic group. Is that acceptable if the headline metric meets the target.

(pause)

The answer is no. Task one point three requires fairness testing across different population groups, and aggregate accuracy hides exactly this.

By the end of this chapter you should be able to distinguish ethical, responsible, transparent, explainable and governed AI; oversee a privacy and security plan across the data lifecycle; run bias checks on data, algorithm and output; track regulation and escalate properly; and maintain accountability records that survive scrutiny.

Five takeaways. Domain one is a thread through all six phases, not a phase of its own. Responsible AI means a named human owns the outcome. Transparency is about the system; explainability is about the decision. Bias is checked in the data, in the algorithm and in live output, continuously. And version control covers models, data and training processes, with documented go/no-go approvals at every phase boundary.

That completes the five domains, so the next chapter turns to the exam itself — the shape of the paper, the way questions are framed, and how to prepare in the weeks before you sit it.
