---
type: Model
title: Nemotron 3.5 Super VL
creator: NVIDIA
license: Open
intelligence_index: 26.0
price_blended_usd_1m: 0.136
output_speed_tps: 196.0
context_window: 1000000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 37.9, z: -0.22, r: 46.7, estimated: false }  # 전문 지식
  reasoning: { s: 41.7, z: 0.22, r: 53.4, estimated: false }  # 추론
  coding: { s: 68.3, z: 1.06, r: 65.9, estimated: false }  # 코딩
  agentic: { s: 48.5, z: 0.35, r: 55.2, estimated: false }  # 에이전트
  trust: { s: 63.9, z: 1.68, r: 75.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 77.5, z: 0.76, r: 61.4, estimated: false }  # 긴문맥
  instruction: { s: 76.3, z: 0.91, r: 63.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3.5 Super VL
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-16
timestamp: 2026-10-16T00:00:00Z
---

# Nemotron 3.5 Super VL

NVIDIA · Open · Medium · 컨텍스트 1M · 종합지능 **26.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.2 · 출력 $0.57 · 혼합 $0.136/1M · 196.0 t/s · TTFT 0.89s · 1M ctx` · 가성비 191.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.7 | -0.22 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[humanitys-last-exam]] 31.0%×0.3 |
| 추론 | 53.4 | +0.22 | 실측 | [[critpt]] 11.0%×1.0, [[humanitys-last-exam]] 31.0%×1.0 |
| 코딩 | 65.9 | +1.06 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 55.2 | +0.35 | 실측 | [[gdpval]] 33.0%×1.0 |
| 신뢰성 | 75.2 | +1.68 | 실측 | [[aa-omniscience]] 64.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.4 | +0.76 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 63.7 | +0.91 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
