---
type: Model
title: Nemotron 3.5 Lightning
creator: NVIDIA
license: Open
intelligence_index: 24.0
price_blended_usd_1m: 0.071
output_speed_tps: 290.0
context_window: 1000000
status: current
size_class: Small
params_b: 31.6
is_reasoning: true
radar:
  knowledge: { s: 33.1, z: -0.37, r: 44.4, estimated: false }  # 전문 지식
  reasoning: { s: 30.8, z: -0.19, r: 47.1, estimated: false }  # 추론
  coding: { s: 51.6, z: 0.19, r: 52.9, estimated: false }  # 코딩
  agentic: { s: 20.4, z: -0.66, r: 40.1, estimated: false }  # 에이전트
  trust: { s: 61.9, z: 1.76, r: 76.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 66.3, z: 0.49, r: 57.3, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.45, r: 43.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3.5 Lightning
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Nemotron 3.5 Lightning

NVIDIA · Open · Small(31.6B) · 컨텍스트 1M · 종합지능 **24.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $0.07 · 출력 $0.22 · 혼합 $0.071/1M · 290.0 t/s · TTFT 1.0s · 1M ctx` · 가성비 338.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.4 | -0.37 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 74.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 47.1 | -0.19 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 74.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 52.9 | +0.19 | 실측 | [[scicode]] 32.0%×1.0 |
| 에이전트 | 40.1 | -0.66 | 실측 | [[gdpval]] 16.0%×1.0, [[tau3-banking]] 9.0%×1.0 |
| 신뢰성 | 76.4 | +1.76 | 실측 | [[aa-omniscience]] 62.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.3 | +0.49 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 43.3 | -0.45 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
