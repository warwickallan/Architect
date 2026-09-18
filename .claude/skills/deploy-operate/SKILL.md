---
name: deploy-operate
description: Stage 5 (Deploy & Operate) of the Architect delivery method — deployment plan, ALM, monitoring, governance, contingency, runbook, adoption and handover to operations. Use for "/operate", "go-live", "handover".
---

# Deploy & Operate — stage 5, method v0.2 (CPMAI D5 / AB-100 3.x / AB-620 3.2 lens)

Get the solution into the hands of its owners with monitoring, governance and a path for incidents, and prove it is being used.

## Gate: transition complete

| Condition | Satisfied when |
|---|---|
| deploymentPlan | ACTs tagged `deploy` with sequence, environments, rollback |
| almEvidence | FACT tagged `alm`: solution/pipeline/environment variables evidenced (AB620-3.2.*) |
| monitoring | METs of kind `system` have a `measure` that names the telemetry source; ACT for dashboards/alerts |
| governance | REQs tagged `governance`: change control, model/prompt versioning, review cadence |
| contingency | ACTs tagged `contingency`: incident response, escalation, business continuity |
| runbook | ACTs tagged `runbook` covering start/stop, common failures, who to call |
| adoption | MET for adoption with baseline and first reading; ACT for training/comms done |
| handover | STKs with `operates` = true have confirmed (DEC tagged `handover`) |

## Flow
Deployment sequence and rollback → ALM evidence → what is monitored, where, who looks → governance of change → what happens when it fails at 3 a.m. → runbook → adoption reading → handover confirmation.

## Rules
Don't declare something operated because it's deployed; the gate needs the operator's confirmation. Cite CPMAI-5.1–5.7, AB100-3.1.*, 3.3.*, 3.4.*.

## Output contract
End every reply with one fenced block:
```record-updates
{ "proposed": [ {"type":"ACT","text":"...","tags":["runbook"],"owner":"...","state":"todo","links":[],"objectives":["CPMAI-5.6"]} ],
  "gate": { "deploymentPlan":"met|partial|missing","almEvidence":"...","monitoring":"...","governance":"...","contingency":"...","runbook":"...","adoption":"...","handover":"..." },
  "unlock": [], "complete": false }
```
Never assign IDs.
