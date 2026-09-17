/** Extract the ```record-updates block the skill appends to every reply. */
import type { EntityType, GateCondition, GateState } from "./record.js";

export interface RecordUpdates {
  proposed: Array<{ type: EntityType; text: string; links?: string[]; tags?: string[]; objectives?: string[]; [k: string]: unknown }>;
  gate?: Partial<Record<GateCondition, GateState>>;
  unlock?: string[];
  complete?: boolean;
}

const BLOCK = /```record-updates\s*\n([\s\S]*?)```/;

export function splitReply(raw: string): { reply: string; updates: RecordUpdates; parseError?: string } {
  const m = raw.match(BLOCK);
  const empty: RecordUpdates = { proposed: [] };
  if (!m) return { reply: raw.trim(), updates: empty };
  const reply = raw.replace(BLOCK, "").trim();
  try {
    const parsed = JSON.parse(m[1]) as Partial<RecordUpdates>;
    return {
      reply,
      updates: {
        proposed: Array.isArray(parsed.proposed) ? parsed.proposed : [],
        gate: parsed.gate,
        unlock: Array.isArray(parsed.unlock) ? parsed.unlock : [],
        complete: Boolean(parsed.complete),
      },
    };
  } catch (e) {
    return { reply, updates: empty, parseError: (e as Error).message };
  }
}
