---
type: Model
title: GPT-6 Sol (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 29.0
price_blended_usd_1m: 1.54
output_speed_tps: 79.0
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 58.2, z: 0.72, r: 60.8, estimated: false }  # 전문 지식
  reasoning: { s: 20.4, z: -0.73, r: 39.0, estimated: false }  # 추론
  coding: { s: 66.7, z: 1.04, r: 65.5, estimated: false }  # 코딩
  agentic: { s: 56.7, z: 0.68, r: 60.3, estimated: false }  # 에이전트
  trust: { s: 14.4, z: -0.56, r: 41.6, estimated: false }  # 신뢰성
  multimodal: { s: 75.3, z: 0.2, r: 53.0, estimated: false }  # 멀티모달
  long_context: { s: 71.9, z: 0.61, r: 59.2, estimated: false }  # 긴문맥
  instruction: { s: 58.9, z: 0.19, r: 52.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# GPT-6 Sol (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **29.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 신뢰성, 추론

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 79.0 t/s · TTFT 1.01s · 1M ctx` · 가성비 18.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.8 | +0.72 | 실측 | [[aa-omniscience]] 45.0%×1.0, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 39.0 | -0.73 | 실측 | [[critpt]] 4.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 65.5 | +1.04 | 실측 | [[scicode]] 47.0%×1.0 |
| 에이전트 | 60.3 | +0.68 | 실측 | [[gdpval]] 38.0%×1.0 |
| 신뢰성 | 41.6 | -0.56 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | 53.0 | +0.2 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 59.2 | +0.61 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 52.9 | +0.19 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
