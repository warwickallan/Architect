import { useCallback, useEffect, useState } from "react";
import { api, type Meta, type RecordData, type StageDef } from "./api";
import { Conversation } from "./components/Conversation";
import { Canvas } from "./components/Canvas";
import { Gate } from "./components/Gate";
import { Artefacts } from "./components/Artefacts";

export function App() {
  const [stages, setStages] = useState<StageDef[]>([]);
  const [products, setProducts] = useState<Meta[]>([]);
  const [current, setCurrent] = useState<string | null>(null);
  const [rec, setRec] = useState<RecordData | null>(null);
  const [stage, setStage] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const [rightTab, setRightTab] = useState<"gate" | "artefacts">("gate");

  const refreshProducts = useCallback(async () => {
    const list = await api.products();
    setProducts(list);
    if (!current && list.length) setCurrent(list[list.length - 1].id);
  }, [current]);

  const reload = useCallback(async () => {
    if (!current) return;
    try {
      const r = await api.record(current);
      setRec(r);
      setStage((s) => (s == null || !r.meta.stages[s] ? r.meta.stage : s));
      setError(null);
    } catch (e) { setError((e as Error).message); }
  }, [current]);

  useEffect(() => { api.stages().then(setStages).catch((e) => setError((e as Error).message)); }, []);
  useEffect(() => { refreshProducts().catch((e) => setError((e as Error).message)); }, [refreshProducts]);
  useEffect(() => { setStage(null); reload(); }, [reload]);

  async function createInitiative() {
    const name = window.prompt("Initiative name (e.g. Tech PMO AI)");
    if (!name) return;
    const slug = window.prompt("Folder id (lowercase slug)", `p0${products.length}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`);
    if (!slug) return;
    const kind = window.confirm("Is this a business product? (Cancel = tool)") ? "business" : "tool";
    try {
      const m = await api.createProduct(slug, name, kind);
      await refreshProducts();
      setCurrent(m.id);
    } catch (e) { setError((e as Error).message); }
  }

  const def = stage != null ? stages.find((s) => s.id === stage) : undefined;
  const st = rec && stage != null ? rec.meta.stages[stage] : undefined;

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">Architect OS <span className="ver">v0.2</span></div>
        <nav className="tabs">
          {stages.map((s) => {
            const ss = rec?.meta.stages[s.id];
            const status = ss?.gateStatus ?? "locked";
            return (
              <button
                key={s.id}
                className={`tab ${status} ${stage === s.id ? "active" : ""}`}
                disabled={!rec || status === "locked"}
                title={status === "locked" ? `Locked — pass the ${stages[s.id - 1]?.gate ?? "previous"} gate first` : `${s.name} · gate: ${s.gate}`}
                onClick={() => setStage(s.id)}
              >
                <span className="tabnum">{s.id}</span> {s.name}
                {status === "passed" && <span className="tick">✔</span>}
                {status === "locked" && <span className="lock">🔒</span>}
              </button>
            );
          })}
        </nav>
        <div className="spacer" />
        <select value={current ?? ""} onChange={(e) => setCurrent(e.target.value)}>
          {products.map((p) => <option key={p.id} value={p.id}>{p.name} · {p.id}</option>)}
        </select>
        <button className="btn" onClick={createInitiative}>+ New initiative</button>
      </header>

      {error && <div className="error">{error}</div>}

      {rec && def && st ? (
        <main className="grid">
          <section className="col conversation">
            <Conversation rec={rec} stage={def} state={st} draft={draft} setDraft={setDraft} onTurn={reload} />
          </section>
          <section className="col canvas">
            <Canvas rec={rec} stage={def.id} onChange={reload} onDiscuss={(t) => setDraft((d) => (d ? d + "\n" : "") + `Let's discuss: ${t}`)} />
          </section>
          <section className="col right">
            <div className="subtabs">
              <button className={rightTab === "gate" ? "active" : ""} onClick={() => setRightTab("gate")}>Gate</button>
              <button className={rightTab === "artefacts" ? "active" : ""} onClick={() => setRightTab("artefacts")}>Artefacts</button>
            </div>
            {rightTab === "gate" ? <Gate rec={rec} stage={def} state={st} onChange={reload} /> : <Artefacts id={rec.meta.id} stage={def.id} version={st.turn + rec.pending.length * 1000} />}
          </section>
        </main>
      ) : (
        <div className="empty">
          <p>No initiative selected.</p>
          <button className="btn primary" onClick={createInitiative}>Create your first initiative</button>
        </div>
      )}
    </div>
  );
}
