---
type: Model
title: Muse Spark 1.2 (xhigh)
creator: Meta
license: Proprietary
intelligence_index: 57.0
price_blended_usd_1m: 0.78
output_speed_tps: 184.0
context_window: 1050000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 75.0, z: 1.7, r: 75.4, estimated: false }  # 전문 지식
  reasoning: { s: 75.4, z: 2.01, r: 80.1, estimated: false }  # 추론
  coding: { s: 90.3, z: 1.82, r: 77.3, estimated: false }  # 코딩
  agentic: { s: 74.8, z: 1.45, r: 71.8, estimated: false }  # 에이전트
  trust: { s: 67.0, z: 2.0, r: 80.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 100.0, z: 1.52, r: 72.8, estimated: false }  # 긴문맥
  instruction: { s: 73.5, z: 0.86, r: 62.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.2 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Muse Spark 1.2 (xhigh)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **57.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 신뢰성
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · 184.0 t/s · TTFT 16.84s · 1M ctx` · 가성비 73.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.4 | +1.7 | 실측 | [[aa-omniscience]] 45.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 45.0%×0.3 |
| 추론 | 80.1 | +2.01 | 실측 | [[critpt]] 18.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 45.0%×1.0 |
| 코딩 | 77.3 | +1.82 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 71.8 | +1.45 | 실측 | [[gdpval]] 56.0%×1.0, [[tau3-banking]] 35.0%×1.0 |
| 신뢰성 | 80.0 | +2.0 | 실측 | [[aa-omniscience]] 67.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 72.8 | +1.52 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 62.9 | +0.86 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
