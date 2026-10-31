---
type: Model
title: Ling 3.1 Flash 1019
creator: InclusionAI
license: Open
intelligence_index: 29.0
price_blended_usd_1m: 0.192
output_speed_tps: None
context_window: 1050000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.0, z: 0.91, r: 63.6, estimated: false }  # 전문 지식
  reasoning: { s: 61.4, z: 0.71, r: 60.7, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.55, r: 73.3, estimated: false }  # 코딩
  agentic: { s: 88.6, z: 1.87, r: 78.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.2, r: 68.0, estimated: false }  # 긴문맥
  instruction: { s: 61.9, z: 0.38, r: 55.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.1 Flash 1019
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Ling 3.1 Flash 1019

InclusionAI · Open · Large · 컨텍스트 1M · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.192/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 151.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.6 | +0.91 | 실측 | [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 60.7 | +0.71 | 실측 | [[critpt]] 38.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 73.3 | +1.55 | 실측 | [[scicode]] 57.0%×1.0 |
| 에이전트 | 78.0 | +1.87 | 실측 | [[gdpval]] 1653.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.0 | +1.2 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 55.8 | +0.38 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
