---
type: Model
title: Muse Spark 1.3 (xhigh)
creator: Meta
license: Proprietary
intelligence_index: 61.0
price_blended_usd_1m: 0.78
output_speed_tps: 209.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.1, z: 1.65, r: 74.7, estimated: false }  # 전문 지식
  reasoning: { s: 86.5, z: 2.56, r: 88.3, estimated: false }  # 추론
  coding: { s: 95.2, z: 2.02, r: 80.3, estimated: false }  # 코딩
  agentic: { s: 89.3, z: 2.01, r: 80.2, estimated: false }  # 에이전트
  trust: { s: 69.1, z: 2.1, r: 81.5, estimated: false }  # 신뢰성
  multimodal: { s: 94.4, z: 1.18, r: 67.7, estimated: false }  # 멀티모달
  long_context: { s: 95.2, z: 1.37, r: 70.5, estimated: false }  # 긴문맥
  instruction: { s: 74.0, z: 0.88, r: 63.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.3 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Muse Spark 1.3 (xhigh)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **61.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 신뢰성
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · 209.0 t/s · TTFT 35.06s · 1M ctx` · 가성비 78.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.7 | +1.65 | 실측 | [[aa-omniscience]] 42.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 47.0%×0.3 |
| 추론 | 88.3 | +2.56 | 실측 | [[critpt]] 26.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 47.0%×1.0 |
| 코딩 | 80.3 | +2.02 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 80.2 | +2.01 | 실측 | [[gdpval]] 60.0%×1.0, [[tau3-banking]] 47.0%×1.0 |
| 신뢰성 | 81.5 | +2.1 | 실측 | [[aa-omniscience]] 69.0%×1.0 |
| 멀티모달 | 67.7 | +1.18 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 70.5 | +1.37 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 63.2 | +0.88 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
