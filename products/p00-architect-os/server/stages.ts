/**
 * The seven stages of the method (method/README.md v0.2), each with its skill and gate conditions.
 * The server, the prompts and the UI all read this one table.
 */
export interface StageDef {
  id: number;
  key: string;
  name: string;
  skill: string; // .claude/skills/<skill>/SKILL.md
  gate: string;
  conditions: Record<string, string>; // key -> label
}

export const STAGES: StageDef[] = [
  { id: 0, key: "opportunity", name: "Opportunity", skill: "opportunity", gate: "Candidate selected",
    conditions: { painStated: "Pain stated", frequencyScale: "Frequency & scale", systemsKnown: "Systems known", betterMeasurable: "'Better' is measurable", feasibilitySketch: "Feasibility sketched", scored: "Scored & selected" } },
  { id: 1, key: "discover", name: "Discover", skill: "discovery-interview", gate: "Discovery Decision",
    conditions: { validatedProblem: "Validated problem", currentState: "Current state", stakeholderAuthority: "Stakeholder authority", baseline: "Baseline", aiSuitability: "AI suitability", dataFeasibility: "Data feasibility", valueHypothesis: "Value hypothesis", risks: "Risks", successCriteria: "Success criteria" } },
  { id: 2, key: "architect", name: "Architect", skill: "architect", gate: "Architecture baseline",
    conditions: { targetArchitecture: "Target architecture", sourceOfTruth: "Source of truth", aiDeterministicBoundary: "AI / deterministic boundary", trustBoundaries: "Trust boundaries", hilAuthority: "HIL authority", integrationChoices: "Integration choices", nfrs: "NFRs", adrsAccepted: "ADRs accepted" } },
  { id: 3, key: "mobilise", name: "Mobilise", skill: "mobilise", gate: "Ready to build",
    conditions: { scope: "Scope", backlog: "Backlog", milestones: "Milestones", raidOwned: "RAID owned", resources: "Resources", stakeholderComms: "Stakeholders & comms", changeAdoption: "Change & adoption", accessConfirmed: "Access confirmed" } },
  { id: 4, key: "build", name: "Build & Evaluate", skill: "build-evaluate", gate: "Release readiness",
    conditions: { evalSetSeeded: "Eval set seeded", happyPaths: "Happy paths", failurePaths: "Failure paths", boundaryCases: "Boundary cases", hilVerified: "HIL verified", auditTrail: "Audit trail", securityReview: "Security review", uatAccepted: "UAT accepted" } },
  { id: 5, key: "operate", name: "Deploy & Operate", skill: "deploy-operate", gate: "Transition complete",
    conditions: { deploymentPlan: "Deployment plan", almEvidence: "ALM evidence", monitoring: "Monitoring", governance: "Governance", contingency: "Contingency", runbook: "Runbook", adoption: "Adoption", handover: "Handover" } },
  { id: 6, key: "review", name: "Review", skill: "review", gate: "Value reviewed",
    conditions: { realisedValue: "Realised value", architectureReview: "Architecture review", lessons: "Lessons", methodUpdated: "Method updated", caseStudy: "Case study" } },
];

export const stageById = (id: number): StageDef => {
  const s = STAGES.find((x) => x.id === id);
  if (!s) throw new Error(`no stage ${id}`);
  return s;
};
