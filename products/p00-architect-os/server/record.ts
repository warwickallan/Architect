/**
 * The structured record: JSON files per entity type under products/<id>/record/.
 * This module is the only thing that writes them. IDs are assigned here, never by the LLM.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { PRODUCTS_DIR, productDir, recordDir } from "./paths.js";

export const TYPE_FILES = {
  FACT: "facts",
  PAIN: "pains",
  HYP: "hypotheses",
  UNKNOWN: "unknowns",
  STK: "stakeholders",
  SYS: "systems",
  RSK: "risks",
  MET: "metrics",
  REQ: "requirements",
  DEC: "decisions",
} as const;
export type EntityType = keyof typeof TYPE_FILES;
export const ENTITY_TYPES = Object.keys(TYPE_FILES) as EntityType[];

export type Status = "pending" | "confirmed" | "rejected";

export interface Entity {
  id: string;
  text: string;
  status: Status;
  source: { session?: string; turn?: number; ref?: string };
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
  [extra: string]: unknown;
}

export type GateState = "met" | "partial" | "missing";
export const GATE_CONDITIONS = [
  "validatedProblem",
  "currentState",
  "stakeholderAuthority",
  "baseline",
  "aiSuitability",
  "dataFeasibility",
  "valueHypothesis",
  "risks",
  "successCriteria",
] as const;
export type GateCondition = (typeof GATE_CONDITIONS)[number];

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
  turn?: number;
  interviewSessionId?: string;
  gateAssessment?: Partial<Record<GateCondition, GateState>>;
  unlocked?: string[];
  complete?: boolean;
}

export interface ConversationEntry {
  turn: number;
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
  try {
    return JSON.parse(await fs.readFile(file, "utf8")) as T;
  } catch {
    return fallback;
  }
}
const writeJson = (file: string, data: unknown) =>
  fs.writeFile(file, JSON.stringify(data, null, 2) + "\n", "utf8");

export async function listProducts(): Promise<Meta[]> {
  const names = await fs.readdir(PRODUCTS_DIR, { withFileTypes: true });
  const metas: Meta[] = [];
  for (const d of names) {
    if (!d.isDirectory()) continue;
    const m = await readJson<Meta | null>(path.join(recordDir(d.name), "meta.json"), null);
    if (m) metas.push(m);
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
    id: input.id,
    name: input.name,
    kind: input.kind,
    stage: 1,
    stageName: "Discover",
    gate: "Discovery Decision",
    gateStatus: "open",
    created: new Date().toISOString().slice(0, 10),
    recordVersion: "0.1",
    nextIds: {},
    nextPid: 1,
    turn: 0,
  };
  await writeJson(metaFile, meta);
  for (const f of Object.values(TYPE_FILES)) await writeJson(path.join(dir, `${f}.json`), []);
  await writeJson(path.join(dir, "pending.json"), []);
  await fs.writeFile(path.join(dir, "conversation.jsonl"), "", "utf8");
  await fs.writeFile(
    path.join(productDir(input.id), "README.md"),
    `# ${input.name}\n\n**Kind:** ${input.kind} · **Stage:** 1 Discover · **Gate:** Discovery Decision (open)\n\nCreated in Architect OS on ${meta.created}. Record in \`record/\`; discovery artefacts render to \`discovery/\`.\n`,
    "utf8",
  );
  return meta;
}

export async function readMeta(id: string): Promise<Meta> {
  const m = await readJson<Meta | null>(path.join(recordDir(id), "meta.json"), null);
  if (!m) throw new Error(`no record for ${id}`);
  return m;
}
export const writeMeta = (id: string, meta: Meta) => writeJson(path.join(recordDir(id), "meta.json"), meta);

export async function readRecord(id: string): Promise<ProductRecord> {
  const meta = await readMeta(id);
  const entities = {} as ProductRecord["entities"];
  for (const t of ENTITY_TYPES) {
    entities[t] = await readJson<Entity[]>(path.join(recordDir(id), `${TYPE_FILES[t]}.json`), []);
  }
  const pending = await readJson<Pending[]>(path.join(recordDir(id), "pending.json"), []);
  const raw = await fs.readFile(path.join(recordDir(id), "conversation.jsonl"), "utf8").catch(() => "");
  const conversation = raw
    .split("\n")
    .filter(Boolean)
    .map((l) => JSON.parse(l) as ConversationEntry);
  return { meta, entities, pending, conversation };
}

export async function appendConversation(id: string, entry: ConversationEntry) {
  await fs.appendFile(path.join(recordDir(id), "conversation.jsonl"), JSON.stringify(entry) + "\n", "utf8");
}

/** Confirmed entities as compact lines for the system prompt. */
export function summariseConfirmed(rec: ProductRecord): string {
  const lines: string[] = [];
  for (const t of ENTITY_TYPES) {
    for (const e of rec.entities[t]) if (e.status === "confirmed") lines.push(`${e.id}: ${e.text}`);
  }
  return lines.join("\n");
}

export type Proposal = { type: EntityType; text: string; links?: string[]; tags?: string[]; objectives?: string[]; [extra: string]: unknown };

export async function setPending(id: string, proposals: Proposal[], turn: number): Promise<Pending[]> {
  const meta = await readMeta(id);
  const existing = await readJson<Pending[]>(path.join(recordDir(id), "pending.json"), []);
  let n = meta.nextPid ?? 1;
  const added: Pending[] = proposals
    .filter((p) => p && ENTITY_TYPES.includes(p.type) && typeof p.text === "string" && p.text.trim())
    .map((p): Pending => ({ ...p, type: p.type, text: p.text, links: p.links ?? [], tags: p.tags ?? [], objectives: p.objectives ?? [], pid: `P-${n++}`, turn }));
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

/** Confirm (optionally with edits) or reject a pending proposal; both are kept in the type file for provenance. */
export async function resolvePending(
  id: string,
  pid: string,
  outcome: "confirmed" | "rejected",
  edits?: Partial<Pending>,
): Promise<Entity> {
  const p = await takePending(id, pid);
  const merged = { ...p, ...(edits ?? {}) };
  const meta = await readMeta(id);
  const n = meta.nextIds[merged.type] ?? 1;
  meta.nextIds[merged.type] = n + 1;
  await writeMeta(id, meta);
  const { pid: _pid, turn, type, ...rest } = merged;
  const now = new Date().toISOString();
  const entity: Entity = {
    ...rest,
    id: `${type}-${String(n).padStart(3, "0")}`,
    text: merged.text,
    status: outcome,
    source: {
      session: meta.interviewSessionId,
      turn,
      ref: edits?.text && edits.text !== p.text ? "edited by Warwick on confirmation" : "proposed by interview",
    },
    links: merged.links ?? [],
    tags: merged.tags ?? [],
    objectives: merged.objectives ?? [],
    created: now,
    ...(outcome === "confirmed" ? { confirmed: now } : {}),
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
