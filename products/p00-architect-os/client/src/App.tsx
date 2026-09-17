import { useCallback, useEffect, useState } from "react";
import { api, type Meta, type RecordData } from "./api";
import { Conversation } from "./components/Conversation";
import { Canvas } from "./components/Canvas";
import { Gate } from "./components/Gate";
import { Artefacts } from "./components/Artefacts";

export function App() {
  const [products, setProducts] = useState<Meta[]>([]);
  const [current, setCurrent] = useState<string | null>(null);
  const [rec, setRec] = useState<RecordData | null>(null);
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
    try { setRec(await api.record(current)); setError(null); } catch (e) { setError((e as Error).message); }
  }, [current]);

  useEffect(() => { refreshProducts().catch((e) => setError((e as Error).message)); }, [refreshProducts]);
  useEffect(() => { reload(); }, [reload]);

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

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">Architect OS <span className="ver">v0.1</span></div>
        <nav className="tabs"><button className="tab active">Discovery</button></nav>
        <div className="spacer" />
        <select value={current ?? ""} onChange={(e) => setCurrent(e.target.value)}>
          {products.map((p) => <option key={p.id} value={p.id}>{p.name} · {p.id}</option>)}
        </select>
        <button className="btn" onClick={createInitiative}>+ New initiative</button>
      </header>

      {error && <div className="error">{error}</div>}

      {rec ? (
        <main className="grid">
          <section className="col conversation">
            <Conversation rec={rec} draft={draft} setDraft={setDraft} onTurn={reload} />
          </section>
          <section className="col canvas">
            <Canvas rec={rec} onChange={reload} onDiscuss={(t) => setDraft((d) => (d ? d + "\n" : "") + `Let's discuss: ${t}`)} />
          </section>
          <section className="col right">
            <div className="subtabs">
              <button className={rightTab === "gate" ? "active" : ""} onClick={() => setRightTab("gate")}>Gate</button>
              <button className={rightTab === "artefacts" ? "active" : ""} onClick={() => setRightTab("artefacts")}>Artefacts</button>
            </div>
            {rightTab === "gate" ? <Gate rec={rec} onChange={reload} /> : <Artefacts id={rec.meta.id} version={rec.meta.turn ?? 0} />}
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
