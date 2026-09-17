import { useEffect, useRef, useState } from "react";
import { api, type RecordData } from "../api";
import { createWebSpeechAdapter } from "../input/dictation";

const dictation = createWebSpeechAdapter();

export function Conversation({ rec, draft, setDraft, onTurn }: { rec: RecordData; draft: string; setDraft: (s: string) => void; onTurn: () => Promise<void> }) {
  const [busy, setBusy] = useState(false);
  const [listening, setListening] = useState(false);
  const [interim, setInterim] = useState("");
  const [last, setLast] = useState<{ costUsd?: number; durationMs?: number; parseError?: string } | null>(null);
  const bottom = useRef<HTMLDivElement>(null);

  useEffect(() => { bottom.current?.scrollIntoView({ behavior: "smooth" }); }, [rec.conversation.length, busy]);

  async function send(text: string) {
    const msg = text.trim();
    if (!msg || busy) return;
    setBusy(true);
    setDraft("");
    try {
      const r = await api.chat(rec.meta.id, msg);
      setLast({ costUsd: r.costUsd, durationMs: r.durationMs, parseError: r.parseError });
      await onTurn();
    } catch (e) {
      setDraft(msg);
      alert((e as Error).message);
    } finally {
      setBusy(false);
    }
  }

  function toggleMic() {
    if (listening) { dictation.stop(); setListening(false); setInterim(""); return; }
    setListening(true);
    dictation.start(
      (text, isFinal) => { if (isFinal) { setDraft(draft + (draft ? " " : "") + text); setInterim(""); } else setInterim(text); },
      () => { setListening(false); setInterim(""); },
    );
  }

  const started = rec.conversation.length > 0;

  return (
    <>
      <div className="panel-head">
        <h2>{rec.meta.name}</h2>
        <span className="muted">Stage {rec.meta.stage} · {rec.meta.stageName} · turn {rec.meta.turn ?? 0}</span>
      </div>
      <div className="messages">
        {!started && (
          <div className="kickoff">
            <p>No interview yet. Architect will interview you about this initiative — talk naturally; it extracts what it learns for you to confirm.</p>
            <button className="btn primary" disabled={busy} onClick={() => send(`Begin the discovery interview for "${rec.meta.name}". Introduce yourself in one sentence and ask your first question.`)}>Start interview</button>
          </div>
        )}
        {rec.conversation.map((m, i) => (
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
