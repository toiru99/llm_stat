---
type: Model
title: Claude Sonnet 5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 28.0
price_blended_usd_1m: 1.54
output_speed_tps: 59.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 53.6, z: 0.51, r: 57.7, estimated: false }  # 전문 지식
  reasoning: { s: 38.2, z: 0.07, r: 51.1, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.3, r: 69.5, estimated: false }  # 코딩
  agentic: { s: 48.5, z: 0.36, r: 55.4, estimated: false }  # 에이전트
  trust: { s: 28.9, z: 0.1, r: 51.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.94, r: 64.1, estimated: false }  # 긴문맥
  instruction: { s: 74.8, z: 0.85, r: 62.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# Claude Sonnet 5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **28.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 신뢰성, 추론

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 59.0 t/s · TTFT 1.7s · 1M ctx` · 가성비 18.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.7 | +0.51 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 51.1 | +0.07 | 실측 | [[critpt]] 9.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 69.5 | +1.3 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 55.4 | +0.36 | 실측 | [[gdpval]] 33.0%×1.0 |
| 신뢰성 | 51.5 | +0.1 | 실측 | [[aa-omniscience]] 30.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.1 | +0.94 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 62.8 | +0.85 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
