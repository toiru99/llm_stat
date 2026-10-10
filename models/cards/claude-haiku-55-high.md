---
type: Model
title: Claude Haiku 5.5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 38.0
price_blended_usd_1m: 0.077
output_speed_tps: 174.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.0, z: 0.53, r: 57.9, estimated: false }  # 전문 지식
  reasoning: { s: 59.7, z: 1.05, r: 65.7, estimated: false }  # 추론
  coding: { s: 70.0, z: 1.13, r: 67.0, estimated: false }  # 코딩
  agentic: { s: 67.6, z: 1.09, r: 66.4, estimated: false }  # 에이전트
  trust: { s: 54.6, z: 1.29, r: 69.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.04, r: 65.7, estimated: false }  # 긴문맥
  instruction: { s: 78.3, z: 1.0, r: 64.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# Claude Haiku 5.5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 174.0 t/s · TTFT 22.65s · 1M ctx` · 가성비 493.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.9 | +0.53 | 실측 | [[aa-omniscience]] 35.0%×1.0, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 65.7 | +1.05 | 실측 | [[critpt]] 19.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 67.0 | +1.13 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 66.4 | +1.09 | 실측 | [[gdpval]] 46.0%×1.0 |
| 신뢰성 | 69.3 | +1.29 | 실측 | [[aa-omniscience]] 55.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.7 | +1.04 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 64.9 | +1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
