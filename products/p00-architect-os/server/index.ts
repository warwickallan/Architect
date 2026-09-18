import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  appendConversation, createProduct, listProducts, passGate, readMeta, readRecord,
  resolvePending, setPending, updateEntity, writeMeta, type EntityType,
} from "./record.js";
import { buildSystemPrompt, runTurn } from "./llm.js";
import { splitReply } from "./parse.js";
import { renderStage, writeStagePack } from "./render.js";
import { STAGES, stageById } from "./stages.js";

const app = express();
app.use(express.json({ limit: "1mb" }));

const wrap = (fn: express.RequestHandler): express.RequestHandler => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch((e: Error) => res.status(400).json({ error: e.message }));

const stageParam = (req: express.Request) => {
  const n = Number(req.params.stage);
  stageById(n);
  return n;
};

app.get("/api/stages", (_req, res) => res.json(STAGES));
app.get("/api/products", wrap(async (_req, res) => res.json(await listProducts())));
app.post("/api/products", wrap(async (req, res) => {
  const { id, name, kind } = req.body as { id: string; name: string; kind: "tool" | "business" };
  res.json(await createProduct({ id, name, kind: kind === "tool" ? "tool" : "business" }));
}));
app.get("/api/products/:id/record", wrap(async (req, res) => res.json(await readRecord(req.params.id))));

app.get("/api/products/:id/stages/:stage/artefacts", wrap(async (req, res) => {
  const stage = stageParam(req);
  const rec = await readRecord(req.params.id);
  const pack = renderStage(rec, stage);
  await writeStagePack(req.params.id, stage, pack);
  res.json(pack);
}));

/** One conversation turn in a stage: user message -> claude -p (stage skill) -> reply + pending proposals. */
app.post("/api/products/:id/stages/:stage/chat", wrap(async (req, res) => {
  const id = req.params.id;
  const stage = stageParam(req);
  const message = String((req.body as { message?: string }).message ?? "").trim();
  if (!message) throw new Error("empty message");
  const rec = await readRecord(id);
  const st = rec.meta.stages[stage];
  if (!st || st.gateStatus === "locked") throw new Error(`stage ${stage} is locked — pass the previous gate first`);
  const turn = st.turn + 1;
  await appendConversation(id, { turn, stage, role: "user", text: message, ts: new Date().toISOString() });

  const system = await buildSystemPrompt(rec, stage);
  const result = await runTurn(message, system, st.sessionId);
  const { reply, updates, parseError } = splitReply(result.raw);

  const meta = await readMeta(id);
  const ms = meta.stages[stage];
  ms.turn = turn;
  ms.sessionId = result.sessionId;
  if (updates.gate) ms.gate = { ...(ms.gate ?? {}), ...updates.gate };
  if (updates.complete) ms.complete = true;
  if (updates.unlock?.length) meta.unlocked = Array.from(new Set([...(meta.unlocked ?? []), ...updates.unlock]));
  await writeMeta(id, meta);

  const pending = await setPending(id, updates.proposed, turn, stage);
  await appendConversation(id, { turn, stage, role: "assistant", text: reply, ts: new Date().toISOString(), proposed: updates.proposed.length });
  res.json({ reply, pending, gate: ms.gate, unlock: updates.unlock ?? [], complete: Boolean(ms.complete), parseError, costUsd: result.costUsd, durationMs: result.durationMs });
}));

app.post("/api/products/:id/stages/:stage/gate/pass", wrap(async (req, res) => {
  const override = Boolean((req.body as { override?: boolean })?.override);
  res.json(await passGate(req.params.id, stageParam(req), override));
}));

app.post("/api/products/:id/pending/:pid/confirm", wrap(async (req, res) => {
  const edits = (req.body ?? {}) as { text?: string; type?: EntityType };
  res.json(await resolvePending(req.params.id, req.params.pid, "confirmed", edits));
}));
app.post("/api/products/:id/pending/:pid/reject", wrap(async (req, res) => {
  res.json(await resolvePending(req.params.id, req.params.pid, "rejected"));
}));
app.patch("/api/products/:id/entities/:eid", wrap(async (req, res) => {
  res.json(await updateEntity(req.params.id, req.params.eid, req.body));
}));

if (process.env.NODE_ENV === "production") {
  const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
  app.use(express.static(dist));
  app.get("*", (_req, res) => res.sendFile(path.join(dist, "index.html")));
}

const PORT = Number(process.env.PORT ?? 5178);
app.listen(PORT, () => console.log(`Architect OS server on http://localhost:${PORT}`));
