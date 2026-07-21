---
type: Model
title: GLM-5.2
creator: Z AI
license: Open
intelligence_index: 34.0
price_blended_usd_1m: None
output_speed_tps: 128.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 37.5, z: -0.15, r: 47.8, estimated: false }  # 전문 지식
  reasoning: { s: 31.0, z: -0.14, r: 47.9, estimated: false }  # 추론
  coding: { s: 60.0, z: 0.58, r: 58.6, estimated: false }  # 코딩
  agentic: { s: 59.2, z: 0.89, r: 63.3, estimated: false }  # 에이전트
  trust: { s: 76.5, z: 2.3, r: 84.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 48.7, z: -0.0, r: 50.0, estimated: false }  # 긴문맥
  instruction: { s: 57.7, z: 0.22, r: 53.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-21
timestamp: 2026-07-21T00:00:00Z
---

# GLM-5.2

Z AI · Open · Unknown · 컨텍스트 1M · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $None/1M · 128.0 t/s · TTFT 1.61s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.8 | -0.15 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 47.9 | -0.14 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 58.6 | +0.58 | 실측 | [[scicode]] 36.0%×1.0 |
| 에이전트 | 63.3 | +0.89 | 실측 | [[gdpval]] 44.0%×1.0, [[tau3-banking]] 16.0%×1.0 |
| 신뢰성 | 84.5 | +2.3 | 실측 | [[aa-omniscience]] 66.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 50.0 | +-0.0 | 실측 | [[aa-lcr]] 37.0%×1.0 |
| 지시 따르기 | 53.2 | +0.22 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
