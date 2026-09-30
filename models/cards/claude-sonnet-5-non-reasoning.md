---
type: Model
title: Claude Sonnet 5 (Non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 23.0
price_blended_usd_1m: 1.54
output_speed_tps: 60.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 54.3, z: 0.56, r: 58.3, estimated: false }  # 전문 지식
  reasoning: { s: 38.2, z: 0.09, r: 51.3, estimated: false }  # 추론
  coding: { s: 59.5, z: 0.81, r: 62.2, estimated: true }  # 코딩
  agentic: { s: 41.8, z: 0.13, r: 52.0, estimated: false }  # 에이전트
  trust: { s: 47.4, z: 0.99, r: 64.9, estimated: false }  # 신뢰성
  multimodal: { s: 78.1, z: 0.36, r: 55.4, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.83, r: 62.5, estimated: false }  # 긴문맥
  instruction: { s: 75.2, z: 0.88, r: 63.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Claude Sonnet 5 (Non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **23.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 60.0 t/s · TTFT 1.06s · 1M ctx` · 가성비 14.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.3 | +0.56 | 실측 | [[aa-omniscience]] 34.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 51.3 | +0.09 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 62.2 | +0.81 | 추정 | (추정) |
| 에이전트 | 52.0 | +0.13 | 실측 | [[gdpval]] 35.0%×1.0, [[tau3-banking]] 16.0%×1.0 |
| 신뢰성 | 64.9 | +0.99 | 실측 | [[aa-omniscience]] 48.0%×1.0 |
| 멀티모달 | 55.4 | +0.36 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 62.5 | +0.83 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 63.2 | +0.88 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
