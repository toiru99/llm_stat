---
type: Model
title: Muse Spark 1.2 (xhigh)
creator: Meta
license: Proprietary
intelligence_index: 54.0
price_blended_usd_1m: 0.78
output_speed_tps: None
context_window: 1050000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.3, z: 1.5, r: 72.5, estimated: false }  # 전문 지식
  reasoning: { s: 78.1, z: 2.16, r: 82.4, estimated: false }  # 추론
  coding: { s: 93.3, z: 1.91, r: 78.6, estimated: false }  # 코딩
  agentic: { s: 74.1, z: 1.53, r: 73.0, estimated: false }  # 에이전트
  trust: { s: 81.6, z: 2.42, r: 86.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 77.4, z: 1.0, r: 64.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.2 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Muse Spark 1.2 (xhigh)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **54.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 69.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.5 | +1.5 | 실측 | [[aa-omniscience]] 38.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 44.0%×0.3 |
| 추론 | 82.4 | +2.16 | 실측 | [[critpt]] 18.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 44.0%×1.0 |
| 코딩 | 78.6 | +1.91 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 73.0 | +1.53 | 실측 | [[gdpval]] 57.0%×1.0, [[tau3-banking]] 27.0%×1.0 |
| 신뢰성 | 86.3 | +2.42 | 실측 | [[aa-omniscience]] 72.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 64.9 | +1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
