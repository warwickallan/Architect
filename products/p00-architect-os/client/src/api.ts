export type EntityType = "FACT" | "PAIN" | "HYP" | "UNKNOWN" | "STK" | "SYS" | "RSK" | "MET" | "REQ" | "DEC" | "ACT" | "TEST";
export const ENTITY_TYPES: EntityType[] = ["FACT", "PAIN", "HYP", "UNKNOWN", "STK", "SYS", "RSK", "MET", "REQ", "DEC", "ACT", "TEST"];
export const TYPE_LABEL: Record<EntityType, string> = {
  FACT: "Facts", PAIN: "Pains", HYP: "Hypotheses", UNKNOWN: "Unknowns", STK: "Stakeholders", SYS: "Systems",
  RSK: "Risks / RAID", MET: "Metrics", REQ: "Requirements", DEC: "Decisions", ACT: "Actions", TEST: "Tests",
};

export type GateState = "met" | "partial" | "missing";
export interface StageDef { id: number; key: string; name: string; skill: string; gate: string; conditions: Record<string, string> }
export interface StageState { sessionId?: string; turn: number; gate: Partial<Record<string, GateState>>; gateStatus: "locked" | "open" | "passed"; complete?: boolean; passedAt?: string; override?: boolean }

export interface Entity { id: string; text: string; status: "pending" | "confirmed" | "rejected"; links: string[]; tags: string[]; objectives: string[]; source: { session?: string; turn?: number; stage?: number; ref?: string }; [k: string]: unknown }
export interface Pending { pid: string; type: EntityType; text: string; links: string[]; tags: string[]; objectives: string[]; turn: number; stage: number; [k: string]: unknown }
export interface Meta { id: string; name: string; kind: "tool" | "business"; stage: number; stageName: string; gate: string; gateStatus: "open" | "passed"; stages: Record<string, StageState>; unlocked?: string[] }
export interface ConversationEntry { turn: number; stage: number; role: "user" | "assistant"; text: string; ts: string; proposed?: number }
export interface RecordData { meta: Meta; entities: Record<EntityType, Entity[]>; pending: Pending[]; conversation: ConversationEntry[] }
export interface ChatResult { reply: string; pending: Pending[]; gate: Partial<Record<string, GateState>>; unlock: string[]; complete: boolean; parseError?: string; costUsd?: number; durationMs?: number }

async function j<T>(url: string, init?: RequestInit): Promise<T> {
  const r = await fetch(url, { headers: { "content-type": "application/json" }, ...init });
  const body = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error((body as { error?: string }).error ?? r.statusText);
  return body as T;
}

export const api = {
  stages: () => j<StageDef[]>("/api/stages"),
  products: () => j<Meta[]>("/api/products"),
  createProduct: (id: string, name: string, kind: "tool" | "business") => j<Meta>("/api/products", { method: "POST", body: JSON.stringify({ id, name, kind }) }),
  record: (id: string) => j<RecordData>(`/api/products/${id}/record`),
  artefacts: (id: string, stage: number) => j<Record<string, string>>(`/api/products/${id}/stages/${stage}/artefacts`),
  chat: (id: string, stage: number, message: string) => j<ChatResult>(`/api/products/${id}/stages/${stage}/chat`, { method: "POST", body: JSON.stringify({ message }) }),
  passGate: (id: string, stage: number, override = false) => j<Meta>(`/api/products/${id}/stages/${stage}/gate/pass`, { method: "POST", body: JSON.stringify({ override }) }),
  confirm: (id: string, pid: string, edits?: { text?: string; type?: EntityType }) => j<Entity>(`/api/products/${id}/pending/${pid}/confirm`, { method: "POST", body: JSON.stringify(edits ?? {}) }),
  reject: (id: string, pid: string) => j<Entity>(`/api/products/${id}/pending/${pid}/reject`, { method: "POST", body: "{}" }),
};
