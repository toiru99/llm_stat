---
type: Model
title: Claude Sonnet 5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 25.0
price_blended_usd_1m: 1.54
output_speed_tps: 60.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.8, z: 0.48, r: 57.2, estimated: false }  # 전문 지식
  reasoning: { s: 25.9, z: -0.44, r: 43.4, estimated: false }  # 추론
  coding: { s: 73.5, z: 1.39, r: 70.9, estimated: false }  # 코딩
  agentic: { s: 50.8, z: 0.51, r: 57.6, estimated: false }  # 에이전트
  trust: { s: 25.8, z: 0.05, r: 50.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 75.3, z: 0.81, r: 62.1, estimated: false }  # 긴문맥
  instruction: { s: 66.8, z: 0.59, r: 58.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-08
timestamp: 2026-09-08T00:00:00Z
---

# Claude Sonnet 5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **25.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 신뢰성, 추론

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 60.0 t/s · TTFT 1.33s · 1M ctx` · 가성비 16.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.2 | +0.48 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 43.4 | -0.44 | 실측 | [[critpt]] 5.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 70.9 | +1.39 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 57.6 | +0.51 | 실측 | [[gdpval]] 32.0%×1.0 |
| 신뢰성 | 50.7 | +0.05 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.1 | +0.81 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 58.8 | +0.59 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
