---
type: Model
title: Claude Sonnet 5 (Non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 42.0
price_blended_usd_1m: 1.54
output_speed_tps: 71.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 56.7, z: 0.8, r: 61.9, estimated: false }  # 전문 지식
  reasoning: { s: 39.7, z: 0.33, r: 55.0, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.51, r: 72.7, estimated: false }  # 코딩
  agentic: { s: 56.1, z: 0.78, r: 61.7, estimated: false }  # 에이전트
  trust: { s: 57.6, z: 1.39, r: 70.9, estimated: false }  # 신뢰성
  multimodal: { s: 82.6, z: 0.53, r: 58.0, estimated: false }  # 멀티모달
  long_context: { s: 77.6, z: 0.87, r: 63.0, estimated: false }  # 긴문맥
  instruction: { s: 69.0, z: 0.68, r: 60.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# Claude Sonnet 5 (Non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 71.0 t/s · TTFT 1.54s · 1M ctx` · 가성비 27.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.9 | +0.8 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 55.0 | +0.33 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 72.7 | +1.51 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 61.7 | +0.78 | 실측 | [[gdpval]] 44.0%×1.0, [[tau3-banking]] 14.0%×1.0 |
| 신뢰성 | 70.9 | +1.39 | 실측 | [[aa-omniscience]] 50.0%×1.0 |
| 멀티모달 | 58.0 | +0.53 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 63.0 | +0.87 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 60.3 | +0.68 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
