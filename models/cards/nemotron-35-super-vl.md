---
type: Model
title: Nemotron 3.5 Super VL
creator: NVIDIA
license: Open
intelligence_index: 14.0
price_blended_usd_1m: 0.1375
output_speed_tps: 451.0
context_window: 1000000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.0, z: 0.02, r: 50.3, estimated: false }  # 전문 지식
  reasoning: { s: 34.7, z: -0.5, r: 42.5, estimated: false }  # 추론
  coding: { s: 68.3, z: 1.04, r: 65.6, estimated: false }  # 코딩
  agentic: { s: 62.3, z: 0.96, r: 64.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 77.5, z: 0.76, r: 61.3, estimated: false }  # 긴문맥
  instruction: { s: 43.5, z: -0.39, r: 44.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3.5 Super VL
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Nemotron 3.5 Super VL

NVIDIA · Open · Medium · 컨텍스트 1M · 종합지능 **14.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $0.23 · 출력 $0.57 · 혼합 $0.1375/1M · 451.0 t/s · TTFT 0.83s · 1M ctx` · 가성비 101.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.3 | +0.02 | 실측 | [[humanitys-last-exam]] 31.0%×0.3 |
| 추론 | 42.5 | -0.5 | 실측 | [[critpt]] 14.0%×1.0, [[humanitys-last-exam]] 31.0%×1.0 |
| 코딩 | 65.6 | +1.04 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 64.4 | +0.96 | 실측 | [[gdpval]] 1162.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.3 | +0.76 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 44.2 | -0.39 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
