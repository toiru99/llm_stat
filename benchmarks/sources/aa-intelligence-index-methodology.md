# Artificial Analysis Intelligence Index — Methodology

**Source:** https://artificialanalysis.ai/methodology/intelligence-benchmarking
**Also see:** https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index
**Retrieved:** 2026-06-23
**Type:** Official methodology webpage (no standalone academic paper — Artificial Analysis's own composite index)

> NOTE: This single methodology page (`/methodology/intelligence-benchmarking`) is the
> canonical source for the Intelligence Index, the Omniscience Index, AA-LCR, and the
> APEX-Agents-AA implementation. Separate markdown files in this folder
> (`aa-omniscience-index-methodology.md`, `aa-lcr-methodology.md`,
> `apex-agents-methodology.md`) extract the relevant portions for each topic.

## What it measures (요약)
Artificial Analysis Intelligence Index는 여러 어려운 평가를 가중 평균해 LLM의 종합
지능(추론·지식·수학·코딩·에이전트 능력)을 하나의 점수로 나타내는 **복합 지수(composite
index)**다. 영어·텍스트 전용 평가 모음이며, 모델 간 상대 비교의 기준 지표로 쓰인다.

## Version and scope
- Current version: **Intelligence Index v4.1** (current as of June 2026).
- "Text-only, English language evaluation suite."
- Synthesizes **nine evaluations** across reasoning, knowledge, mathematics, and programming.

## Component evaluations and weighting (v4.1)
The Index is a weighted average across four categories:

| Category | Weight | Evaluations (weight within Index) |
|----------|--------|-----------------------------------|
| **Agents** | 34% | GDPval-AA v2 (20%), τ³-Banking (14%) |
| **Coding** | 24% | Terminal-Bench v2.1 (16%), SciCode (8%) |
| **General** | 18% | AA-LCR (6%), AA-Omniscience Accuracy (8%), AA-Omniscience Non-Hallucination (4%) |
| **Scientific Reasoning** | 24% | HLE (12%), GPQA Diamond (6%), CritPt (6%) |

(AA-Omniscience contributes 12% total, split 2:1 between Accuracy 8% and Non-Hallucination 4%.)

## Scoring methodology
- **pass@1 scoring** across all evaluations — a model must produce the correct answer on
  its first attempt. For evaluations with multiple repeats, pass@1 is calculated by
  aggregating results across all attempts.
- **Temperature:** 0 for non-reasoning models; 0.6 for reasoning models.
- **Max output tokens:** 16,384 for standard models; maximum allowed for reasoning models.
- **Confidence interval:** 95% CI for the Intelligence Index estimated at less than ±1%,
  based on experiments with >10 repeats.

## Version history (selected)
- **v4.1** (June 2026–current): GDPval-AA upgraded to v2; Terminal-Bench Hard replaced with
  Terminal-Bench v2.1; τ²-Bench replaced with τ³-Banking; IFBench removed; weights
  rebalanced toward agents.
- **v4.0.x** (Jan–June 2026): grader model updates (GDPval-AA, Omniscience), Elo re-anchoring,
  Terminal-Bench Hard refined to 44 tasks.
- **v4.0** (January 2026): added GDPval-AA, AA-Omniscience, CritPt; removed MMLU-Pro,
  LiveCodeBench, AIME 2025.
- **v3.0** (September 2025): added Terminal-Bench Hard, τ²-Bench Telecom.
- **v2.2** (August 2025): added AA-LCR.
- **v2.1** (August 2025): added IFBench and AIME 2025; removed MATH-500.
- **v1.0–v1.3** (2024–early 2025): initial iterations (GPQA, HLE, SciCode added progressively).

## Key facts
- It is a **composite index**, not a single benchmark; component set and weights change
  across versions.
- v4.1 aggregates 9 evaluations across 4 categories (Agents, Coding, General, Scientific
  Reasoning).
- Uses pass@1 with version-specific temperature settings; CI < ±1%.
- AA-Omniscience appears as two distinct components (Accuracy + Non-Hallucination Rate).
