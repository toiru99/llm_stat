---
type: Model
title: Nemotron 3.5 Lightning
creator: NVIDIA
license: Open
intelligence_index: 24.0
price_blended_usd_1m: 0.071
output_speed_tps: 317.0
context_window: 1000000
status: current
size_class: Small
params_b: 31.6
is_reasoning: true
radar:
  knowledge: { s: 32.9, z: -0.4, r: 44.0, estimated: false }  # 전문 지식
  reasoning: { s: 31.3, z: -0.21, r: 46.8, estimated: false }  # 추론
  coding: { s: 53.3, z: 0.19, r: 52.9, estimated: false }  # 코딩
  agentic: { s: 20.8, z: -0.64, r: 40.5, estimated: false }  # 에이전트
  trust: { s: 69.8, z: 1.79, r: 76.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 66.3, z: 0.47, r: 57.0, estimated: false }  # 긴문맥
  instruction: { s: 41.5, z: -0.52, r: 42.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3.5 Lightning
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# Nemotron 3.5 Lightning

NVIDIA · Open · Small(31.6B) · 컨텍스트 1M · 종합지능 **24.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $0.07 · 출력 $0.22 · 혼합 $0.071/1M · 317.0 t/s · TTFT 1.56s · 1M ctx` · 가성비 338.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.0 | -0.4 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 74.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 46.8 | -0.21 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 74.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 52.9 | +0.19 | 실측 | [[scicode]] 32.0%×1.0 |
| 에이전트 | 40.5 | -0.64 | 실측 | [[gdpval]] 16.0%×1.0, [[tau3-banking]] 9.0%×1.0 |
| 신뢰성 | 76.8 | +1.79 | 실측 | [[aa-omniscience]] 62.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.0 | +0.47 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 42.1 | -0.52 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
