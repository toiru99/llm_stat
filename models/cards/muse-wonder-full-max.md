---
type: Model
title: Muse Wonder Full (max)
creator: Meta
license: Proprietary
intelligence_index: 56.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.8, z: 1.25, r: 68.8, estimated: false }  # 전문 지식
  reasoning: { s: 94.2, z: 2.63, r: 89.4, estimated: false }  # 추론
  coding: { s: 93.3, z: 1.92, r: 78.8, estimated: false }  # 코딩
  agentic: { s: 100.0, z: 2.3, r: 84.6, estimated: false }  # 에이전트
  trust: { s: 77.3, z: 2.32, r: 84.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.28, r: 69.2, estimated: false }  # 긴문맥
  instruction: { s: 75.6, z: 0.88, r: 63.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Wonder Full (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-13
timestamp: 2026-10-13T00:00:00Z
---

# Muse Wonder Full (max)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **56.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 신뢰성
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.8 | +1.25 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[humanitys-last-exam]] 54.0%×0.3 |
| 추론 | 89.4 | +2.63 | 실측 | [[critpt]] 33.0%×1.0, [[humanitys-last-exam]] 54.0%×1.0 |
| 코딩 | 78.8 | +1.92 | 실측 | [[scicode]] 63.0%×1.0 |
| 에이전트 | 84.6 | +2.3 | 실측 | [[gdpval]] 68.0%×1.0 |
| 신뢰성 | 84.8 | +2.32 | 실측 | [[aa-omniscience]] 77.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.2 | +1.28 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 63.2 | +0.88 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
