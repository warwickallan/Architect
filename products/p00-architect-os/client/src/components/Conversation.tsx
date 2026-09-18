import { useEffect, useRef, useState } from "react";
import { api, type RecordData, type StageDef, type StageState } from "../api";
import { createWebSpeechAdapter } from "../input/dictation";

const dictation = createWebSpeechAdapter();

const KICKOFF: Record<number, string> = {
  0: "Begin capturing this candidate. Introduce yourself in one sentence and ask for the pain and a recent example.",
  1: "Begin the discovery interview. Introduce yourself in one sentence and ask your first question.",
  2: "Begin architecture. Restate the Discovery Decision from the record in one paragraph, confirm it still holds, then propose candidate architectures.",
  3: "Begin mobilisation. Confirm scope from the record, then start deriving the backlog from the architecture.",
  4: "Begin build & evaluate. Ask what has been built since the plan, and which metrics it touches.",
  5: "Begin deploy & operate. Ask for the deployment sequence and rollback.",
  6: "Begin the review. Read back the hypotheses and metrics from discovery and ask for actuals.",
};

export function Conversation({ rec, stage, state, draft, setDraft, onTurn }: { rec: RecordData; stage: StageDef; state: StageState; draft: string; setDraft: (s: string) => void; onTurn: () => Promise<void> }) {
  const [busy, setBusy] = useState(false);
  const [listening, setListening] = useState(false);
  const [interim, setInterim] = useState("");
  const [last, setLast] = useState<{ costUsd?: number; durationMs?: number; parseError?: string } | null>(null);
  const bottom = useRef<HTMLDivElement>(null);
  const messages = rec.conversation.filter((m) => m.stage === stage.id);

  useEffect(() => { bottom.current?.scrollIntoView({ behavior: "smooth" }); }, [messages.length, busy]);

  async function send(text: string) {
    const msg = text.trim();
    if (!msg || busy) return;
    setBusy(true);
    setDraft("");
    try {
      const r = await api.chat(rec.meta.id, stage.id, msg);
      setLast({ costUsd: r.costUsd, durationMs: r.durationMs, parseError: r.parseError });
      await onTurn();
    } catch (e) { setDraft(msg); alert((e as Error).message); } finally { setBusy(false); }
  }

  function toggleMic() {
    if (listening) { dictation.stop(); setListening(false); setInterim(""); return; }
    setListening(true);
    dictation.start(
      (text, isFinal) => { if (isFinal) { setDraft(draft + (draft ? " " : "") + text); setInterim(""); } else setInterim(text); },
      () => { setListening(false); setInterim(""); },
    );
  }

  const started = messages.length > 0;
  const readOnly = state.gateStatus === "passed";

  return (
    <>
      <div className="panel-head">
        <h2>{rec.meta.name}</h2>
        <span className="muted">stage {stage.id} · {stage.name} · turn {state.turn}{readOnly ? " · gate passed" : ""}</span>
      </div>
      <div className="messages">
        {!started && (
          <div className="kickoff">
            <p>Stage {stage.id} — <strong>{stage.name}</strong>. Gate: <em>{stage.gate}</em>. Talk naturally; Architect extracts what it learns for you to confirm.</p>
            <button className="btn primary" disabled={busy} onClick={() => send(`${KICKOFF[stage.id]} Initiative: "${rec.meta.name}".`)}>Start {stage.name.toLowerCase()}</button>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.role}`}>
            <div className="who">{m.role === "user" ? "Warwick" : "Architect"} <span className="muted">· t{m.turn}{m.proposed ? ` · ${m.proposed} proposed` : ""}</span></div>
            <div className="text">{m.text}</div>
          </div>
        ))}
        {busy && <div className="msg assistant thinking">Architect is thinking…</div>}
        <div ref={bottom} />
      </div>
      {last && (
        <div className="muted small">
          last turn {last.durationMs ? `${(last.durationMs / 1000).toFixed(1)}s` : ""}{last.costUsd ? ` · $${last.costUsd.toFixed(2)} list` : ""}{last.parseError ? ` · ⚠ record-updates block unparseable: ${last.parseError}` : ""}
        </div>
      )}
      <div className="composer">
        <textarea
          value={draft + (interim ? ` ${interim}` : "")}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={started ? "Reply… (Ctrl+Enter to send)" : "Or type to begin…"}
          onKeyDown={(e) => { if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) send(draft); }}
          disabled={busy}
        />
        <div className="composer-actions">
          {dictation.supported && (
            <button className={`btn ${listening ? "rec" : ""}`} onClick={toggleMic} disabled={busy} title="Dictate (browser speech)">{listening ? "■ Stop" : "🎤 Dictate"}</button>
          )}
          <button className="btn primary" onClick={() => send(draft)} disabled={busy || !draft.trim()}>Send</button>
        </div>
      </div>
    </>
  );
}
