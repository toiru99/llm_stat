---
type: Model
title: Muse Spark 1.3 (xhigh)
creator: Meta
license: Proprietary
intelligence_index: 52.0
price_blended_usd_1m: 0.78
output_speed_tps: 135.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.9, z: 1.59, r: 73.8, estimated: false }  # 전문 지식
  reasoning: { s: 86.1, z: 2.46, r: 86.8, estimated: false }  # 추론
  coding: { s: 93.9, z: 2.17, r: 82.5, estimated: false }  # 코딩
  agentic: { s: 91.2, z: 2.06, r: 80.9, estimated: false }  # 에이전트
  trust: { s: 69.1, z: 2.11, r: 81.7, estimated: false }  # 신뢰성
  multimodal: { s: 93.1, z: 1.13, r: 67.0, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.36, r: 70.4, estimated: false }  # 긴문맥
  instruction: { s: 74.5, z: 0.92, r: 63.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.3 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Muse Spark 1.3 (xhigh)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **52.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · 135.0 t/s · TTFT 42.55s · 1M ctx` · 가성비 66.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.8 | +1.59 | 실측 | [[aa-omniscience]] 42.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 47.0%×0.3 |
| 추론 | 86.8 | +2.46 | 실측 | [[critpt]] 26.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 47.0%×1.0 |
| 코딩 | 82.5 | +2.17 | 실측 | [[scicode]] 60.0%×1.0 |
| 에이전트 | 80.9 | +2.06 | 실측 | [[gdpval]] 58.0%×1.0, [[tau3-banking]] 47.0%×1.0 |
| 신뢰성 | 81.7 | +2.11 | 실측 | [[aa-omniscience]] 69.0%×1.0 |
| 멀티모달 | 67.0 | +1.13 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 70.4 | +1.36 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 63.8 | +0.92 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
