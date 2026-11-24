---
type: Model
title: Nemotron 3.5 Super VL
creator: NVIDIA
license: Open
intelligence_index: 13.6203422723141
price_blended_usd_1m: 0.115
output_speed_tps: 353.529114093036
context_window: 1000000
status: current
size_class: Medium
params_b: 120
is_reasoning: true
radar:
  knowledge: { s: 40.5, z: -0.3, r: 45.4, estimated: false }  # 전문 지식
  reasoning: { s: 35.1, z: -0.01, r: 49.9, estimated: false }  # 추론
  coding: { s: 67.2, z: 0.88, r: 63.2, estimated: false }  # 코딩
  agentic: { s: 69.0, z: 0.77, r: 61.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 77.8, z: 0.61, r: 59.2, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3.5 Super VL
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Nemotron 3.5 Super VL

NVIDIA · Open · Medium(120B) · 컨텍스트 1M · 종합지능 **13.6203422723141**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.15 · 출력 $0.5 · 혼합 $0.115/1M · 353.529114093036 t/s · TTFT 0.97212030957827s · 1M ctx` · 가성비 118.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 45.4 | -0.3 | 실측 | [[humanitys-last-exam]] 30.7229%×0.3 |
| 추론 | 49.9 | -0.01 | 실측 | [[critpt]] 10.5714%×1.0, [[humanitys-last-exam]] 30.7229%×1.0 |
| 코딩 | 63.2 | +0.88 | 실측 | [[scicode]] 47.8009%×1.0 |
| 에이전트 | 61.6 | +0.77 | 실측 | [[gdpval]] 1162.41 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.2 | +0.61 | 실측 | [[aa-lcr]] 69%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
