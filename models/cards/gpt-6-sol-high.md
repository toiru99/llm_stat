---
type: Model
title: GPT-6 Sol (high)
creator: OpenAI
license: Proprietary
intelligence_index: 42.0
price_blended_usd_1m: 1.54
output_speed_tps: 99.0
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.5, z: 1.66, r: 74.9, estimated: false }  # 전문 지식
  reasoning: { s: 74.9, z: 1.74, r: 76.2, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.49, r: 72.4, estimated: false }  # 코딩
  agentic: { s: 66.2, z: 1.05, r: 65.7, estimated: false }  # 에이전트
  trust: { s: 41.2, z: 0.68, r: 60.2, estimated: false }  # 신뢰성
  multimodal: { s: 91.8, z: 1.02, r: 65.3, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.29, r: 69.4, estimated: false }  # 긴문맥
  instruction: { s: 84.4, z: 1.25, r: 68.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# GPT-6 Sol (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **42.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 99.0 t/s · TTFT 13.57s · 1M ctx` · 가성비 27.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.9 | +1.66 | 실측 | [[aa-omniscience]] 54.0%×1.0, [[humanitys-last-exam]] 44.0%×0.3 |
| 추론 | 76.2 | +1.74 | 실측 | [[critpt]] 25.0%×1.0, [[humanitys-last-exam]] 44.0%×1.0 |
| 코딩 | 72.4 | +1.49 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 65.7 | +1.05 | 실측 | [[gdpval]] 45.0%×1.0 |
| 신뢰성 | 60.2 | +0.68 | 실측 | [[aa-omniscience]] 42.0%×1.0 |
| 멀티모달 | 65.3 | +1.02 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 69.4 | +1.29 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 68.7 | +1.25 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
