---
type: Model
title: Ling 3.1 Flash 1019
creator: InclusionAI
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: 0.192
output_speed_tps: None
context_window: 1050000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.6, z: 0.34, r: 55.2, estimated: false }  # 전문 지식
  reasoning: { s: 74.4, z: 1.68, r: 75.2, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.53, r: 73.0, estimated: false }  # 코딩
  agentic: { s: 88.1, z: 1.84, r: 77.6, estimated: false }  # 에이전트
  trust: { s: 56.7, z: 1.33, r: 70.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.18, r: 67.7, estimated: false }  # 긴문맥
  instruction: { s: 69.6, z: 0.65, r: 59.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.1 Flash 1019
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Ling 3.1 Flash 1019

InclusionAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **44.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.192/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 229.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.2 | +0.34 | 실측 | [[aa-omniscience]] 30.0%×1.0, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 75.2 | +1.68 | 실측 | [[critpt]] 26.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 73.0 | +1.53 | 실측 | [[scicode]] 57.0%×1.0 |
| 에이전트 | 77.6 | +1.84 | 실측 | [[gdpval]] 1645.0%×1.0 |
| 신뢰성 | 70.0 | +1.33 | 실측 | [[aa-omniscience]] 57.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.7 | +1.18 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 59.7 | +0.65 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
