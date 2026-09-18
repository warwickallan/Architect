import { api, ENTITY_TYPES, TYPE_LABEL, type RecordData, type StageDef, type StageState } from "../api";

export function Gate({ rec, stage, state, onChange }: { rec: RecordData; stage: StageDef; state: StageState; onChange: () => Promise<void> }) {
  const keys = Object.keys(stage.conditions);
  const met = keys.filter((c) => state.gate[c] === "met").length;
  const allMet = met === keys.length;

  async function pass(override: boolean) {
    const q = override
      ? `Override: pass "${stage.gate}" with ${keys.length - met} condition(s) unmet? This is recorded on the record as an override.`
      : `Pass "${stage.gate}" and open stage ${stage.id + 1}?`;
    if (!window.confirm(q)) return;
    try { await api.passGate(rec.meta.id, stage.id, override); await onChange(); } catch (e) { alert((e as Error).message); }
  }

  return (
    <div className="scroll">
      <div className="panel-head">
        <h2>{stage.gate}</h2>
        <span className={`pill status ${state.gateStatus}`}>{state.gateStatus}{state.override ? " (override)" : ""}</span>
      </div>
      <p className="muted small">Evidence conditions for stage {stage.id}, as assessed after the last turn — not a percentage.</p>
      <ul className="gate">
        {keys.map((c) => (
          <li key={c} className={state.gate[c] ?? "unknown"}>
            <span className="dot" /> {stage.conditions[c]} <span className="muted small">{state.gate[c] ?? "not assessed"}</span>
          </li>
        ))}
      </ul>
      <div className="muted small">{met}/{keys.length} met{state.complete ? " · assistant reports stage complete" : ""}</div>
      {state.gateStatus === "open" && (
        <div className="actions">
          <button className="btn primary" disabled={!allMet} title={allMet ? "Pass the gate" : "All conditions must be met"} onClick={() => pass(false)}>Pass gate</button>
          {!allMet && <button className="btn" onClick={() => pass(true)} title="Demo / judgement override — recorded">Override…</button>}
        </div>
      )}

      <h3>Record</h3>
      <table className="counts">
        <tbody>
          {ENTITY_TYPES.map((t) => {
            const c = rec.entities[t].filter((e) => e.status === "confirmed").length;
            if (!c) return null;
            return <tr key={t}><td><span className={`pill ${t}`}>{t}</span></td><td>{TYPE_LABEL[t]}</td><td className="num">{c}</td></tr>;
          })}
        </tbody>
      </table>

      {rec.meta.unlocked?.length ? (
        <>
          <h3>Concepts unlocked</h3>
          <ul className="unlocked">{rec.meta.unlocked.map((u) => <li key={u}>{u} <span className="muted small">lesson pending</span></li>)}</ul>
        </>
      ) : null}
    </div>
  );
}
