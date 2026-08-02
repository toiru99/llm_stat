---
type: Model
title: Muse Spark 1.1 (xhigh)
creator: Meta
license: Proprietary
intelligence_index: 51.0
price_blended_usd_1m: None
output_speed_tps: 108.0
context_window: 1050000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.6, z: 1.66, r: 74.9, estimated: false }  # 전문 지식
  reasoning: { s: 75.6, z: 2.06, r: 81.0, estimated: false }  # 추론
  coding: { s: 96.7, z: 2.07, r: 81.0, estimated: false }  # 코딩
  agentic: { s: 69.1, z: 1.27, r: 69.0, estimated: false }  # 에이전트
  trust: { s: 70.1, z: 1.99, r: 79.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.9, z: 0.99, r: 64.8, estimated: false }  # 긴문맥
  instruction: { s: 78.0, z: 1.03, r: 65.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.1 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-02
timestamp: 2026-08-02T00:00:00Z
---

# Muse Spark 1.1 (xhigh)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **51.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $None/1M · 108.0 t/s · TTFT 2.75s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.9 | +1.66 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 45.0%×0.3 |
| 추론 | 81.0 | +2.06 | 실측 | [[critpt]] 15.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 45.0%×1.0 |
| 코딩 | 81.0 | +2.07 | 실측 | [[scicode]] 58.0%×1.0 |
| 에이전트 | 69.0 | +1.27 | 실측 | [[gdpval]] 44.0%×1.0, [[tau3-banking]] 25.0%×1.0 |
| 신뢰성 | 79.9 | +1.99 | 실측 | [[aa-omniscience]] 62.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.8 | +0.99 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 65.4 | +1.03 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
