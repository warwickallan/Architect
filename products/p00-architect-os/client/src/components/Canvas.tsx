import { useState } from "react";
import { api, ENTITY_TYPES, TYPE_LABEL, type Entity, type EntityType, type Pending, type RecordData } from "../api";

function PendingCard({ p, id, onChange, onDiscuss }: { p: Pending; id: string; onChange: () => Promise<void>; onDiscuss: (t: string) => void }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(p.text);
  const [type, setType] = useState<EntityType>(p.type);
  const [busy, setBusy] = useState(false);

  async function act(fn: () => Promise<unknown>) {
    setBusy(true);
    try { await fn(); await onChange(); } catch (e) { alert((e as Error).message); } finally { setBusy(false); }
  }

  return (
    <div className="card pending">
      <div className="card-head">
        {editing ? (
          <select value={type} onChange={(e) => setType(e.target.value as EntityType)}>
            {ENTITY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        ) : <span className={`pill ${p.type}`}>{p.type}</span>}
        <span className="muted small">proposed t{p.turn}</span>
      </div>
      {editing ? <textarea value={text} onChange={(e) => setText(e.target.value)} /> : <div className="text">{p.text}</div>}
      {(p.links?.length || p.objectives?.length) ? (
        <div className="muted small">{p.links?.length ? `→ ${p.links.join(", ")}` : ""} {p.objectives?.length ? p.objectives.join(" ") : ""}</div>
      ) : null}
      <div className="actions">
        {editing ? (
          <>
            <button className="btn primary" disabled={busy} onClick={() => act(() => api.confirm(id, p.pid, { text, type }))}>Save & confirm</button>
            <button className="btn" disabled={busy} onClick={() => setEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button className="btn primary" disabled={busy} onClick={() => act(() => api.confirm(id, p.pid))}>Confirm</button>
            <button className="btn" disabled={busy} onClick={() => setEditing(true)}>Edit</button>
            <button className="btn" disabled={busy} onClick={() => onDiscuss(p.text)}>Discuss</button>
            <button className="btn danger" disabled={busy} onClick={() => act(() => api.reject(id, p.pid))}>Reject</button>
          </>
        )}
      </div>
    </div>
  );
}

function EntityRow({ e }: { e: Entity }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`entity ${e.status}`} onClick={() => setOpen(!open)}>
      <span className="eid">{e.id}</span> <span className="text">{e.text}</span>
      {open && (
        <div className="muted small detail">
          {e.links?.length ? <div>links: {e.links.join(", ")}</div> : null}
          {e.tags?.length ? <div>tags: {e.tags.join(", ")}</div> : null}
          {e.objectives?.length ? <div>objectives: {e.objectives.join(", ")}</div> : null}
          <div>source: {e.source?.ref ?? ""}{e.source?.turn ? ` · t${e.source.turn}` : ""}</div>
        </div>
      )}
    </div>
  );
}

export function Canvas({ rec, onChange, onDiscuss }: { rec: RecordData; onChange: () => Promise<void>; onDiscuss: (t: string) => void }) {
  const [showRejected, setShowRejected] = useState(false);
  const counts = ENTITY_TYPES.map((t) => rec.entities[t].filter((e) => e.status === "confirmed").length).reduce((a, b) => a + b, 0);
  return (
    <>
      <div className="panel-head">
        <h2>Knowledge canvas</h2>
        <span className="muted">{counts} confirmed · {rec.pending.length} pending</span>
      </div>
      <div className="scroll">
        {rec.pending.length > 0 && (
          <div className="section">
            <h3>I think I learned… <span className="muted small">confirm / edit / discuss / reject</span></h3>
            {rec.pending.map((p) => <PendingCard key={p.pid} p={p} id={rec.meta.id} onChange={onChange} onDiscuss={onDiscuss} />)}
          </div>
        )}
        {ENTITY_TYPES.map((t) => {
          const list = rec.entities[t].filter((e) => e.status === "confirmed" || (showRejected && e.status === "rejected"));
          if (!list.length) return null;
          return (
            <div className="section" key={t}>
              <h3><span className={`pill ${t}`}>{t}</span> {TYPE_LABEL[t]} <span className="muted small">{list.length}</span></h3>
              {list.map((e) => <EntityRow key={e.id} e={e} />)}
            </div>
          );
        })}
        <label className="muted small"><input type="checkbox" checked={showRejected} onChange={(e) => setShowRejected(e.target.checked)} /> show rejected</label>
      </div>
    </>
  );
}
