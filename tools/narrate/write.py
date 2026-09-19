"""Write one chapter script from the plan. Usage:
  py tools/narrate/write.py <exam> <course-slug> <chapter number> [model]
Reads PLAN.md (chapter row), the objective register (task text + enablers for the chapter's IDs),
the source notes, and the named transcript lectures; asks the model for a FORMAT.md-shaped script."""
import re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from llm import ask

ROOT = Path(r"C:\Architect")
exam, slug, num = sys.argv[1], sys.argv[2], int(sys.argv[3])
model = sys.argv[4] if len(sys.argv) > 4 else "opus"
base = ROOT / "Transcripts" / exam / "audio" / slug
plan = (base / "PLAN.md").read_text(encoding="utf-8")
fmt = (ROOT / "tools" / "narrate" / "FORMAT.md").read_text(encoding="utf-8")
reg = {"CPMAI": "cpmai", "AB-100": "ab-100", "AB-620": "ab-620", "AB-410": "ab-410"}[exam]
register = (ROOT / "curriculum" / "objectives" / f"{reg}.md").read_text(encoding="utf-8")

# chapter row from the plan table
row = next((l for l in plan.splitlines() if re.match(rf"^\|\s*{num}\s*\|", l)), None)
if not row:
    sys.exit(f"chapter {num} not in PLAN.md")
cells = [c.strip() for c in row.strip("|").split("|")]
title, tasks, sources, notes = cells[1], cells[2], cells[3], cells[4]

# expand task IDs (CPMAI-2.1, 5.1–5.7 ranges) into register rows
ids = set()
prefix = exam.replace("-", "")  # CPMAI, AB100, …
for m in re.finditer(r"(\d+)\.(\d+)(?:[–-](\d+)\.(\d+))?", tasks):
    a, b, c, d = m.groups()
    if c:
        for k in range(int(b), int(d) + 1): ids.add(f"{a}.{k}")
    else:
        ids.add(f"{a}.{b}")
task_rows = [l for l in register.splitlines() if any(f"`{prefix}-{i}`" in l for i in ids)]

# transcript lectures named in the sources column (3-digit numbers)
src_dir = next((d for d in (ROOT / "Transcripts" / exam).iterdir() if d.is_dir() and d.name.startswith("Udemy")), None)
lectures = []
for n in re.findall(r"\b(\d{3})\b", sources):
    for f in (src_dir.glob(f"{n} - *.txt") if src_dir else []):
        body = re.sub(r"^# .*\n", "", f.read_text(encoding="utf-8"), flags=re.M).strip()
        lectures.append(f"<<<LECTURE {f.stem}>>>\n{body}")
notes_file = ROOT / "Transcripts" / exam / "sources" / "pmi-reference-notes.md"
ref_notes = notes_file.read_text(encoding="utf-8") if notes_file.exists() else ""
prev = ""
prev_files = sorted(base.glob(f"{num-1:02d} - *.md"))
if prev_files:
    prev = prev_files[0].read_text(encoding="utf-8")[:3000]

SYSTEM = f"""You write narrated audio-course chapters for a UK project professional (Warwick) preparing for the PMI-CPMAI
exam while running real AI initiatives. Follow the chapter format below exactly; it is the same for every chapter.
Facts come from the objective register (tasks and enablers) and the PMI reference notes; the course transcript is
noisy auto-captioning (mis-heard terms, heavy accent) and is only for structure, examples and emphasis — never quote
it, never trust a term from it over the register. Never invent statistics or named regulations that are not in the
sources. British English, spoken register, second person, short sentences that read aloud well. No headings or bullet
markers in the body text — the narrator will read it straight; use spoken cues instead ("First… Second…").
Output the script only, as Markdown with a YAML header:
---
chapter: {num}
title: "{title}"
exam: {exam}
tasks: [{', '.join(sorted(f'{prefix}-{i}' for i in ids))}]
sources: [{sources.replace('"', '')}]
status: draft
---
then the script text. Aim for 1,400–2,000 words.

{fmt}"""

content = f"""# CHAPTER TO WRITE
Number: {num}
Title: {title}
ECO tasks: {tasks}
Plan notes: {notes}

# OBJECTIVE REGISTER ROWS (primary source)
{chr(10).join(task_rows) or '(orientation chapter — use the exam facts and methodology description below)'}

# EXAM FACTS (from the ECO)
PMI-CPMAI replaced CPMAI v7 in September 2025. Five domains: Support Responsible and Trustworthy AI Efforts 15%; Identify Business Needs and Solutions 26%; Identify Data Needs 26%; Manage AI Model Development and Evaluation 16%; Operationalize AI Solution 17%. 120 questions (100 scored, 20 unscored pretest), 160 minutes, no scheduled breaks. Completion of PMI's Exam Prep Course is required before scheduling. Up to three attempts in a 12-month eligibility window. Maintain with 30 PDUs every three years. Methodology: six iterative phases — Business Understanding, Data Understanding, Data Preparation, Model Development, Model Evaluation, Model Operationalisation — derived from CRISP-DM with agile and governance added; developed by Cognilytica, acquired by PMI in September 2024; job-task analysis by DACUM workshop, May 2025.

# PMI REFERENCE NOTES
{ref_notes}

# PREVIOUS CHAPTER (opening, for continuity of voice)
{prev or '(none)'}

# COURSE TRANSCRIPT EXCERPTS (structure/examples only; captions are unreliable)
{chr(10).join(lectures) or '(none for this chapter)'}
"""

reply = ask(SYSTEM, content, model=model, timeout=900, tag=f"write:{exam}:{num}")
safe = re.sub(r'[<>:"/\\|?*]', "_", title)
out = base / f"{num:02d} - {safe}.md"
out.write_text(reply.strip() + "\n", encoding="utf-8")
words = len(re.sub(r"^---[\s\S]*?---", "", reply).split())
print(f"wrote {out.name}: {words} words")
