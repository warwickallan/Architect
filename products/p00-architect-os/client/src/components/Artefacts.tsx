import { useEffect, useState } from "react";
import { marked } from "marked";
import { api } from "../api";

export function Artefacts({ id, version }: { id: string; version: number }) {
  const [pack, setPack] = useState<Record<string, string>>({});
  const [file, setFile] = useState<string>("");
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    api.artefacts(id).then((p) => { setPack(p); setFile((f) => f || Object.keys(p)[0] || ""); setErr(null); }).catch((e) => setErr((e as Error).message));
  }, [id, version]);

  const files = Object.keys(pack);
  return (
    <div className="scroll">
      <div className="panel-head"><h2>Artefacts</h2><span className="muted small">rendered from the record → discovery/</span></div>
      {err && <div className="error">{err}</div>}
      <div className="filetabs">
        {files.map((f) => <button key={f} className={f === file ? "active" : ""} onClick={() => setFile(f)}>{f.replace(/\.md$/, "")}</button>)}
      </div>
      {file && <article className="md" dangerouslySetInnerHTML={{ __html: marked.parse(pack[file]) as string }} />}
    </div>
  );
}
