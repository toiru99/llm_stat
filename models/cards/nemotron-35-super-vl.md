---
type: Model
title: Nemotron 3.5 Super VL
creator: NVIDIA
license: Open
intelligence_index: 13.6203422723141
price_blended_usd_1m: 0.115
output_speed_tps: 296.107984487865
context_window: 1000000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 40.5, z: -0.33, r: 45.1, estimated: false }  # 전문 지식
  reasoning: { s: 35.1, z: -0.03, r: 49.6, estimated: false }  # 추론
  coding: { s: 67.2, z: 0.92, r: 63.8, estimated: false }  # 코딩
  agentic: { s: 69.0, z: 0.83, r: 62.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 77.8, z: 0.72, r: 60.8, estimated: false }  # 긴문맥
  instruction: { s: 54.1, z: 0.01, r: 50.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3.5 Super VL
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Nemotron 3.5 Super VL

NVIDIA · Open · Medium · 컨텍스트 1M · 종합지능 **13.6203422723141**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.15 · 출력 $0.5 · 혼합 $0.115/1M · 296.107984487865 t/s · TTFT 1.04182782818296s · 1M ctx` · 가성비 118.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.1 | -0.33 | 실측 | [[humanitys-last-exam]] 30.722891566265098%×0.3 |
| 추론 | 49.6 | -0.03 | 실측 | [[critpt]] 10.5714285714286%×1.0, [[humanitys-last-exam]] 30.722891566265098%×1.0 |
| 코딩 | 63.8 | +0.92 | 실측 | [[scicode]] 47.8009259259259%×1.0 |
| 에이전트 | 62.5 | +0.83 | 실측 | [[gdpval]] 1162.41%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.8 | +0.72 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 50.1 | +0.01 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
