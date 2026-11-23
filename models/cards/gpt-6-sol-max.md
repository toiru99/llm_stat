---
type: Model
title: GPT-6 Sol (max)
creator: OpenAI
license: Proprietary
intelligence_index: 44.1555010304265
price_blended_usd_1m: 1.54
output_speed_tps: 129.192539006976
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.0, z: 0.8, r: 62.1, estimated: false }  # 전문 지식
  reasoning: { s: 75.2, z: 1.95, r: 79.3, estimated: false }  # 추론
  coding: { s: 83.4, z: 1.47, r: 72.1, estimated: false }  # 코딩
  agentic: { s: 84.5, z: 1.37, r: 70.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 91.3, z: 1.02, r: 65.2, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 78.7, z: 1.04, r: 65.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# GPT-6 Sol (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **44.1555010304265** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 129.192539006976 t/s · TTFT 33.1473718667916s · 1M ctx` · 가성비 28.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.1 | +0.8 | 실측 | [[humanitys-last-exam]] 47.914735866543104%×0.3 |
| 추론 | 79.3 | +1.95 | 실측 | [[critpt]] 30.8571428571429%×1.0, [[humanitys-last-exam]] 47.914735866543104%×1.0 |
| 코딩 | 72.1 | +1.47 | 실측 | [[scicode]] 57.63888888888889%×1.0 |
| 에이전트 | 70.5 | +1.37 | 실측 | [[gdpval]] 1514.01%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.2 | +1.02 | 실측 | [[mmmu-pro]] 82.94797687861269%×1.0 |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 83.6666666666667%×1.0 |
| 지시 따르기 | 65.5 | +1.04 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
