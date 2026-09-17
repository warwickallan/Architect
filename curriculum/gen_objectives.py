"""Generate curriculum/objectives/*.md and curriculum/COVERAGE-MATRIX.csv from one data source.

Re-run after any syllabus refresh; never hand-edit the objective tables.
The CSV is regenerated with every row reset to Unseen ONLY if it does not exist yet;
if it exists, existing status/evidence columns are preserved by Objective_ID and
new objectives are appended (so a refresh never wipes progress).
"""
import csv
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
RETRIEVED = "2026-09-17"

# (code, filename, title, source_url, source_version, programme_note, areas)
# areas: [(area_title, weight, [(sub_title, [objective, ...]), ...]), ...]
FRAMEWORKS = [
 ("AB410", "ab-410", "AB-410: Building Intelligent Applications",
  "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-410",
  "page updated 2026-07-31 (ms.date 2026-04-26)",
  "Learn fully; exam optional. Either AB-620 or AB-410 satisfies the AB-100 Associate prerequisite. Pass mark 700.",
  [
   ("Create a foundation for intelligent applications", "25-30%", [
    ("Design Microsoft Power Platform solutions by using AI-enabled tools", [
     "Analyze requirements to identify components and options for implementation",
     "Evaluate built-in agents to include in the business solution",
     "Recommend extensibility options",
     "Recommend environment types",
     "Apply a Microsoft Power Platform solution and ALM strategy"]),
    ("Build data models", [
     "Create and edit tables in the data workspace",
     "Create and modify standard tables",
     "Configure table properties",
     "Create and modify columns",
     "Configure table relationships",
     "Configure prompt columns",
     "Configure row summaries",
     "Configure public views",
     "Configure main forms",
     "Configure security"])]),
   ("Create intelligent applications", "25-30%", [
    ("Create model-driven apps", [
     "Create and configure forms for model-driven apps",
     "Create and configure views for model-driven apps",
     "Create generative pages by using natural language",
     "Compose a model-driven app",
     "Configure access to forms and views for model-driven apps",
     "Configure access to model-driven apps",
     "Create and configure model-driven app charts and dashboards"]),
    ("Create canvas apps", [
     "Create a canvas app using data",
     "Design apps for accessibility, performance, responsiveness, and usability",
     "Automate business processes from canvas apps",
     "Create reuseable components, including named formulas, user-defined functions, and component libraries",
     "Manage variables and collections",
     "Implement error handling",
     "Test canvas apps, including using Monitor",
     "Create a Copilot Studio agent from a canvas app"])]),
   ("Build business application logic and automation", "40-45%", [
    ("Create cloud flows", [
     "Recommend cloud flow triggers",
     "Evaluate and recommend connectors",
     "Manage approvals by using cloud flows",
     "Configure cloud flow actions",
     "Implement flow control with conditions and loops",
     "Test and troubleshoot cloud flows"]),
    ("Create prompts and models in AI Hub", [
     "Build prompts from templates or from blank",
     "Consume a prompt in apps",
     "Consume a prompt in cloud flows",
     "Add knowledge to a prompt",
     "Customize prompt settings, including models",
     "Add inputs to a prompt",
     "Consume an AI model in apps",
     "Consume an AI model in cloud flows"]),
    ("Implement business and process logic", [
     "Configure business rules",
     "Configure business process flows",
     "Configure calculated, rollup, and formula columns",
     "Evaluate use cases for business logic"])])]),

 ("AB620", "ab-620", "AB-620: Designing and Building Integrated AI Solutions in Copilot Studio",
  "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-620",
  "page updated 2026-07-31 (ms.date 2026-04-09)",
  "Target exam (Associate prerequisite for AB-100). Pass mark 700.",
  [
   ("Plan and configure agent solutions", "30-35%", [
    ("Plan an agent solution", [
     "Plan integration with enterprise systems",
     "Plan identity strategy",
     "Plan channels and deployment",
     "Plan responsible AI strategy",
     "Evaluate security and governance considerations",
     "Plan reuseable agent components",
     "Design agents for internal or external audiences"]),
    ("Create and monitor agent flows in Copilot Studio", [
     "Create an agent flow",
     "Create a human-in-the-loop agent flow",
     "Configure actions and connectors",
     "Monitor agent flows",
     "Add input and output parameters",
     "Implement error handling in agent flows"]),
    ("Configure topics", [
     "Add agent flows to a topic",
     "Configure agent response formatting",
     "Add tools to a topic",
     "Configure advanced agent responses with custom prompts",
     "Configure advanced agent responses with custom knowledge sources",
     "Configure advanced agent responses with API and Send HTTP requests",
     "Configure generative answers node",
     "Configure adaptive cards",
     "Manage variables"])]),
   ("Integrate and extend agents in Copilot Studio", "40-45%", [
    ("Connect to enterprise knowledge sources", [
     "Connect to Copilot connectors",
     "Connect to Microsoft Power Platform connectors",
     "Connect to Azure AI Search"]),
    ("Add tools to agents", [
     "Configure and monitor computer use for an agent",
     "Configure MCP tools",
     "Add a tool by using an existing custom connector",
     "Add REST APIs to an agent"]),
    ("Configure multi-agent collaboration from Copilot Studio", [
     "Design multi-agent solutions in Copilot Studio",
     "Integrate a Foundry agent",
     "Integrate an existing agent in Copilot Studio",
     "Integrate a Fabric data agent",
     "Create a multi-agent solution by using A2A protocol"]),
    ("Integrate agents with Azure", [
     "Configure generative answers by using Azure AI Search with Foundry",
     "Configure custom prompts to use the Foundry model catalog",
     "Monitor agents by using Application Insights"])]),
   ("Test and manage agents", "20-25%", [
    ("Evaluate agent performance", [
     "Create a test set",
     "Choose an evaluation method",
     "Review test results"]),
    ("Implement application lifecycle management (ALM) for agents in Copilot Studio", [
     "Create a solution",
     "Add existing agents to a solution",
     "Create and use environment variables",
     "Implement and extend Microsoft Power Platform Pipelines"])])]),

 ("AB100", "ab-100", "AB-100: Agentic AI Business Solutions Architect",
  "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-100",
  "Skills measured as of 2026-10-14 (page updated 2026-09-14). Change log: minor changes to 1.2, 2.1, 3.3 vs prior version.",
  "Target exam (Expert). Requires an Associate cert first (AB-620 planned). No Microsoft learning path or ILT exists yet. Pass mark 700.",
  [
   ("Plan AI-powered business solutions", "25-30%", [
    ("Analyze requirements for AI-powered business solutions", [
     "Assess the use of agents in task automation, data analytics, and decision-making",
     "Review data for grounding, including accuracy, relevance, timeliness, cleanliness, and availability",
     "Organize business solution data to be available for other AI systems"]),
    ("Design overall AI strategy for business solutions", [
     "Implement the AI adoption process from the Cloud Adoption Framework for Azure",
     "Design the strategy for building AI and agents in business solutions",
     "Design a multi-agent solution by using platforms such as Microsoft 365 Copilot, Copilot Studio, and Microsoft Foundry",
     "Develop the use cases for prebuilt agents in the solution",
     "Define the solution rules and constraints when building AI components with Copilot Studio, Microsoft Foundry and Microsoft Foundry Tools",
     "Determine the use of generative AI and knowledge sources in agents built with Copilot Studio",
     "Determine when to build custom agents or extend Microsoft 365 Copilot",
     "Determine when custom AI models should be created",
     "Provide guidelines for creating a prompt library",
     "Develop the use cases for customized small language models for the solution",
     "Provide prompt engineering guidelines and techniques for AI-powered business solutions",
     "Include the elements of the Microsoft AI Center of Excellence",
     "Design AI solutions that use multiple Dynamics 365 apps"]),
    ("Evaluate the costs and benefits of an AI-powered business solution", [
     "Select ROI criteria for AI-powered business solutions, including the total cost of ownership",
     "Create an ROI analysis for the proposed AI solution for a business process",
     "Analyze whether to build, buy, or extend AI components for business solutions",
     "Implement a model router to intelligently route requests to the most suitable model"])]),
   ("Design AI-powered business solutions", "25-30%", [
    ("Design AI and agents for business solutions", [
     "Design business terms for Copilot in Dynamics 365 apps for customer experience and service",
     "Design customizations of Copilot in Dynamics 365 apps for customer experience and service",
     "Design connectors for Copilot in Dynamics 365 Sales",
     "Design agents for integration with Dynamics 365 Contact Center channels",
     "Design task agents",
     "Design autonomous agents",
     "Design prompt and response agents",
     "Propose Microsoft Foundry Tools for a given requirement",
     "Propose code-first generative pages and the use of an agent feed for apps",
     "Design topics for Copilot Studio, including fallback",
     "Design data processing for AI models and grounding",
     "Design a business process to include AI components in a Power Apps canvas app",
     "Apply the Microsoft Power Platform Well-Architected Framework to intelligent application workloads",
     "Determine when to use standard natural language processing, conversational language understanding, or generative AI orchestration in Copilot Studio",
     "Design agents and agent flows with Copilot Studio",
     "Design prompt actions in Copilot Studio"]),
    ("Design extensibility of AI solutions", [
     "Design AI solutions by using custom models in Microsoft Foundry",
     "Design agents in Microsoft 365 Copilot",
     "Design agent extensibility in Copilot Studio",
     "Design agent extensibility with Model Context Protocol in Copilot Studio",
     "Design agents to automate tasks in apps and websites by using Computer Use in Copilot Studio",
     "Design agent behaviors in Copilot Studio, including reasoning and voice mode",
     "Optimize solution design by using agents in Microsoft 365, including Teams and SharePoint"]),
    ("Orchestrate configuration for prebuilt agents and apps", [
     "Orchestrate AI features in Dynamics 365 apps for finance and supply chain",
     "Orchestrate AI features in Dynamics 365 apps for customer experience and service",
     "Propose Microsoft 365 agents for business scenarios",
     "Orchestrate the configuration of Microsoft 365 Copilot for Sales and Microsoft 365 Copilot for Service",
     "Propose Microsoft Power Platform AI features, including AI hub",
     "Design interoperability of the finance and operations agent chats to use additional knowledge sources",
     "Recommend the process of adding knowledge sources to in-app help and guidance for Dynamics 365 Finance or Dynamics 365 Supply Chain Management apps"])]),
   ("Deploy AI-powered business solutions", "40-45%", [
    ("Analyze, monitor, and tune AI-powered business solutions", [
     "Recommend the process and tools required for monitoring agents",
     "Analyze backlog and user feedback of AI and agent usage",
     "Apply AI-based tools to analyze and identify issues and perform tuning",
     "Monitor agent performance and metrics",
     "Interpret telemetry data for performance and model tuning"]),
    ("Manage the testing of AI-powered business solutions", [
     "Recommend the process and metrics to test agents",
     "Create validation criteria of custom AI models",
     "Validate effective Copilot prompt best practices",
     "Design end-to-end test scenarios of AI solutions that use multiple Dynamics 365 apps",
     "Build the strategy for creating test cases by using Copilot"]),
    ("Design the ALM process for AI-powered business solutions", [
     "Design the ALM process for data used in AI models and agents",
     "Design the ALM process for Copilot Studio agents, connectors, and actions",
     "Design the ALM process for Microsoft Foundry Agents Service",
     "Design the ALM process for custom AI models",
     "Design the ALM process for AI in Dynamics 365 apps for finance and supply chain",
     "Design the ALM process for AI in Dynamics 365 apps for customer experience and service"]),
    ("Design responsible AI, security, governance, risk management, and compliance", [
     "Design security for agents",
     "Design governance for agents",
     "Design model security",
     "Analyze solution and AI vulnerabilities and mitigations, including prompt manipulation",
     "Review solution for adherence to responsible AI principles",
     "Validate data residency and movement compliance",
     "Design access controls on grounding data and model tuning",
     "Design audit trails for changes to models and data"])])]),

 ("CPMAI", "cpmai", "PMI-CPMAI: Cognitive Project Management in AI",
  "https://www.pmi.org/certifications/ai-project-management-cpmai",
  "UNVERIFIED - pmi.org returned HTTP 403 to automated retrieval on 2026-09-17. Phases below come from the founding brief and general CPMAI methodology. Replace with official exam-content-outline domains/tasks once retrieved (ASSUMPTIONS A12).",
  "Target exam (first). Brief states: 21-hour course, six methodology phases, 120 questions / 160 minutes. All figures unverified.",
  [
   ("CPMAI methodology phases (provisional, phase-level only)", "n/a", [
    ("Six-phase iterative methodology", [
     "Phase I - Business Understanding: match AI to a real business need; define success criteria, ROI hypothesis and go/no-go",
     "Phase II - Data Understanding: identify, assess and source the data the solution needs; quality, availability, rights",
     "Phase III - Data Preparation: clean, label, transform and govern data for the chosen approach",
     "Phase IV - Model Development: iterative build of the AI/agent component; choose approach; prompt/agent/model design",
     "Phase V - Model Evaluation: test against success criteria; evaluation sets; failure and boundary cases; bias/risk review",
     "Phase VI - Model Operationalisation: deploy, monitor, measure realised value; maintenance, drift, iteration"])])]),
]

COLUMNS = ["Framework", "Objective_ID", "Objective", "Weight_or_priority", "Lesson", "Product",
           "Evidence", "Status", "Confidence", "Last_practised", "Last_retested", "Source_version", "Notes"]


def build():
    rows = []
    for code, fname, title, url, version, notes, areas in FRAMEWORKS:
        md = [f"# {title}", "",
              f"- **Source:** {url}",
              f"- **Source version:** {version}",
              f"- **Retrieved:** {RETRIEVED}",
              f"- **Programme note:** {notes}", "",
              "Objective wording is quoted from the official study guide so IDs stay traceable. "
              "Commentary belongs in lessons, not here. IDs are `CODE-area.subarea.n` and are stable "
              "across refreshes: a removed objective is marked *retired*, never renumbered.", "",
              "Generated by `curriculum/gen_objectives.py` - edit the generator, not this file.", ""]
        for ai, (atitle, weight, subs) in enumerate(areas, 1):
            md += [f"## {ai}. {atitle} ({weight})", ""]
            for si, (stitle, objs) in enumerate(subs, 1):
                md += [f"### {ai}.{si} {stitle}", "", "| ID | Objective |", "|---|---|"]
                for oi, obj in enumerate(objs, 1):
                    oid = f"{code}-{ai}.{si}.{oi}"
                    md.append(f"| `{oid}` | {obj} |")
                    rows.append({"Framework": code, "Objective_ID": oid, "Objective": obj,
                                 "Weight_or_priority": weight, "Status": "Unseen",
                                 "Source_version": version})
                md.append("")
        (ROOT / "curriculum" / "objectives" / f"{fname}.md").write_text("\n".join(md), encoding="utf-8")
    return rows


def write_matrix(rows):
    path = ROOT / "curriculum" / "COVERAGE-MATRIX.csv"
    existing = {}
    if path.exists():
        with open(path, newline="", encoding="utf-8") as f:
            existing = {r["Objective_ID"]: r for r in csv.DictReader(f)}
    out = []
    for r in rows:
        merged = {c: "" for c in COLUMNS}
        merged.update(existing.get(r["Objective_ID"], {}))
        # objective text / weight / source version always follow the generator
        merged.update({k: r[k] for k in ("Framework", "Objective", "Weight_or_priority", "Source_version")})
        merged["Objective_ID"] = r["Objective_ID"]
        merged["Status"] = merged["Status"] or "Unseen"
        out.append(merged)
    # objectives that vanished from the source are kept, flagged retired
    seen = {r["Objective_ID"] for r in rows}
    for oid, r in existing.items():
        if oid not in seen:
            r = dict(r)
            r["Notes"] = (r.get("Notes", "") + " RETIRED from source").strip()
            out.append(r)
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=COLUMNS)
        w.writeheader()
        w.writerows(out)
    return len(out)


if __name__ == "__main__":
    n = write_matrix(build())
    print(f"objectives: {n}")
