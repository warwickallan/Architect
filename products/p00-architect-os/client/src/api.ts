export type EntityType = "FACT" | "PAIN" | "HYP" | "UNKNOWN" | "STK" | "SYS" | "RSK" | "MET" | "REQ" | "DEC";
export const ENTITY_TYPES: EntityType[] = ["FACT", "PAIN", "HYP", "UNKNOWN", "STK", "SYS", "RSK", "MET", "REQ", "DEC"];
export const TYPE_LABEL: Record<EntityType, string> = {
  FACT: "Facts", PAIN: "Pains", HYP: "Hypotheses", UNKNOWN: "Unknowns", STK: "Stakeholders",
  SYS: "Systems", RSK: "Risks", MET: "Metrics", REQ: "Requirements", DEC: "Decisions",
};

export type GateState = "met" | "partial" | "missing";
export const GATE_CONDITIONS = [
  "validatedProblem", "currentState", "stakeholderAuthority", "baseline", "aiSuitability",
  "dataFeasibility", "valueHypothesis", "risks", "successCriteria",
] as const;
export type GateCondition = (typeof GATE_CONDITIONS)[number];
export const GATE_LABEL: Record<GateCondition, string> = {
  validatedProblem: "Validated problem", currentState: "Current state", stakeholderAuthority: "Stakeholder authority",
  baseline: "Baseline", aiSuitability: "AI suitability", dataFeasibility: "Data feasibility",
  valueHypothesis: "Value hypothesis", risks: "Risks", successCriteria: "Success criteria",
};

export interface Entity { id: string; text: string; status: "pending" | "confirmed" | "rejected"; links: string[]; tags: string[]; objectives: string[]; source: { session?: string; turn?: number; ref?: string }; [k: string]: unknown }
export interface Pending { pid: string; type: EntityType; text: string; links: string[]; tags: string[]; objectives: string[]; turn: number; [k: string]: unknown }
export interface Meta { id: string; name: string; kind: "tool" | "business"; stage: number; stageName: string; gate: string; gateStatus: "open" | "passed"; turn?: number; gateAssessment?: Partial<Record<GateCondition, GateState>>; unlocked?: string[]; complete?: boolean }
export interface ConversationEntry { turn: number; role: "user" | "assistant"; text: string; ts: string; proposed?: number }
export interface RecordData { meta: Meta; entities: Record<EntityType, Entity[]>; pending: Pending[]; conversation: ConversationEntry[] }
export interface ChatResult { reply: string; pending: Pending[]; gate: Partial<Record<GateCondition, GateState>>; unlock: string[]; complete: boolean; parseError?: string; costUsd?: number; durationMs?: number }

async function j<T>(url: string, init?: RequestInit): Promise<T> {
  const r = await fetch(url, { headers: { "content-type": "application/json" }, ...init });
  const body = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error((body as { error?: string }).error ?? r.statusText);
  return body as T;
}

export const api = {
  products: () => j<Meta[]>("/api/products"),
  createProduct: (id: string, name: string, kind: "tool" | "business") => j<Meta>("/api/products", { method: "POST", body: JSON.stringify({ id, name, kind }) }),
  record: (id: string) => j<RecordData>(`/api/products/${id}/record`),
  artefacts: (id: string) => j<Record<string, string>>(`/api/products/${id}/artefacts`),
  chat: (id: string, message: string) => j<ChatResult>(`/api/products/${id}/chat`, { method: "POST", body: JSON.stringify({ message }) }),
  confirm: (id: string, pid: string, edits?: { text?: string; type?: EntityType }) => j<Entity>(`/api/products/${id}/pending/${pid}/confirm`, { method: "POST", body: JSON.stringify(edits ?? {}) }),
  reject: (id: string, pid: string) => j<Entity>(`/api/products/${id}/pending/${pid}/reject`, { method: "POST", body: "{}" }),
  passGate: (id: string) => j<Meta>(`/api/products/${id}/gate/pass`, { method: "POST", body: "{}" }),
};
