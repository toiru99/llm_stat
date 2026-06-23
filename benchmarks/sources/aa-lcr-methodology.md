# AA-LCR (Artificial Analysis Long Context Reasoning) — Methodology

**Source:** https://artificialanalysis.ai/methodology/intelligence-benchmarking
**Retrieved:** 2026-06-23
**Type:** Official methodology webpage (no standalone academic paper — Artificial Analysis's own benchmark)

## What it measures (요약)
AA-LCR는 **긴 문맥(long context) 추론 능력**을 평가하는 벤치마크다. 여러 개의 긴 문서
(질문당 약 10만 토큰)에 걸쳐 정보를 종합·추론해야 답할 수 있는 어려운 문제 100개로 구성된다.
단순 검색이 아니라 문서 전반을 가로지르는 추론을 요구한다.

## Details
- **Questions:** 100 hard text-based questions.
- **Document categories:** 7 — Company Reports, Industry Reports, Government Consultations,
  Academia, Legal, Marketing Materials, and Survey Reports.
- **Context length:** each question requires **~100k tokens of input** (measured using the
  `cl100k_base` tokenizer).
- **Model requirement:** models must support a **minimum 128K context window** to score on
  this benchmark.
- **Scoring:** model responses evaluated using **Qwen3 235B A22B 2507 Non-Reasoning as an
  equality checker**, with **pass@1 scoring**.

## Relationship to the Intelligence Index
AA-LCR is part of the **General** category and is weighted at **6%** of Intelligence Index
v4.1. It was first added in **v2.2 (August 2025)**.

## Key facts
- 100 questions, 7 document categories, ~100k tokens/question.
- Requires ≥128K context window; tokens counted with cl100k_base.
- Graded via an LLM equality checker (Qwen3 235B A22B 2507 Non-Reasoning), pass@1.
- Contributes 6% to Intelligence Index v4.1; no separate published paper.
