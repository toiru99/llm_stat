---
type: Model
title: Claude Sonnet 5 (Non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 42.0
price_blended_usd_1m: None
output_speed_tps: 64.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 56.7, z: 0.77, r: 61.6, estimated: false }  # 전문 지식
  reasoning: { s: 39.7, z: 0.31, r: 54.7, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.48, r: 72.2, estimated: false }  # 코딩
  agentic: { s: 55.9, z: 0.76, r: 61.4, estimated: false }  # 에이전트
  trust: { s: 56.3, z: 1.36, r: 70.4, estimated: false }  # 신뢰성
  multimodal: { s: 82.6, z: 0.51, r: 57.7, estimated: false }  # 멀티모달
  long_context: { s: 77.6, z: 0.85, r: 62.7, estimated: false }  # 긴문맥
  instruction: { s: 69.0, z: 0.67, r: 60.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-24
timestamp: 2026-07-24T00:00:00Z
---

# Claude Sonnet 5 (Non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $None/1M · 64.0 t/s · TTFT 1.42s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.6 | +0.77 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 54.7 | +0.31 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 72.2 | +1.48 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 61.4 | +0.76 | 실측 | [[gdpval]] 43.0%×1.0, [[tau3-banking]] 14.0%×1.0 |
| 신뢰성 | 70.4 | +1.36 | 실측 | [[aa-omniscience]] 50.0%×1.0 |
| 멀티모달 | 57.7 | +0.51 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 62.7 | +0.85 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 60.0 | +0.67 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
