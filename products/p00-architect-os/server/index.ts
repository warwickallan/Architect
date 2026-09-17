import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  appendConversation, createProduct, GATE_CONDITIONS, listProducts, readMeta, readRecord,
  resolvePending, setPending, updateEntity, writeMeta, type EntityType,
} from "./record.js";
import { buildSystemPrompt, runTurn } from "./llm.js";
import { splitReply } from "./parse.js";
import { renderPack, writePack } from "./render.js";

const app = express();
app.use(express.json({ limit: "1mb" }));

const wrap = (fn: express.RequestHandler): express.RequestHandler => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch((e: Error) => res.status(400).json({ error: e.message }));

app.get("/api/products", wrap(async (_req, res) => res.json(await listProducts())));

app.post("/api/products", wrap(async (req, res) => {
  const { id, name, kind } = req.body as { id: string; name: string; kind: "tool" | "business" };
  res.json(await createProduct({ id, name, kind: kind === "tool" ? "tool" : "business" }));
}));

app.get("/api/products/:id/record", wrap(async (req, res) => res.json(await readRecord(req.params.id))));

app.get("/api/products/:id/artefacts", wrap(async (req, res) => {
  const rec = await readRecord(req.params.id);
  const pack = renderPack(rec);
  await writePack(req.params.id, pack);
  res.json(pack);
}));

/** One interview turn: user message -> claude -p -> reply + pending proposals. */
app.post("/api/products/:id/chat", wrap(async (req, res) => {
  const id = req.params.id;
  const message = String((req.body as { message?: string }).message ?? "").trim();
  if (!message) throw new Error("empty message");
  const rec = await readRecord(id);
  const turn = (rec.meta.turn ?? 0) + 1;
  await appendConversation(id, { turn, role: "user", text: message, ts: new Date().toISOString() });

  const system = await buildSystemPrompt(rec);
  const result = await runTurn(message, system, rec.meta.interviewSessionId);
  const { reply, updates, parseError } = splitReply(result.raw);

  const meta = await readMeta(id);
  meta.turn = turn;
  meta.interviewSessionId = result.sessionId;
  if (updates.gate) meta.gateAssessment = { ...(meta.gateAssessment ?? {}), ...updates.gate };
  if (updates.unlock?.length) meta.unlocked = Array.from(new Set([...(meta.unlocked ?? []), ...updates.unlock]));
  if (updates.complete) meta.complete = true;
  await writeMeta(id, meta);

  const pending = await setPending(id, updates.proposed, turn);
  await appendConversation(id, { turn, role: "assistant", text: reply, ts: new Date().toISOString(), proposed: updates.proposed.length });

  res.json({ reply, pending, gate: meta.gateAssessment ?? {}, unlock: updates.unlock ?? [], complete: Boolean(meta.complete), parseError, costUsd: result.costUsd, durationMs: result.durationMs });
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

app.post("/api/products/:id/gate/pass", wrap(async (req, res) => {
  const meta = await readMeta(req.params.id);
  meta.gateStatus = "passed";
  await writeMeta(req.params.id, meta);
  res.json(meta);
}));

app.get("/api/meta/gate-conditions", (_req, res) => res.json(GATE_CONDITIONS));

if (process.env.NODE_ENV === "production") {
  const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
  app.use(express.static(dist));
  app.get("*", (_req, res) => res.sendFile(path.join(dist, "index.html")));
}

const PORT = Number(process.env.PORT ?? 5178);
app.listen(PORT, () => console.log(`Architect OS server on http://localhost:${PORT}`));
