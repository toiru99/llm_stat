---
type: Model
title: Claude Haiku 5.5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 29.0
price_blended_usd_1m: 0.077
output_speed_tps: 177.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 47.9, z: 0.22, r: 53.3, estimated: false }  # 전문 지식
  reasoning: { s: 35.3, z: -0.09, r: 48.7, estimated: false }  # 추론
  coding: { s: 70.0, z: 1.08, r: 66.3, estimated: false }  # 코딩
  agentic: { s: 60.5, z: 0.89, r: 63.3, estimated: false }  # 에이전트
  trust: { s: 54.6, z: 1.24, r: 68.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.9, z: 0.84, r: 62.6, estimated: false }  # 긴문맥
  instruction: { s: 57.7, z: 0.14, r: 52.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Claude Haiku 5.5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 177.0 t/s · TTFT 8.63s · 1M ctx` · 가성비 376.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.3 | +0.22 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[humanitys-last-exam]] 27.0%×0.3 |
| 추론 | 48.7 | -0.09 | 실측 | [[critpt]] 9.0%×1.0, [[humanitys-last-exam]] 27.0%×1.0 |
| 코딩 | 66.3 | +1.08 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 63.3 | +0.89 | 실측 | [[gdpval]] 1131.0%×1.0 |
| 신뢰성 | 68.6 | +1.24 | 실측 | [[aa-omniscience]] 55.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.6 | +0.84 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 52.1 | +0.14 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
