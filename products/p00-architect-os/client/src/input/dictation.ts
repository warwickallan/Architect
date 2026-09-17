/**
 * Voice input adapter (ADR-0006). Swap the implementation here; callers only see this interface.
 */
export interface DictationAdapter {
  supported: boolean;
  start(onText: (text: string, isFinal: boolean) => void, onEnd: () => void): void;
  stop(): void;
}

// Minimal typing for the Web Speech API (not in lib.dom for all TS targets).
interface SRResultAlt { transcript: string }
interface SRResult { isFinal: boolean; 0: SRResultAlt; length: number }
interface SREvent { resultIndex: number; results: ArrayLike<SRResult> }
interface SRInstance {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((ev: SREvent) => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
  start(): void;
  stop(): void;
}
type SRCtor = new () => SRInstance;

function getCtor(): SRCtor | undefined {
  const w = window as unknown as { SpeechRecognition?: SRCtor; webkitSpeechRecognition?: SRCtor };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition;
}

export function createWebSpeechAdapter(lang = "en-GB"): DictationAdapter {
  const Ctor = getCtor();
  let rec: SRInstance | null = null;
  return {
    supported: Boolean(Ctor),
    start(onText, onEnd) {
      if (!Ctor) return;
      rec = new Ctor();
      rec.lang = lang;
      rec.continuous = true;
      rec.interimResults = true;
      rec.onresult = (ev) => {
        let interim = "";
        for (let i = ev.resultIndex; i < ev.results.length; i++) {
          const r = ev.results[i];
          if (r.isFinal) onText(r[0].transcript, true);
          else interim += r[0].transcript;
        }
        if (interim) onText(interim, false);
      };
      rec.onend = () => onEnd();
      rec.onerror = () => onEnd();
      rec.start();
    },
    stop() {
      rec?.stop();
      rec = null;
    },
  };
}
