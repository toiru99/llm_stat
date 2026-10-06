---
type: Model
title: K2 Horizon 3.7B
creator: Institute of Foundation Models
license: Open
intelligence_index: 16.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 524000
status: current
size_class: Tiny
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 29.6, z: -0.6, r: 41.0, estimated: false }  # 전문 지식
  reasoning: { s: 30.1, z: -0.29, r: 45.6, estimated: false }  # 추론
  coding: { s: 25.0, z: -0.39, r: 44.1, estimated: false }  # 코딩
  agentic: { s: 33.6, z: -0.2, r: 47.0, estimated: false }  # 에이전트
  trust: { s: 55.7, z: 1.35, r: 70.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 69.7, z: 0.54, r: 58.2, estimated: false }  # 긴문맥
  instruction: { s: 36.8, z: -0.73, r: 39.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2 Horizon 3.7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# K2 Horizon 3.7B

Institute of Foundation Models · Open · Tiny · 컨텍스트 524k · 종합지능 **16.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 524k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.0 | -0.6 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 45.6 | -0.29 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 44.1 | -0.39 | 실측 | [[scicode]] 22.0%×1.0 |
| 에이전트 | 47.0 | -0.2 | 실측 | [[gdpval]] 19.0%×1.0, [[tau3-banking]] 20.0%×1.0 |
| 신뢰성 | 70.3 | +1.35 | 실측 | [[aa-omniscience]] 56.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.2 | +0.54 | 실측 | [[aa-lcr]] 62.0%×1.0 |
| 지시 따르기 | 39.1 | -0.73 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
