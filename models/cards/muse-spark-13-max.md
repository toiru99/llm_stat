---
type: Model
title: Muse Spark 1.3 (max)
creator: Meta
license: Proprietary
intelligence_index: 53.0
price_blended_usd_1m: 0.78
output_speed_tps: 190.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.2, z: 1.7, r: 75.5, estimated: false }  # 전문 지식
  reasoning: { s: 86.2, z: 2.46, r: 86.9, estimated: false }  # 추론
  coding: { s: 89.8, z: 2.03, r: 80.4, estimated: false }  # 코딩
  agentic: { s: 98.4, z: 2.33, r: 85.0, estimated: false }  # 에이전트
  trust: { s: 66.0, z: 1.96, r: 79.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.39, r: 70.9, estimated: false }  # 긴문맥
  instruction: { s: 74.2, z: 0.91, r: 63.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.3 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Muse Spark 1.3 (max)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **53.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · 190.0 t/s · TTFT 18.69s · 1M ctx` · 가성비 67.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.5 | +1.7 | 실측 | [[aa-omniscience]] 44.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 49.0%×0.3 |
| 추론 | 86.9 | +2.46 | 실측 | [[critpt]] 25.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 49.0%×1.0 |
| 코딩 | 80.4 | +2.03 | 실측 | [[scicode]] 58.0%×1.0 |
| 에이전트 | 85.0 | +2.33 | 실측 | [[gdpval]] 61.0%×1.0, [[tau3-banking]] 52.0%×1.0 |
| 신뢰성 | 79.5 | +1.96 | 실측 | [[aa-omniscience]] 66.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.9 | +1.39 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 63.6 | +0.91 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
