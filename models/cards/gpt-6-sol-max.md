---
type: Model
title: GPT-6 Sol (max)
creator: OpenAI
license: Proprietary
intelligence_index: 48.0
price_blended_usd_1m: 1.54
output_speed_tps: 110.0
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.1, z: 1.73, r: 76.0, estimated: false }  # 전문 지식
  reasoning: { s: 87.6, z: 2.32, r: 84.8, estimated: false }  # 추론
  coding: { s: 85.0, z: 1.66, r: 74.9, estimated: false }  # 코딩
  agentic: { s: 80.4, z: 1.59, r: 73.8, estimated: false }  # 에이전트
  trust: { s: 39.2, z: 0.59, r: 58.8, estimated: false }  # 신뢰성
  multimodal: { s: 93.2, z: 1.09, r: 66.3, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.29, r: 69.4, estimated: false }  # 긴문맥
  instruction: { s: 76.7, z: 0.93, r: 63.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# GPT-6 Sol (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **48.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 110.0 t/s · TTFT 108.23s · 1M ctx` · 가성비 31.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.0 | +1.73 | 실측 | [[aa-omniscience]] 54.0%×1.0, [[humanitys-last-exam]] 48.0%×0.3 |
| 추론 | 84.8 | +2.32 | 실측 | [[critpt]] 31.0%×1.0, [[humanitys-last-exam]] 48.0%×1.0 |
| 코딩 | 74.9 | +1.66 | 실측 | [[scicode]] 58.0%×1.0 |
| 에이전트 | 73.8 | +1.59 | 실측 | [[gdpval]] 50.0%×1.0, [[itbench]] 49.0%×1.0 |
| 신뢰성 | 58.8 | +0.59 | 실측 | [[aa-omniscience]] 40.0%×1.0 |
| 멀티모달 | 66.3 | +1.09 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 69.4 | +1.29 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 63.9 | +0.93 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
