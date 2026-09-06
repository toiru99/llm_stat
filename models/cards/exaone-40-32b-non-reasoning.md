---
type: Model
title: EXAONE 4.0 32B (Non-reasoning)
creator: LG AI Research
license: Open
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: current
size_class: Small
params_b: 32
is_reasoning: false
radar:
  knowledge: { s: 25.4, z: -0.75, r: 38.8, estimated: false }  # 전문 지식
  reasoning: { s: 22.8, z: -0.59, r: 41.2, estimated: false }  # 추론
  coding: { s: 3.0, z: -1.02, r: 34.7, estimated: false }  # 코딩
  agentic: { s: 3.5, z: -1.3, r: 30.5, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.38, r: 44.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 26.8, z: -0.68, r: 39.7, estimated: true }  # 긴문맥
  instruction: { s: 29.6, z: -0.97, r: 35.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — EXAONE 4.0 32B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# EXAONE 4.0 32B (Non-reasoning)

LG AI Research · Open · Small(32B) · 컨텍스트 131k · 종합지능 **1.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.8 | -0.75 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 63.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 41.2 | -0.59 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 63.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 34.7 | -1.02 | 실측 | [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 30.5 | -1.3 | 실측 | [[tau2-bench]] 4.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 44.3 | -0.38 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.7 | -0.68 | 추정 | (추정) |
| 지시 따르기 | 35.5 | -0.97 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
