import { api, ENTITY_TYPES, GATE_CONDITIONS, GATE_LABEL, TYPE_LABEL, type RecordData } from "../api";

export function Gate({ rec, onChange }: { rec: RecordData; onChange: () => Promise<void> }) {
  const g = rec.meta.gateAssessment ?? {};
  const met = GATE_CONDITIONS.filter((c) => g[c] === "met").length;
  return (
    <div className="scroll">
      <div className="panel-head">
        <h2>{rec.meta.gate}</h2>
        <span className={`pill status ${rec.meta.gateStatus}`}>{rec.meta.gateStatus}</span>
      </div>
      <p className="muted small">Evidence conditions, as assessed by the interviewer after the last turn — not a percentage.</p>
      <ul className="gate">
        {GATE_CONDITIONS.map((c) => (
          <li key={c} className={g[c] ?? "unknown"}>
            <span className="dot" /> {GATE_LABEL[c]} <span className="muted small">{g[c] ?? "not assessed"}</span>
          </li>
        ))}
      </ul>
      <div className="muted small">{met}/{GATE_CONDITIONS.length} met{rec.meta.complete ? " · interviewer reports discovery complete" : ""}</div>
      {rec.meta.gateStatus === "open" && (
        <button
          className="btn primary"
          disabled={met < GATE_CONDITIONS.length}
          title={met < GATE_CONDITIONS.length ? "All conditions must be met" : "Record the Discovery Decision"}
          onClick={async () => { if (window.confirm("Mark the Discovery Decision gate as passed? Record a DEC first.")) { await api.passGate(rec.meta.id); await onChange(); } }}
        >
          Pass gate
        </button>
      )}

      <h3>Record</h3>
      <table className="counts">
        <tbody>
          {ENTITY_TYPES.map((t) => {
            const c = rec.entities[t].filter((e) => e.status === "confirmed").length;
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
