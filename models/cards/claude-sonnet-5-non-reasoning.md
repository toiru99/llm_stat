---
type: Model
title: Claude Sonnet 5 (Non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 43.0
price_blended_usd_1m: 1.54
output_speed_tps: 59.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 54.7, z: 0.69, r: 60.4, estimated: false }  # 전문 지식
  reasoning: { s: 38.8, z: 0.2, r: 53.0, estimated: false }  # 추론
  coding: { s: 79.0, z: 1.34, r: 70.1, estimated: false }  # 코딩
  agentic: { s: 47.0, z: 0.37, r: 55.6, estimated: false }  # 에이전트
  trust: { s: 47.4, z: 1.08, r: 66.1, estimated: false }  # 신뢰성
  multimodal: { s: 80.3, z: 0.48, r: 57.2, estimated: false }  # 멀티모달
  long_context: { s: 79.5, z: 0.89, r: 63.4, estimated: false }  # 긴문맥
  instruction: { s: 78.0, z: 1.05, r: 65.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Claude Sonnet 5 (Non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **43.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 59.0 t/s · TTFT 1.51s · 1M ctx` · 가성비 27.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.4 | +0.69 | 실측 | [[aa-omniscience]] 34.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 53.0 | +0.2 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 70.1 | +1.34 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 55.6 | +0.37 | 실측 | [[gdpval]] 43.0%×1.0, [[tau3-banking]] 16.0%×1.0 |
| 신뢰성 | 66.1 | +1.08 | 실측 | [[aa-omniscience]] 48.0%×1.0 |
| 멀티모달 | 57.2 | +0.48 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 63.4 | +0.89 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 65.7 | +1.05 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
