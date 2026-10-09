---
type: Model
title: Solar Open2 250B
creator: Upstage
license: Open
intelligence_index: 25.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1050000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 45.7, z: 0.14, r: 52.1, estimated: false }  # 전문 지식
  reasoning: { s: 51.3, z: 0.66, r: 59.9, estimated: false }  # 추론
  coding: { s: 68.3, z: 1.08, r: 66.1, estimated: false }  # 코딩
  agentic: { s: 43.1, z: 0.15, r: 52.3, estimated: false }  # 에이전트
  trust: { s: 75.3, z: 2.24, r: 83.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.9, z: 0.87, r: 63.1, estimated: false }  # 긴문맥
  instruction: { s: 89.4, z: 1.46, r: 71.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Open2 250B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# Solar Open2 250B

Upstage · Open · Large · 컨텍스트 1M · 종합지능 **25.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.1 | +0.14 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 29.0%×0.3 |
| 추론 | 59.9 | +0.66 | 실측 | [[critpt]] 6.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 29.0%×1.0 |
| 코딩 | 66.1 | +1.08 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 52.3 | +0.15 | 실측 | [[tau3-banking]] 22.0%×1.0 |
| 신뢰성 | 83.6 | +2.24 | 실측 | [[aa-omniscience]] 75.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.1 | +0.87 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 71.9 | +1.46 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
