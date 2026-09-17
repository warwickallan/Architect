# Visual lesson template (storyboard + diagram standard)

Used for `storyboard.md` and `diagram.mmd` inside a lesson package. The goal is one reusable mental model per lesson that Warwick can redraw from memory.

## diagram.mmd standard

- Mermaid; `flowchart`, `sequenceDiagram` or `stateDiagram` — pick the one that shows the *mechanism*.
- ≤ 12 nodes. If more are needed, it's two diagrams.
- Label trust boundaries and data authority explicitly (subgraphs: "Authoritative", "Projection", "Agent", "Human").
- Deterministic steps in rectangles; agentic steps in hexagons `{{ }}`; human decisions in diamonds.
- Title comment on line 1: `%% L<nnn> <name> — objectives <IDs>`.

## storyboard.md structure

| Shot | Visual (what appears / animates) | Narration cue | Duration |
|---|---|---|---|
| 1 | Empty canvas + the question | "Here's the problem…" | 20s |
| 2 | First element of the model | | 30s |
| … | Build up one element at a time | | |
| n-1 | Alternative overlaid, then removed | "You could instead…" | 45s |
| n | Full model, Architect example highlighted | "In Architect this is…" | 40s |

Total 5–10 minutes. Storyboards must not depend on private data — they are the publishable derivative.

## Mental-model library (build once, reuse everywhere)

Stack map · data-authority map · deterministic-vs-agentic tree · identity/trust boundary · MCP tool-call lifecycle · HIL authority matrix · ALM flow · RAG/grounding · telemetry/evaluation loop.
