---
type: Model
title: Muse Spark 1.2 (xhigh)
creator: Meta
license: Proprietary
intelligence_index: 47.0
price_blended_usd_1m: 0.78
output_speed_tps: 267.0
context_window: 1050000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.8, z: 1.63, r: 74.5, estimated: false }  # 전문 지식
  reasoning: { s: 75.0, z: 1.92, r: 78.9, estimated: false }  # 추론
  coding: { s: 87.8, z: 1.95, r: 79.3, estimated: false }  # 코딩
  agentic: { s: 74.1, z: 1.4, r: 71.0, estimated: false }  # 에이전트
  trust: { s: 67.0, z: 2.01, r: 80.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.22, r: 68.3, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.86, r: 62.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.2 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Muse Spark 1.2 (xhigh)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **47.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · 267.0 t/s · TTFT 15.25s · 1M ctx` · 가성비 60.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.5 | +1.63 | 실측 | [[aa-omniscience]] 45.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 45.0%×0.3 |
| 추론 | 78.9 | +1.92 | 실측 | [[critpt]] 18.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 45.0%×1.0 |
| 코딩 | 79.3 | +1.95 | 실측 | [[scicode]] 57.0%×1.0 |
| 에이전트 | 71.0 | +1.4 | 실측 | [[gdpval]] 51.0%×1.0, [[tau3-banking]] 35.0%×1.0 |
| 신뢰성 | 80.2 | +2.01 | 실측 | [[aa-omniscience]] 67.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.3 | +1.22 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 62.9 | +0.86 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
