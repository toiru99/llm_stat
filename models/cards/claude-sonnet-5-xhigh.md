---
type: Model
title: Claude Sonnet 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 1.54
output_speed_tps: 63.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.4, z: 0.79, r: 61.9, estimated: false }  # 전문 지식
  reasoning: { s: 55.1, z: 0.86, r: 62.9, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.46, r: 71.9, estimated: false }  # 코딩
  agentic: { s: 62.7, z: 0.93, r: 64.0, estimated: false }  # 에이전트
  trust: { s: 40.2, z: 0.65, r: 59.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.07, r: 66.1, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.74, r: 61.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Claude Sonnet 5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **34.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 63.0 t/s · TTFT 16.42s · 1M ctx` · 가성비 22.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.9 | +0.79 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 62.9 | +0.86 | 실측 | [[critpt]] 15.0%×1.0, [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 71.9 | +1.46 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 64.0 | +0.93 | 실측 | [[gdpval]] 42.0%×1.0 |
| 신뢰성 | 59.8 | +0.65 | 실측 | [[aa-omniscience]] 41.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.1 | +1.07 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 61.1 | +0.74 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
