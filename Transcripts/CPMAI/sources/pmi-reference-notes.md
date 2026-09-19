# PMI reference notes for the CPMAI audio course

Structured notes (paraphrased, not reproduced) from the public PMI articles listed as references in the PMI-CPMAI Examination Content Outline (Sept 2025). Read via Chrome on 2026-09-19. Use these as the primary source for the corresponding chapters; the Udemy transcript is structure/examples only.

## The Seven Patterns of AI — Walch & Schmelzer, PMI Blog, 7 Nov 2024
`https://www.pmi.org/blog/seven-patterns-of-ai`

An AI *pattern* is a recurring way an AI system learns, decides or acts toward a goal. Every initiative maps to one or more patterns; recognising which apply drives data strategy, expectations, estimation and governance. The seven, with their purpose and typical examples:

1. **Hyperpersonalisation** — a continuously refined profile per individual, beyond segmentation. Content feeds, adaptive learning, individualised health/fitness, one-to-one credit assessment.
2. **Conversational & human interaction** — machines communicating with people in natural forms (voice, text, images), including human-to-human mediation (translation, summarisation) and generative content for human audiences. Excludes machine-to-machine. Chatbots, assistants, sentiment/intent, content generation.
3. **Recognition** — perceiving unstructured content (image, video, audio, text) into structured information. Image/object/face/speech/handwriting recognition, document processing. Sensitive data → governance and transparency matter.
4. **Pattern & anomaly detection** — learning what "normal" is and flagging deviation; correlations, clusters, outliers. Fraud, cybersecurity, compliance, predictive maintenance, quality control. Raises: who defines normal, what thresholds act, false positives, biased baselines.
5. **Predictive analytics & decision support** — anticipating outcomes to inform *human* judgement; adaptive models that learn over time. Demand forecasting, failure prediction, financial risk, resource allocation, diagnosis support. Human stays in control; needs transparency, explainability, ongoing validation.
6. **Goal-driven systems** — learning through feedback/reward (reinforcement learning); trial and error toward defined objectives. Simulation, route/resource optimisation, real-time bidding, industrial control, game-playing. Risk: optimises exactly what it's told — metric achieved, mission missed; needs clear goals and oversight.
7. **Autonomous systems** — agents (physical or virtual) that perceive, decide and act with minimal human intervention. Autonomy ≠ automation (automation executes predefined steps). Self-driving vehicles, robots, drones, software agents for scheduling/documentation/cognitive automation; "co-bots", humans "on the loop". Responsibilities: safety, accountability, validation, fail-safes.

**Combining patterns:** most real solutions blend several (e.g. a product-advice chatbot = conversational + hyperpersonalisation + predictive). Each pattern brings its own data, modelling and validation needs — manage as coordinated workstreams, not a monolith. CPMAI's six phases are the framework for identifying, integrating and governing the patterns.

## Top 10 Ethical Considerations for AI Projects — Schmelzer & Walch, PMI Blog, 15 Jan 2025
`https://www.pmi.org/blog/top-10-ethical-considerations-for-ai-projects`

Ethics is about the interplay of people and systems (human↔human, human↔machine, machine↔machine affecting humans). Address it *before* implementation.

1. Fairness and bias — scrutinise training data, refine models against discrimination.
2. Transparency — how the system works, how data is used and protected; informed consent.
3. Privacy — safeguard user data against misuse.
4. Human safety — no harm; rigorous design, testing, monitoring, safeguards.
5. Environmental responsibility — energy and compute footprint; sustainable practice.
6. Explainability — explainable algorithms where possible; interpretable results otherwise.
7. Human oversight — no "set and forget"; humans in the loop, aligned with values, law, policy.
8. Human-centred design — users' needs before technical capability.
9. Responsibility — organisations own outcomes; accountability non-negotiable.
10. Long-term thinking — societal and planetary effects, mitigated proactively.

## Top 9 AI Data Governance Best Practices — Schmelzer & Walch, PMI Blog, 24 Feb 2025
`https://www.pmi.org/blog/ai-data-governance-best-practices`

Data governance = ensuring data is properly stored, managed, accurate, available, access-controlled; the processes and systems for integrity, security, compliance.

1. Define governance objectives — what data, how AI uses it, who has access; policies on provenance, accuracy, ethical use.
2. Build an empowered governance team — data scientists, compliance, legal; ownership of decisions; enforcement.
3. Data quality controls — validation, cleansing, standardisation; regular audits ("garbage in, garbage out").
4. Data security and breach planning — encryption, access controls, anomaly monitoring, backup/recovery, response strategy.
5. Access control and tracking — RBAC, MFA, audit logs; monitor AI systems for unauthorised data use.
6. Retention and deletion policies — lifecycle management (GDPR, CCPA); stale data → bad decisions.
7. Compliance monitoring — tracking, real-time alerts, regular audits.
8. Continuous adaptation — governance evolves with models, risks and regulation.
9. Communicate, train, reinforce — culture and training; policies don't enforce themselves.

## Why Most AI Projects Fail: 10 Mistakes to Avoid — Schmelzer & Walch, PMI Blog, 12 Dec 2024
`https://www.pmi.org/blog/why-most-ai-projects-fail`

1. Treating AI as app development — it is data-centric, not code-centric; agile alone doesn't fit.
2. ROI misalignment — no clear problem or expected benefit defined up front.
3. Data quantity — too little data to learn from.
4. Data quality — garbage in, garbage out; cleaning and preparation are non-negotiable.
5. Proof of concept that never survives the real world — lab conditions mask data variability and integration.
6. Training data vs real-world data — models that pass testing and fail in operation.
7. Resource underestimation — especially data acquisition and preparation time and cost.
8. Neglecting maintenance and evolution — models decay; plan the lifecycle.
9. Vendor hype — pick solutions that fit the need, not the pitch.
10. Overpromise / underdeliver — the historic cause of "AI winters"; set realistic scope and expectations.

## Still to capture (also on the ECO reference list)
- "Preparing Project Managers for an AI-Driven Future" (PMI Blog, 22 Nov 2024)
- "Leading and Managing AI Projects Digital Guide" (PMI standards, 2025) — members' content, check access
- Free Introduction: PMI-CPMAI (EL185) — PMI course, check access
