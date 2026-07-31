---
type: Model
title: GLM-5.2
creator: Z AI
license: Open
intelligence_index: 34.0
price_blended_usd_1m: None
output_speed_tps: 60.0
context_window: 1000000
status: current
size_class: Large
params_b: 753
is_reasoning: false
radar:
  knowledge: { s: 37.5, z: -0.18, r: 47.4, estimated: false }  # 전문 지식
  reasoning: { s: 31.0, z: -0.17, r: 47.4, estimated: false }  # 추론
  coding: { s: 60.0, z: 0.54, r: 58.1, estimated: false }  # 코딩
  agentic: { s: 55.9, z: 0.76, r: 61.4, estimated: false }  # 에이전트
  trust: { s: 74.7, z: 2.2, r: 83.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 48.7, z: -0.02, r: 49.7, estimated: false }  # 긴문맥
  instruction: { s: 57.7, z: 0.19, r: 52.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-31
timestamp: 2026-07-31T00:00:00Z
---

# GLM-5.2

Z AI · Open · Large(753B) · 컨텍스트 1M · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $1.35 · 출력 $4.25 · 혼합 $None/1M · 60.0 t/s · TTFT 1.96s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.4 | -0.18 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 47.4 | -0.17 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 58.1 | +0.54 | 실측 | [[scicode]] 36.0%×1.0 |
| 에이전트 | 61.4 | +0.76 | 실측 | [[gdpval]] 44.0%×1.0, [[tau3-banking]] 16.0%×1.0 |
| 신뢰성 | 83.1 | +2.2 | 실측 | [[aa-omniscience]] 66.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.7 | -0.02 | 실측 | [[aa-lcr]] 37.0%×1.0 |
| 지시 따르기 | 52.9 | +0.19 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
