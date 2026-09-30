---
type: Model
title: Muse Spark 1.3 (max)
creator: Meta
license: Proprietary
intelligence_index: 48.0
price_blended_usd_1m: 0.78
output_speed_tps: 184.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 75.7, z: 1.55, r: 73.3, estimated: false }  # 전문 지식
  reasoning: { s: 85.3, z: 2.24, r: 83.6, estimated: false }  # 추론
  coding: { s: 86.7, z: 1.74, r: 76.2, estimated: false }  # 코딩
  agentic: { s: 82.1, z: 1.68, r: 75.2, estimated: false }  # 에이전트
  trust: { s: 67.0, z: 1.91, r: 78.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.28, r: 69.1, estimated: false }  # 긴문맥
  instruction: { s: 75.9, z: 0.91, r: 63.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.3 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Muse Spark 1.3 (max)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **48.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 신뢰성
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · 184.0 t/s · TTFT 34.58s · 1M ctx` · 가성비 61.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.3 | +1.55 | 실측 | [[aa-omniscience]] 44.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 49.0%×0.3 |
| 추론 | 83.6 | +2.24 | 실측 | [[critpt]] 25.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 49.0%×1.0 |
| 코딩 | 76.2 | +1.74 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 75.2 | +1.68 | 실측 | [[gdpval]] 59.0%×1.0, [[itbench]] 33.0%×1.0, [[tau3-banking]] 51.0%×1.0 |
| 신뢰성 | 78.6 | +1.91 | 실측 | [[aa-omniscience]] 67.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.1 | +1.28 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 63.7 | +0.91 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
