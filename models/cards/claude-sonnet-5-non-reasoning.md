---
type: Model
title: Claude Sonnet 5 (Non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 23.0
price_blended_usd_1m: 1.54
output_speed_tps: 62.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 54.3, z: 0.6, r: 59.0, estimated: false }  # 전문 지식
  reasoning: { s: 38.2, z: 0.12, r: 51.8, estimated: false }  # 추론
  coding: { s: 53.6, z: 0.64, r: 59.7, estimated: true }  # 코딩
  agentic: { s: 41.8, z: 0.16, r: 52.4, estimated: false }  # 에이전트
  trust: { s: 47.4, z: 1.02, r: 65.3, estimated: false }  # 신뢰성
  multimodal: { s: 78.1, z: 0.39, r: 55.8, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.86, r: 62.8, estimated: false }  # 긴문맥
  instruction: { s: 76.6, z: 0.96, r: 64.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# Claude Sonnet 5 (Non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **23.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 62.0 t/s · TTFT 1.19s · 1M ctx` · 가성비 14.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.0 | +0.6 | 실측 | [[aa-omniscience]] 34.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 51.8 | +0.12 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 59.7 | +0.64 | 추정 | (추정) |
| 에이전트 | 52.4 | +0.16 | 실측 | [[gdpval]] 35.0%×1.0, [[tau3-banking]] 16.0%×1.0 |
| 신뢰성 | 65.3 | +1.02 | 실측 | [[aa-omniscience]] 48.0%×1.0 |
| 멀티모달 | 55.8 | +0.39 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 62.8 | +0.86 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 64.4 | +0.96 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
