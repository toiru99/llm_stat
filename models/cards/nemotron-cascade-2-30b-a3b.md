---
type: Model
title: Nemotron Cascade 2 30B A3B
creator: NVIDIA
license: Open
intelligence_index: 18.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: current
size_class: Small
params_b: 31.6
is_reasoning: true
radar:
  knowledge: { s: 38.5, z: -0.12, r: 48.2, estimated: false }  # 전문 지식
  reasoning: { s: 33.6, z: -0.04, r: 49.5, estimated: false }  # 추론
  coding: { s: 49.5, z: 0.11, r: 51.6, estimated: false }  # 코딩
  agentic: { s: 28.9, z: -0.29, r: 45.7, estimated: false }  # 에이전트
  trust: { s: 16.1, z: -0.57, r: 41.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 44.7, z: -0.14, r: 47.9, estimated: false }  # 긴문맥
  instruction: { s: 95.8, z: 1.77, r: 76.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron Cascade 2 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-27
timestamp: 2026-07-27T00:00:00Z
---

# Nemotron Cascade 2 30B A3B

NVIDIA · Open · Small(31.6B) · 컨텍스트 1M · 종합지능 **18.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.2 | -0.12 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 49.5 | -0.04 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 51.6 | +0.11 | 실측 | [[scicode]] 35.0%×1.0, [[terminal-bench]] 21.0%×0.5 |
| 에이전트 | 45.7 | -0.29 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 53.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 21.0%×1.0 |
| 신뢰성 | 41.5 | -0.57 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.9 | -0.14 | 실측 | [[aa-lcr]] 34.0%×1.0 |
| 지시 따르기 | 76.5 | +1.77 | 실측 | [[ifbench]] 80.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
