---
chapter: 9
title: "Domain IV (1): machine learning for project managers"
exam: CPMAI
tasks: [CPMAI-4.1]
sources: [032, 033, 034, 027]
status: draft
---

Chapter nine. Domain four, part one: machine learning for project managers. This chapter covers the first task of Domain four of the CPMAI examination — overseeing the AI and machine learning technique, including algorithm selection.

Why this matters. You have now crossed the line between data and model. Everything up to this point was about understanding the business problem and getting trustworthy data into the workspace. From here your team starts choosing techniques, and the techniques they choose will determine what you can promise, what you can explain, and what you can defend when a regulator or a customer asks how a decision was made. You are not being asked to write the code. You are being asked to understand enough to challenge a choice, to ask why a neural network was selected for a problem a decision tree would have solved, and to make sure the reasoning was written down. Project managers who skip this end up as messengers between the business and the data science team, carrying numbers they cannot interrogate.

In this chapter you will learn: how to distinguish supervised, unsupervised and reinforcement learning, and match each to the shape of the business problem; how to recognise the common algorithms and what each is typically used for; how large language models, foundation models, fine-tuning and retrieval change the build, buy or integrate conversation; how to weigh model complexity against interpretability and performance; and how to document an algorithm selection so that it survives scrutiny.

Let us start with the three families of learning.

Supervised learning is learning from labelled examples. You give the system historical data where the answer is already attached. Images tagged "cat" or "dog". Emails tagged "spam" or "not spam". Loan applications tagged "repaid" or "defaulted". The model learns the relationship between the inputs and the label, and then applies it to new, unseen data. Two things follow from that. First, supervised learning needs a large volume of historical, correctly labelled data, and labelling is expensive, slow and frequently underestimated in your plan. Second, the quality of the labels sets the ceiling on the model. Mislabelled training data does not produce a slightly worse model; it produces a confidently wrong one.

Supervised learning splits into two problem types. Classification predicts a category. Is this transaction fraudulent or not? Is this review positive, negative or neutral? Which of five fault codes applies to this machine? Regression predicts a continuous number. What will this property sell for? How much rainfall next month? How many units will we ship in quarter three? If a stakeholder asks for "a prediction", your first question is whether they want a label or a number, because that single answer narrows the technique enormously.

Unsupervised learning is learning without labels. You hand the system the data and it finds structure for itself. The most common form is clustering — grouping customers by purchasing behaviour, grouping sensor readings by operating profile, grouping documents by topic. Nobody told the system what the groups were. It proposed them. The other common form is dimensionality reduction, which simplifies data with a very large number of variables down to the handful that carry most of the signal.

Unsupervised learning is powerful for exploration and for finding what you did not know to look for. It also carries a particular management risk: the clusters it produces have no inherent meaning. Someone has to look at group four and decide it represents high-value infrequent buyers, and that interpretation is a human judgement that can be wrong. Plan for that interpretation step; do not assume the output is self-explanatory.

Reinforcement learning is learning by trial, error and consequence. There is an agent, an environment, and a reward signal. The agent acts, and the outcome is scored — a reward for a good outcome, a penalty for a bad one. Over many attempts, the agent learns a policy that maximises the reward. A warehouse robot learning the quickest route when the usual route is blocked. A system learning to play a game by losing repeatedly. Optimisation of pricing, routing or resource allocation.

You will recognise this from chapter four, where we walked the seven patterns of AI. Reinforcement learning is the engine of the goal-driven systems pattern, and PMI's own warning about that pattern applies directly here: the system optimises exactly what you told it to optimise. Metric achieved, mission missed. If you reward a routing agent purely on elapsed time, do not be surprised when it takes a route your safety policy forbids. Defining the reward function is a governance decision, not a technical one, and you should be in the room for it.

**It's important to remember that** the exam will test your ability to match the learning type to the problem statement. Labelled historical outcomes and a category or a number to predict means supervised. No labels and a request to find natural groupings means unsupervised. Sequential decisions with feedback and a defined objective means reinforcement.

Now the algorithms. You are not expected to derive the mathematics. You are expected to know what each one is good for, and roughly how complex it is.

Logistic regression, despite the name, is used for classification, not regression. It is simple, fast and well understood, and it is a sound default for straightforward yes-or-no problems like spam filtering. Naive Bayes is likewise simple and works well on text — sentiment analysis of customer reviews, for example. K-nearest neighbours predicts a value by looking at the most similar records already in the data; it is used for recommendation and sometimes for filling in missing values. Decision trees split the data into a branching structure of questions ending in a decision; they are widely used for risk assessment and diagnostic problems, and their great virtue is that a human can read the tree and follow the logic.

Then the middle tier. Random forest is an ensemble method — many decision trees, each trained a little differently, with their outputs combined into a majority verdict. It is more accurate than a single tree and considerably harder to explain. Support vector machines handle text and image classification well, including handwriting recognition; more complex than logistic regression, less complex than a neural network.

For unsupervised work, k-means clustering is the standard technique for grouping similar records into a specified number of clusters, and principal component analysis is the standard technique for dimensionality reduction. For reinforcement learning, Q-learning is the name to recognise.

At the top of the complexity scale sit neural networks. An input layer, an output layer, and hidden layers in between where weights are adjusted through training. Two variants are worth knowing by name: convolutional neural networks, used principally for images, and recurrent neural networks, suited to sequential data and natural language tasks. Neural networks can capture relationships no simpler model will find. They are also, in practical terms, opaque. You can observe what goes in and what comes out; tracing why is genuinely hard.

**A common mistake is** to assume the most sophisticated algorithm is the right answer. On the exam, a scenario that mentions an inexperienced team, a simple binary classification, a need for explainability, or a regulated decision is steering you towards a simple, interpretable model — logistic regression, naive Bayes, a decision tree — not towards a neural network.

Which brings us to foundation models. A foundation model is a large model pre-trained on a very broad corpus, which can then be adapted to many downstream tasks. Large language models are the best-known example. Their existence has changed the first question of Phase four from "which algorithm do we train?" to "do we build, buy or integrate?"

You have, broadly, four routes. Build from scratch, which gives full control at the highest cost in data, time and compute. Use a pre-trained model as it comes, which is fastest but generic. Fine-tune a pre-trained model on your own domain data — a legal firm adapting a general model to legal language, for instance — which buys specialism at moderate cost. Or use retrieval-augmented generation, where the model is not retrained at all but is given relevant documents from your own knowledge base at the moment of the query, and answers from those. Retrieval keeps your content current, keeps the source citable, and avoids retraining every time a policy changes.

**In practice…** on most enterprise projects we start by asking whether retrieval solves it, because it is the cheapest to change and the easiest to govern. Fine-tuning is for when the model needs to adopt a style, a format or a specialised vocabulary that retrieval cannot supply. Building from scratch needs a business case of its own.

Finally, the trade-off you will be examined on and will live with. Model complexity, predictive performance and interpretability pull against each other. A more complex model often performs better on the metric and is harder to explain. A simpler model may cost you a few points of accuracy and give you a decision you can defend line by line. There is no universally correct point on that curve; there is only the point your use case justifies. Where the decision materially affects a person — credit, employment, healthcare, eligibility — interpretability is not a nice-to-have. PMI's ethics guidance is explicit that explainable algorithms should be used where possible, and interpretable results provided where they are not.

Your job is to make that trade-off a documented, deliberate choice. Record the candidate algorithms considered, the selection criteria, the accuracy achieved by each, the explainability requirement from the business, and the reason the chosen model won. Record the guardrails too — the thresholds, the anomaly flags, the circuit breakers that stop an agent when it strays. When someone asks in eighteen months why this model, you want a document, not a memory.

Before we move on, a quick check.

First question. A retailer wants to group its customers into natural segments based on spending behaviour. Nobody has defined the segments in advance. Which learning type, and which common algorithm?

(pause)

The answer is unsupervised learning, using k-means clustering.

Second question. The name says regression, but it is used for classification. Which algorithm?

(pause)

The answer is logistic regression.

Third question. A compliance team needs every automated eligibility decision to be explainable to the applicant. Your data scientist proposes a deep neural network because it scores three points higher on accuracy. What is your response?

(pause)

The answer is that the explainability requirement constrains the choice; you ask for a simpler, interpretable model such as a decision tree or logistic regression, and you document the accuracy traded away and why.

By the end of this chapter you should be able to distinguish supervised, unsupervised and reinforcement learning and match each to a business problem; recognise the common algorithms and their typical uses; explain how foundation models, fine-tuning and retrieval reshape the build, buy or integrate decision; weigh complexity against interpretability; and document a selection defensibly.

The key takeaways. Supervised learning needs labels and answers classification or regression questions; unsupervised learning finds structure without them; reinforcement learning learns from reward and penalty. Simple algorithms are the right answer far more often than exam candidates expect. Neural networks buy performance at the cost of transparency. Pre-trained models make build, buy or integrate the opening question of Phase four, and retrieval is usually the cheapest adaptation route. And every algorithm choice should leave a written trail of criteria, alternatives and reasoning.

In the next chapter we stay in Domain four and move from choosing the technique to running the build and evaluating what it produces.
