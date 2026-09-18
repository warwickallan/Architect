import { useEffect, useState } from "react";
import { marked } from "marked";
import { api } from "../api";

export function Artefacts({ id, stage, version }: { id: string; stage: number; version: number }) {
  const [pack, setPack] = useState<Record<string, string>>({});
  const [file, setFile] = useState<string>("");
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    setFile("");
    api.artefacts(id, stage).then((p) => { setPack(p); setFile(Object.keys(p)[0] ?? ""); setErr(null); }).catch((e) => setErr((e as Error).message));
  }, [id, stage, version]);

  const files = Object.keys(pack);
  return (
    <div className="scroll">
      <div className="panel-head"><h2>Artefacts</h2><span className="muted small">rendered from the record → artefacts/{stage}-…/</span></div>
      {err && <div className="error">{err}</div>}
      <div className="filetabs">
        {files.map((f) => <button key={f} className={f === file ? "active" : ""} onClick={() => setFile(f)}>{f.replace(/\.md$/, "")}</button>)}
      </div>
      {file && pack[file] && <article className="md" dangerouslySetInnerHTML={{ __html: marked.parse(pack[file]) as string }} />}
    </div>
  );
}
