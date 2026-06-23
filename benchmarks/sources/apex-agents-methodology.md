# APEX-Agents-AA ("Agentic Office Work") — Methodology

**Sources:**
- AA evaluation page: https://artificialanalysis.ai/evaluations/apex-agents-aa
- AA methodology page: https://artificialanalysis.ai/methodology/intelligence-benchmarking
- Underlying benchmark (Mercor): https://www.mercor.com/apex/apex-agents-leaderboard/
- Underlying paper: "APEX-Agents," arXiv:2601.14242 (Bertie Vidgen et al., Mercor) — PDF
  saved as `apex-agents-2601.14242.pdf`
- Predecessor paper: "The AI Productivity Index (APEX) / APEX-v1-extended," arXiv:2509.25721

**Retrieved:** 2026-06-23
**Type:** AA methodology webpage + underlying external arXiv paper (Mercor)

## What it measures (요약)
APEX-Agents-AA("Agentic Office Work")는 AI 에이전트가 **실제 사무 환경에서 파일과 업무
도구를 다루며 긴 호흡의 교차 애플리케이션 작업**을 수행할 수 있는지 평가한다. 과제는 투자은행
애널리스트, 경영 컨설턴트, 기업 변호사가 만든 현실적인 전문 서비스 업무다.

## Origin: it is based on an EXTERNAL benchmark
**APEX-Agents-AA is Artificial Analysis's independent implementation of Mercor's open-sourced
APEX-Agents benchmark.** The underlying benchmark and its paper come from Mercor (the "AI
Productivity Index" / APEX family), not from Artificial Analysis.
- Underlying benchmark paper: **arXiv:2601.14242, "APEX-Agents"** (24 authors incl. Bertie
  Vidgen, Brendan Foody, Osvald Nitski; Mercor). 480 tasks; Gemini 3 Flash (Thinking=High)
  top at 24.0% in the original paper. Mercor open-sourced the benchmark and **Archipelago**,
  their execution/evaluation infrastructure.
- Predecessor: **arXiv:2509.25721, "The AI Productivity Index (APEX) / APEX-v1-extended."**

## Artificial Analysis's implementation
- **Tasks evaluated:** **452** tasks from the public **480**-task release.
- **Exclusions:** 2 worlds with external runtime/API dependencies — Investment Banking
  World 244 and World 246.
- **Domains:** investment banking, management consulting, and corporate law (33 distinct
  "worlds" in the full dataset).
- **Harness:** Artificial Analysis's own open-source agentic harness **Stirrup**
  (GitHub: ArtificialAnalysis/Stirrup), with a **200-turn cap per task**.
- **Repeats:** each task run with **3 repeats**.
- **Scoring:** **pass@1** — a repeat passes only if **all** binary rubric items are
  satisfied; the leaderboard score is the average pass rate across repeats. Headline metric
  is the share of tasks where a model fully satisfies the rubric (not the mean rubric score).
- **Rubrics:** each task paired with 1–10 binary success/failure criteria (mean 4.06),
  gold-standard outputs, and workflow metadata; graded by an LLM grader.

## Key facts
- NOT an Artificial Analysis original benchmark — it is AA's reproduction of **Mercor's
  APEX-Agents** (arXiv:2601.14242), run on AA's Stirrup harness.
- 452 of 480 tasks; investment banking / consulting / law; 200-turn cap; 3 repeats.
- Strict pass@1: all rubric items must pass for a task to count as a success.
- Original Mercor leaderboard reported low absolute scores (top ~24%), reflecting difficulty.
