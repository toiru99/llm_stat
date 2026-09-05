---
type: Model
title: Claude Sonnet 5 (Non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 33.0
price_blended_usd_1m: 1.54
output_speed_tps: 64.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 54.5, z: 0.65, r: 59.8, estimated: false }  # 전문 지식
  reasoning: { s: 38.5, z: 0.17, r: 52.5, estimated: false }  # 추론
  coding: { s: 52.1, z: 0.71, r: 60.6, estimated: true }  # 코딩
  agentic: { s: 46.3, z: 0.34, r: 55.1, estimated: false }  # 에이전트
  trust: { s: 47.4, z: 1.09, r: 66.3, estimated: false }  # 신뢰성
  multimodal: { s: 79.2, z: 0.45, r: 56.7, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.91, r: 63.6, estimated: false }  # 긴문맥
  instruction: { s: 75.2, z: 0.95, r: 64.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Claude Sonnet 5 (Non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **33.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 64.0 t/s · TTFT 1.33s · 1M ctx` · 가성비 21.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.8 | +0.65 | 실측 | [[aa-omniscience]] 34.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 52.5 | +0.17 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 60.6 | +0.71 | 추정 | (추정) |
| 에이전트 | 55.1 | +0.34 | 실측 | [[gdpval]] 39.0%×1.0, [[tau3-banking]] 16.0%×1.0 |
| 신뢰성 | 66.3 | +1.09 | 실측 | [[aa-omniscience]] 48.0%×1.0 |
| 멀티모달 | 56.7 | +0.45 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 63.6 | +0.91 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 64.2 | +0.95 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
