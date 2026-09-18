/**
 * The structured record: JSON files per entity type under products/<id>/record/.
 * This module is the only thing that writes them. IDs are assigned here, never by the LLM.
 * Stage state (session, turn, gate assessment, conversation) is kept per stage.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { PRODUCTS_DIR, productDir, recordDir } from "./paths.js";
import { STAGES, stageById } from "./stages.js";

export const TYPE_FILES = {
  FACT: "facts", PAIN: "pains", HYP: "hypotheses", UNKNOWN: "unknowns", STK: "stakeholders",
  SYS: "systems", RSK: "risks", MET: "metrics", REQ: "requirements", DEC: "decisions",
  ACT: "actions", TEST: "tests",
} as const;
export type EntityType = keyof typeof TYPE_FILES;
export const ENTITY_TYPES = Object.keys(TYPE_FILES) as EntityType[];

export type Status = "pending" | "confirmed" | "rejected";
export type GateState = "met" | "partial" | "missing";

export interface Entity {
  id: string;
  text: string;
  status: Status;
  source: { session?: string; turn?: number; stage?: number; ref?: string };
  links: string[];
  tags: string[];
  objectives: string[];
  created?: string;
  confirmed?: string;
  [extra: string]: unknown;
}

export interface Pending {
  pid: string;
  type: EntityType;
  text: string;
  links: string[];
  tags: string[];
  objectives: string[];
  turn: number;
  stage: number;
  [extra: string]: unknown;
}

export interface StageState {
  sessionId?: string;
  turn: number;
  gate: Partial<Record<string, GateState>>;
  gateStatus: "locked" | "open" | "passed";
  complete?: boolean;
  passedAt?: string;
  passedBy?: string;
  override?: boolean;
}

export interface Meta {
  id: string;
  name: string;
  kind: "tool" | "business";
  stage: number;
  stageName: string;
  gate: string;
  gateStatus: "open" | "passed";
  created: string;
  recordVersion: string;
  nextIds: Partial<Record<EntityType, number>>;
  nextPid?: number;
  stages: Record<string, StageState>;
  unlocked?: string[];
  // legacy (v0.1 single-stage) fields, migrated on read
  turn?: number;
  interviewSessionId?: string;
  gateAssessment?: Partial<Record<string, GateState>>;
  complete?: boolean;
}

export interface ConversationEntry {
  turn: number;
  stage: number;
  role: "user" | "assistant";
  text: string;
  ts: string;
  proposed?: number;
}

export interface ProductRecord {
  meta: Meta;
  entities: { [K in EntityType]: Entity[] };
  pending: Pending[];
  conversation: ConversationEntry[];
}

const slugOk = (id: string) => /^[a-z0-9][a-z0-9-]{1,60}$/.test(id);

async function readJson<T>(file: string, fallback: T): Promise<T> {
  try { return JSON.parse(await fs.readFile(file, "utf8")) as T; } catch { return fallback; }
}
const writeJson = (file: string, data: unknown) => fs.writeFile(file, JSON.stringify(data, null, 2) + "\n", "utf8");

function freshStages(current: number): Record<string, StageState> {
  const out: Record<string, StageState> = {};
  for (const s of STAGES) out[s.id] = { turn: 0, gate: {}, gateStatus: s.id < current ? "passed" : s.id === current ? "open" : "locked" };
  return out;
}

/** Bring a v0.1 (single-stage) meta up to the multi-stage shape without losing anything. */
function migrate(meta: Meta): Meta {
  if (meta.stages && Object.keys(meta.stages).length) return meta;
  const stages = freshStages(meta.stage ?? 1);
  const s1 = stages[1];
  s1.sessionId = meta.interviewSessionId;
  s1.turn = meta.turn ?? 0;
  s1.gate = meta.gateAssessment ?? {};
  s1.complete = meta.complete;
  if (meta.gateStatus === "passed") { s1.gateStatus = "passed"; s1.passedBy = "Warwick"; }
  return { ...meta, stages };
}

export async function listProducts(): Promise<Meta[]> {
  const names = await fs.readdir(PRODUCTS_DIR, { withFileTypes: true });
  const metas: Meta[] = [];
  for (const d of names) {
    if (!d.isDirectory()) continue;
    const m = await readJson<Meta | null>(path.join(recordDir(d.name), "meta.json"), null);
    if (m) metas.push(migrate(m));
  }
  return metas.sort((a, b) => a.id.localeCompare(b.id));
}

export async function createProduct(input: { id: string; name: string; kind: "tool" | "business" }): Promise<Meta> {
  if (!slugOk(input.id)) throw new Error("id must be a lowercase slug, e.g. p01-tech-pmo-ai");
  const dir = recordDir(input.id);
  await fs.mkdir(dir, { recursive: true });
  const metaFile = path.join(dir, "meta.json");
  if (await readJson<Meta | null>(metaFile, null)) throw new Error("product already exists");
  const meta: Meta = {
    id: input.id, name: input.name, kind: input.kind,
    stage: 0, stageName: stageById(0).name, gate: stageById(0).gate, gateStatus: "open",
    created: new Date().toISOString().slice(0, 10), recordVersion: "0.2",
    nextIds: {}, nextPid: 1, stages: freshStages(0),
  };
  await writeJson(metaFile, meta);
  for (const f of Object.values(TYPE_FILES)) await writeJson(path.join(dir, `${f}.json`), []);
  await writeJson(path.join(dir, "pending.json"), []);
  await fs.writeFile(path.join(dir, "conversation.jsonl"), "", "utf8");
  await fs.writeFile(path.join(productDir(input.id), "README.md"),
    `# ${input.name}\n\n**Kind:** ${input.kind} · **Stage:** 0 Opportunity\n\nCreated in Architect OS on ${meta.created}. Record in \`record/\`; artefacts render to \`artefacts/\`.\n`, "utf8");
  return meta;
}

export async function readMeta(id: string): Promise<Meta> {
  const m = await readJson<Meta | null>(path.join(recordDir(id), "meta.json"), null);
  if (!m) throw new Error(`no record for ${id}`);
  return migrate(m);
}
export const writeMeta = (id: string, meta: Meta) => writeJson(path.join(recordDir(id), "meta.json"), meta);

export async function readRecord(id: string): Promise<ProductRecord> {
  const meta = await readMeta(id);
  const entities = {} as ProductRecord["entities"];
  for (const t of ENTITY_TYPES) entities[t] = await readJson<Entity[]>(path.join(recordDir(id), `${TYPE_FILES[t]}.json`), []);
  const pending = await readJson<Pending[]>(path.join(recordDir(id), "pending.json"), []);
  const raw = await fs.readFile(path.join(recordDir(id), "conversation.jsonl"), "utf8").catch(() => "");
  const conversation = raw.split("\n").filter(Boolean).map((l) => {
    const e = JSON.parse(l) as ConversationEntry;
    return { ...e, stage: e.stage ?? 1 }; // v0.1 entries were all discovery
  });
  return { meta, entities, pending, conversation };
}

export async function appendConversation(id: string, entry: ConversationEntry) {
  await fs.appendFile(path.join(recordDir(id), "conversation.jsonl"), JSON.stringify(entry) + "\n", "utf8");
}

export function summariseConfirmed(rec: ProductRecord): string {
  const lines: string[] = [];
  for (const t of ENTITY_TYPES) for (const e of rec.entities[t]) if (e.status === "confirmed") {
    const tags = e.tags?.length ? ` [${e.tags.join(",")}]` : "";
    lines.push(`${e.id}${tags}: ${e.text}`);
  }
  return lines.join("\n");
}

export type Proposal = { type: EntityType; text: string; links?: string[]; tags?: string[]; objectives?: string[]; [extra: string]: unknown };

export async function setPending(id: string, proposals: Proposal[], turn: number, stage: number): Promise<Pending[]> {
  const meta = await readMeta(id);
  const existing = await readJson<Pending[]>(path.join(recordDir(id), "pending.json"), []);
  let n = meta.nextPid ?? 1;
  const added: Pending[] = proposals
    .filter((p) => p && ENTITY_TYPES.includes(p.type) && typeof p.text === "string" && p.text.trim())
    .map((p): Pending => ({ ...p, type: p.type, text: p.text, links: p.links ?? [], tags: p.tags ?? [], objectives: p.objectives ?? [], pid: `P-${n++}`, turn, stage }));
  meta.nextPid = n;
  await writeMeta(id, meta);
  const all = [...existing, ...added];
  await writeJson(path.join(recordDir(id), "pending.json"), all);
  return all;
}

async function takePending(id: string, pid: string): Promise<Pending> {
  const file = path.join(recordDir(id), "pending.json");
  const all = await readJson<Pending[]>(file, []);
  const p = all.find((x) => x.pid === pid);
  if (!p) throw new Error(`no pending ${pid}`);
  await writeJson(file, all.filter((x) => x.pid !== pid));
  return p;
}

export async function resolvePending(id: string, pid: string, outcome: "confirmed" | "rejected", edits?: Partial<Pending>): Promise<Entity> {
  const p = await takePending(id, pid);
  const merged = { ...p, ...(edits ?? {}) };
  const meta = await readMeta(id);
  const n = meta.nextIds[merged.type] ?? 1;
  meta.nextIds[merged.type] = n + 1;
  await writeMeta(id, meta);
  const { pid: _pid, turn, stage, type, ...rest } = merged;
  const now = new Date().toISOString();
  const entity: Entity = {
    ...rest,
    id: `${type}-${String(n).padStart(3, "0")}`,
    text: merged.text,
    status: outcome,
    source: { session: meta.stages[stage]?.sessionId, turn, stage, ref: edits?.text && edits.text !== p.text ? "edited by Warwick on confirmation" : "proposed in conversation" },
    links: merged.links ?? [], tags: merged.tags ?? [], objectives: merged.objectives ?? [],
    created: now, ...(outcome === "confirmed" ? { confirmed: now } : {}),
  };
  const file = path.join(recordDir(id), `${TYPE_FILES[type]}.json`);
  const list = await readJson<Entity[]>(file, []);
  list.push(entity);
  await writeJson(file, list);
  return entity;
}

export async function updateEntity(id: string, eid: string, patch: Partial<Entity>): Promise<Entity> {
  const type = eid.split("-")[0] as EntityType;
  if (!ENTITY_TYPES.includes(type)) throw new Error(`bad id ${eid}`);
  const file = path.join(recordDir(id), `${TYPE_FILES[type]}.json`);
  const list = await readJson<Entity[]>(file, []);
  const i = list.findIndex((e) => e.id === eid);
  if (i < 0) throw new Error(`no entity ${eid}`);
  const { id: _id, ...safe } = patch;
  list[i] = { ...list[i], ...safe };
  await writeJson(file, list);
  return list[i];
}

/** Pass the current stage's gate and open the next stage. `override` records a demo/judgement bypass explicitly. */
export async function passGate(id: string, stage: number, override = false): Promise<Meta> {
  const meta = await readMeta(id);
  const st = meta.stages[stage];
  if (!st || st.gateStatus === "locked") throw new Error(`stage ${stage} is not open`);
  const def = stageById(stage);
  const unmet = Object.keys(def.conditions).filter((c) => st.gate[c] !== "met");
  if (unmet.length && !override) throw new Error(`gate not met: ${unmet.join(", ")}`);
  st.gateStatus = "passed"; st.passedAt = new Date().toISOString(); st.passedBy = "Warwick"; st.override = override || undefined;
  const next = stage + 1;
  if (meta.stages[next]) meta.stages[next].gateStatus = "open";
  if (next <= 6) { meta.stage = next; meta.stageName = stageById(next).name; meta.gate = stageById(next).gate; meta.gateStatus = "open"; }
  else { meta.gateStatus = "passed"; }
  await writeMeta(id, meta);
  return meta;
}
