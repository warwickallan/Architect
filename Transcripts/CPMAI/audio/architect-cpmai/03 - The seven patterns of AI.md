---
chapter: 3
title: "The seven patterns of AI"
exam: CPMAI
tasks: [CPMAI-2.1, CPMAI-2.2]
sources: [PMI *Seven Patterns of AI* article (Walch & Schmelzer, 7 Nov 2024) — primary; lectures 017, 018, 020]
status: draft
---

Chapter three. The seven patterns of AI. This chapter covers Domain two of the PMI-CPMAI examination — Identify Business Needs and Solutions — and in particular the tasks that ask you to map a business problem to one or more AI patterns, and to use that mapping to shape the solution approach.

Why does this matter. Because the single most expensive mistake on an AI project is starting with the technology and working backwards to a problem. You hear it in the corridor: "we need an agent for that", or "can we put a chatbot on it". Nobody has said what the system is supposed to learn, decide or do. The patterns are the antidote. They give you a small, closed vocabulary for describing what kind of AI you are actually building, and once you know that, you know what data you need, what could go wrong, and how long it will take. Get the pattern wrong and everything downstream is wrong with it — the data strategy, the evaluation metric, the governance, the estimate.

In this chapter you will learn: how to define what an AI pattern is and why CPMAI uses them; how to recognise each of the seven patterns from the way a business problem is described; how to tell apart the pairs that are most often confused in exam questions; how to handle a solution that spans several patterns at once; and how to apply the dominant pattern rule when a question forces a single answer.

Let's start with the definition. An AI pattern is a recurring way in which an AI system learns, decides or acts in pursuit of a goal. It is not an algorithm, and it is not a product. It sits above both. Two systems built with completely different technology can share a pattern, and two systems that look similar on a screen can be entirely different patterns underneath. The claim made by PMI's article is a strong one: every AI initiative maps to one or more of seven patterns. That is the whole set. So the first question in Business Understanding — phase one of the six CPMAI phases — is not "which model shall we use" but "which pattern or patterns is this".

Now the seven. Take them in turn.

First, hyperpersonalisation. The purpose is to build and continuously refine a unique profile for each individual, and to treat that person as an individual rather than as a member of a segment. That distinction is the exam-relevant part. Traditional marketing divides people into broad groups — age band, region, spend tier — and serves the group. Hyperpersonalisation serves the person, and the profile keeps updating as behaviour changes. Typical uses are content and product recommendation, adaptive learning paths, individualised health and fitness guidance, and one-to-one credit assessment. If two customers with identical demographics get different outputs, you are looking at hyperpersonalisation.

Second, conversational and human interaction. The purpose is to let machines communicate with people in the ways people naturally communicate — speech, text, images — and also to mediate between humans, as with translation or summarisation. Generative content produced for a human audience sits here too. Chatbots, voice assistants, sentiment and intent analysis, drafting and summarising. **It's important to remember that** this pattern is about human-facing interaction. Machine-to-machine messaging — one service calling another over an interface — is not conversational AI, however much natural language is involved in the logs.

Third, recognition. The purpose is to perceive unstructured content and turn it into structured information. Images, video, audio, handwriting, scanned documents. Object detection, face recognition, speech to text, document processing. The project management consequence here is governance: recognition systems very often consume personal or sensitive material, so transparency about what is captured, and controls on who can see it, belong in the plan from day one.

Fourth, pattern and anomaly detection. The purpose is to learn what normal looks like, then flag the deviation. Correlations, clusters, outliers. Fraud detection, cybersecurity monitoring, compliance checking, predictive maintenance, quality control on a production line. The hard questions on this pattern are never technical. Who defines normal. What threshold triggers an action. What is the cost of a false positive to the customer at the other end. And if the baseline was learned from biased history, you have industrialised that bias and given it an alert queue.

Fifth, predictive analytics and decision support. The purpose is to anticipate an outcome so that a human can make a better judgement. Demand forecasting, equipment failure prediction, financial risk scoring, resource allocation, clinical diagnosis support. The defining feature is that the human stays in control. The model advises; the person decides. That places a heavy requirement on transparency, explainability and continuing validation, because a recommendation a clinician or an underwriter cannot interrogate is a recommendation they cannot responsibly act on.

Sixth, goal-driven systems. The purpose is to learn through feedback and reward — reinforcement learning, trial and error against a defined objective. Simulation, route and resource optimisation, real-time bidding, industrial process control, game playing. **A common mistake is** to assume that a well-specified objective is a safe one. A goal-driven system optimises exactly what you told it to optimise. The metric is achieved and the mission is missed — the delivery route is shortest and unusable, the bidding strategy wins the auction and destroys the margin. Clear goals and human oversight are not optional extras on this pattern; they are the control.

Seventh, autonomous systems. The purpose is to have an agent — physical or virtual — perceive its environment, decide, and act with minimal human intervention, including in situations nobody scripted. Self-driving vehicles, drones, warehouse robots, and software agents that schedule, document or carry out cognitive work. **It's important to remember that** autonomy is not automation. Automation executes predefined steps very reliably; the steps were written by a person in advance. Autonomy handles the case that was not written down. That is precisely why this pattern carries the heaviest responsibilities: safety, accountability, validation and fail-safes. Think of the warehouse robot that meets an obstacle its designers never listed. Stop, reroute, or carry on — something has to decide, and you own that decision.

**In practice…** the fastest way to place a problem is to ask what the system produces and for whom. Structured information out of unstructured input is recognition. A number about the future for a person to use is predictive. A deviation flag is anomaly detection. A per-individual output is hyperpersonalisation. A natural-language exchange with a human is conversational. An optimised policy learned by reward is goal-driven. An action taken in the world without a human in the moment is autonomous.

Two pairs get confused constantly. Predictive analytics versus goal-driven systems: both look forward, but predictive informs a human decision, while goal-driven takes the decision itself against a reward. And goal-driven versus autonomous: a goal-driven system optimises toward an objective you set, usually inside a defined environment; an autonomous system operates in an open environment and acts with minimal supervision. The two often appear together, which brings us to the next point.

Most real solutions are not one pattern. They are several. Take a streaming service. It recommends titles from your viewing history — that is hyperpersonalisation, with prediction underneath it. It notices a sign-in from an unfamiliar country — pattern and anomaly detection. It sends you a message asking whether that was you, and walks you through resetting your password and enabling multi-factor authentication — conversational and human interaction. One product, three patterns, and a fourth if an agent takes protective action on your behalf. Or take a product-advice chatbot in retail: conversational on the surface, hyperpersonalisation in the profile, predictive in what it suggests you will want.

The project management consequence is the important bit. Each pattern brings its own data requirements, its own modelling approach, its own validation and its own risks. So you manage a multi-pattern solution as coordinated workstreams inside one project — not as a monolith, and not as separate projects. The recommendation engine and the fraud detector need different data, different metrics and different governance, but they share a business case, a release train and a single owner. CPMAI's six phases are the framework you use to identify the patterns, integrate them and govern them.

Now, the dominant pattern rule. On the exam you will meet two shapes of question. Some ask which patterns are involved, and expect you to select several — read the scenario and tick off each capability described. Others give a scenario and demand one answer. In that case, identify the dominant pattern: the one that carries the primary business purpose, the thing the solution exists to do. Supporting capabilities are not the answer. Let the wording guide you — "which pattern" singular means find the dominant one, "which patterns" or "select all" means enumerate.

Before we move on, a quick check.

Question one. A hospital system reads scanned referral letters and extracts patient details into structured fields. Which pattern is that, and which pattern is it not.

(pause)

The answer is recognition — unstructured content converted into structured information. It is not conversational, even though the input is language, because the system is not communicating with a person.

Question two. What is the difference between automation and autonomy.

(pause)

The answer is that automation executes predefined steps written in advance by a human, while an autonomous system perceives, decides and acts with minimal human intervention, including in situations that were not specified.

Question three. A logistics platform forecasts parcel volumes so planners can staff the depot. The same platform separately learns a delivery routing policy by trial and reward. Which patterns, and which is dominant if the business case is written around staffing costs.

(pause)

The answer is predictive analytics and decision support, plus goal-driven systems — and if the business case is staffing, predictive analytics is dominant, because that is the purpose the solution exists to serve.

By the end of this chapter you should be able to define an AI pattern and explain why CPMAI starts there; recognise all seven patterns from a business description; separate the pairs that are routinely confused; manage a multi-pattern solution as coordinated workstreams; and apply the dominant pattern rule when a question allows only one answer.

Five takeaways. An AI pattern is a recurring way a system learns, decides or acts, and every initiative maps to one or more of the seven. Conversational AI is human-facing; machine-to-machine communication does not count. Predictive analytics keeps the human in control, while goal-driven and autonomous systems act, and therefore carry heavier oversight duties. Autonomy is not automation. And most real solutions blend patterns, so identify all of them, manage them as coordinated workstreams, and know which one is dominant.

In the next chapter we take the patterns into phase one of the methodology and turn a vague ambition into a defined, measurable business problem.
