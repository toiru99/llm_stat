---
type: Model
title: Llama Nemotron Super 49B v1.5
creator: NVIDIA
license: Open
intelligence_index: 12.0
price_blended_usd_1m: None
output_speed_tps: 81.0
context_window: 128000
status: current
size_class: Medium
params_b: 49
is_reasoning: true
radar:
  knowledge: { s: 35.9, z: -0.25, r: 46.3, estimated: false }  # 전문 지식
  reasoning: { s: 29.6, z: -0.24, r: 46.5, estimated: false }  # 추론
  coding: { s: 41.4, z: -0.23, r: 46.6, estimated: false }  # 코딩
  agentic: { s: 17.9, z: -0.71, r: 39.3, estimated: false }  # 에이전트
  trust: { s: 26.4, z: -0.08, r: 48.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 44.7, z: -0.14, r: 47.9, estimated: false }  # 긴문맥
  instruction: { s: 35.2, z: -0.74, r: 38.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama Nemotron Super 49B v1.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-27
timestamp: 2026-07-27T00:00:00Z
---

# Llama Nemotron Super 49B v1.5

NVIDIA · Open · Medium(49B) · 컨텍스트 128k · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $0.4 · 출력 $0.4 · 혼합 $None/1M · 81.0 t/s · TTFT 7.48s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.3 | -0.25 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 46.5 | -0.24 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 46.6 | -0.23 | 실측 | [[scicode]] 35.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 39.3 | -0.71 | 실측 | [[tau2-bench]] 28.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 48.8 | -0.08 | 실측 | [[aa-omniscience]] 24.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.9 | -0.14 | 실측 | [[aa-lcr]] 34.0%×1.0 |
| 지시 따르기 | 38.9 | -0.74 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
