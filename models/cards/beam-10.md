---
type: Model
title: Beam 1.0
creator: Reflection
license: Open
intelligence_index: 18.0
price_blended_usd_1m: 0.228
output_speed_tps: 299.0
context_window: 1050000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.7, z: 0.32, r: 54.8, estimated: false }  # 전문 지식
  reasoning: { s: 47.1, z: 0.07, r: 51.0, estimated: false }  # 추론
  coding: { s: 68.3, z: 1.05, r: 65.7, estimated: false }  # 코딩
  agentic: { s: 63.1, z: 0.99, r: 64.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 46.6, z: -0.25, r: 46.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Beam 1.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Beam 1.0

Reflection · Open · Large · 컨텍스트 1M · 종합지능 **18.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.4 · 출력 $1.2 · 혼합 $0.228/1M · 299.0 t/s · TTFT 0.64s · 1M ctx` · 가성비 78.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.8 | +0.32 | 실측 | [[humanitys-last-exam]] 35.0%×0.3 |
| 추론 | 51.0 | +0.07 | 실측 | [[critpt]] 27.0%×1.0, [[humanitys-last-exam]] 35.0%×1.0 |
| 코딩 | 65.7 | +1.05 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 64.9 | +0.99 | 실측 | [[gdpval]] 1177.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 46.2 | -0.25 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
