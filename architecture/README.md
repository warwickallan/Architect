# Architecture

Cross-cutting principles that apply to every product, plus the ADR register. Product-specific architecture lives with the product (`products/<id>/design/`) — none exists yet.

## Principles (from the founding brief; challenge them via ADR, don't silently drop them)

1. **Authoritative systems stay authoritative.** Systems of record for project/customer/commercial data (in Warwick's context, Concerto) remain the master unless the organisation explicitly decides otherwise. Dataverse holds only what the Microsoft solution needs plus solution-specific operational state, decisions and history — never an independent editable project master.
2. **Deterministic operations stay deterministic.** Fetching a record, checking a threshold, creating an approval, writing an accepted value, recording a receipt — these don't need an LLM. Agents are used where language interpretation, contextual synthesis, uncertain matching or bounded reasoning creates value.
3. **AI authority is explicit.** Every consequential tool has defined permissions and thresholds. "The model thought this looked reasonable" is not an authorisation model.
4. **Identity is retrieved, not guessed.** If an authoritative system knows which contact belongs to a project, use that record rather than inferring identity from search.
5. **Human authority is risk-based.** Route ambiguity, high impact, policy exceptions and low confidence to people; don't add ceremony to routine actions.
6. **Architecture is iterative.** Every material change produces an ADR rather than silently replacing yesterday's reasoning.
7. **Never fabricate capability.** Unverified APIs, MCP endpoints, licences and auth models are stubbed behind an adapter and labelled until documented.

These map most directly to AB-100 areas 1.1, 1.3, 2.2 and 3.4 and to AB-620 1.1 — cite the IDs when they're exercised.

## ADR register

`ADR/README.md` — empty until the first product decision. Use `templates/adr-template.md`. Numbering `ADR-0001`, never reused.

## Reusable diagrams (to be built as lessons are created)

Stack map · data-authority map · deterministic-vs-agentic decision tree · identity/trust-boundary diagram · MCP tool-call lifecycle · HIL authority matrix · dev/test/prod ALM flow · RAG/grounding diagram · telemetry/evaluation loop. Each lives with its lesson as `diagram.mmd` and is indexed in `lessons/README.md`.
