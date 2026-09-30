---
type: Model
title: GPT-6.1 Sol (max)
creator: OpenAI
license: Proprietary
intelligence_index: 52.0
price_blended_usd_1m: 1.47
output_speed_tps: 68.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 91.2, z: 2.27, r: 84.0, estimated: false }  # 전문 지식
  reasoning: { s: 93.3, z: 2.61, r: 89.1, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.46, r: 71.9, estimated: false }  # 코딩
  agentic: { s: 80.6, z: 1.62, r: 74.3, estimated: false }  # 에이전트
  trust: { s: 45.4, z: 0.89, r: 63.4, estimated: false }  # 신뢰성
  multimodal: { s: 97.3, z: 1.32, r: 69.8, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.28, r: 69.1, estimated: false }  # 긴문맥
  instruction: { s: 76.5, z: 0.94, r: 64.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# GPT-6.1 Sol (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **52.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 68.0 t/s · TTFT 239.34s · 1M ctx` · 가성비 35.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 84.0 | +2.27 | 실측 | [[aa-omniscience]] 62.0%×1.0, [[humanitys-last-exam]] 53.0%×0.3 |
| 추론 | 89.1 | +2.61 | 실측 | [[critpt]] 32.0%×1.0, [[humanitys-last-exam]] 53.0%×1.0 |
| 코딩 | 71.9 | +1.46 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 74.3 | +1.62 | 실측 | [[gdpval]] 54.0%×1.0 |
| 신뢰성 | 63.4 | +0.89 | 실측 | [[aa-omniscience]] 46.0%×1.0 |
| 멀티모달 | 69.8 | +1.32 | 실측 | [[mmmu-pro]] 86.0%×1.0 |
| 긴문맥 | 69.1 | +1.28 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 64.1 | +0.94 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
