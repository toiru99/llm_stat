---
type: Model
title: Claude Sonnet 5 (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 23.0
price_blended_usd_1m: 1.54
output_speed_tps: 59.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 54.3, z: 0.55, r: 58.2, estimated: false }  # 전문 지식
  reasoning: { s: 38.2, z: 0.08, r: 51.2, estimated: false }  # 추론
  coding: { s: 59.5, z: 0.79, r: 61.9, estimated: true }  # 코딩
  agentic: { s: 41.8, z: 0.12, r: 51.8, estimated: false }  # 에이전트
  trust: { s: 47.4, z: 0.97, r: 64.5, estimated: false }  # 신뢰성
  multimodal: { s: 78.1, z: 0.34, r: 55.0, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.82, r: 62.3, estimated: false }  # 긴문맥
  instruction: { s: 75.2, z: 0.87, r: 63.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# Claude Sonnet 5 (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **23.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 59.0 t/s · TTFT 1.06s · 1M ctx` · 가성비 14.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.2 | +0.55 | 실측 | [[aa-omniscience]] 34.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 51.2 | +0.08 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 61.9 | +0.79 | 추정 | (추정) |
| 에이전트 | 51.8 | +0.12 | 실측 | [[gdpval]] 35.0%×1.0, [[tau3-banking]] 16.0%×1.0 |
| 신뢰성 | 64.5 | +0.97 | 실측 | [[aa-omniscience]] 48.0%×1.0 |
| 멀티모달 | 55.0 | +0.34 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 62.3 | +0.82 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 63.0 | +0.87 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
