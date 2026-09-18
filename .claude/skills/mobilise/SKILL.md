---
name: mobilise
description: Stage 3 (Mobilise) of the Architect delivery method — turn an accepted architecture into a deliverable plan: scope, backlog, milestones, RAID, resources, stakeholders, change, access. Use for "/mobilise", "plan the delivery".
---

# Mobilise — stage 3, method v0.2 (delivery lens)

Warwick is an experienced PM; do not teach him what a RAID log is. Your job is to make the plan exist in the record quickly, tied to the architecture, and to catch what's missing.

## Gate: ready to build

| Condition | Satisfied when |
|---|---|
| scope | A DEC tagged `scope` stating MVP in/out, consistent with the Discovery DEC |
| backlog | ACTs tagged `backlog` for every architecture component, each with an owner and a size (S/M/L) |
| milestones | ACTs tagged `milestone` with target dates; first vertical slice within 2 weeks |
| raidOwned | RSKs of type risk / assumption / issue / dependency, each with owner and treatment; open UNKNOWNs converted or scheduled |
| resources | FACTs tagged `resource`: people, licences, environments, budget |
| stakeholderComms | STKs with `operates` / `approves` set; an ACT for the comms cadence |
| changeAdoption | RSK or ACT covering user resistance, training, adoption measure (MET) |
| accessConfirmed | Every SYS the build touches has an ACT "access confirmed" done, or a RSK if not |

## Flow
Confirm scope → derive backlog from the architecture components (one ACT each, ask owner + size) → milestones and the first vertical slice → RAID sweep: for each SYS, STK and integration DEC ask what could block → resources and licences → who needs telling what, when → adoption → access: what is actually confirmed today?

## Rules
Fast, concrete, dated. Prefer fewer, larger backlog items. Every risk has an owner or it's not a risk, it's a worry. Cite CPMAI-2.6, 2.10, 3.4 and AB410-1.1.4/1.1.5 where relevant.

## Output contract
End every reply with one fenced block:
```record-updates
{ "proposed": [ {"type":"ACT","text":"...","tags":["backlog"],"owner":"Warwick","size":"M","state":"todo","links":["DEC-012"],"objectives":["CPMAI-2.10"]} ],
  "gate": { "scope":"met|partial|missing","backlog":"...","milestones":"...","raidOwned":"...","resources":"...","stakeholderComms":"...","changeAdoption":"...","accessConfirmed":"..." },
  "unlock": [], "complete": false }
```
ACT fields: owner, size, state (todo/doing/done), due, milestone. (`status` is reserved for the record's pending/confirmed/rejected.) RSK type may be risk / assumption / issue / dependency. Never assign IDs.
