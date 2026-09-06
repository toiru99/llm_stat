---
type: Model
title: Solar Open2 250B
creator: Upstage
license: Open
intelligence_index: 29.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1050000
status: current
size_class: Large
params_b: 250
is_reasoning: true
radar:
  knowledge: { s: 46.0, z: 0.24, r: 53.7, estimated: false }  # 전문 지식
  reasoning: { s: 51.8, z: 0.81, r: 62.1, estimated: false }  # 추론
  coding: { s: 69.4, z: 1.3, r: 69.5, estimated: false }  # 코딩
  agentic: { s: 43.4, z: 0.23, r: 53.4, estimated: false }  # 에이전트
  trust: { s: 75.3, z: 2.4, r: 85.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.9, z: 0.98, r: 64.7, estimated: false }  # 긴문맥
  instruction: { s: 89.4, z: 1.53, r: 73.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Open2 250B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Solar Open2 250B

Upstage · Open · Large(250B) · 컨텍스트 1M · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.7 | +0.24 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 29.0%×0.3 |
| 추론 | 62.1 | +0.81 | 실측 | [[critpt]] 6.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 29.0%×1.0 |
| 코딩 | 69.5 | +1.3 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 53.4 | +0.23 | 실측 | [[gdpval]] 28.0%×1.0, [[tau3-banking]] 22.0%×1.0 |
| 신뢰성 | 85.9 | +2.4 | 실측 | [[aa-omniscience]] 75.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.7 | +0.98 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 73.0 | +1.53 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
