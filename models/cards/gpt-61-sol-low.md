---
type: Model
title: GPT-6.1 Sol (low)
creator: OpenAI
license: Proprietary
intelligence_index: 42.0
price_blended_usd_1m: 1.47
output_speed_tps: 60.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.4, z: 1.98, r: 79.7, estimated: false }  # 전문 지식
  reasoning: { s: 77.4, z: 1.86, r: 77.9, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.38, r: 70.7, estimated: false }  # 코딩
  agentic: { s: 59.7, z: 0.8, r: 62.0, estimated: false }  # 에이전트
  trust: { s: 47.4, z: 0.97, r: 64.6, estimated: false }  # 신뢰성
  multimodal: { s: 93.2, z: 1.09, r: 66.3, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.29, r: 69.4, estimated: false }  # 긴문맥
  instruction: { s: 84.2, z: 1.24, r: 68.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# GPT-6.1 Sol (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 60.0 t/s · TTFT 2.61s · 1M ctx` · 가성비 28.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.7 | +1.98 | 실측 | [[aa-omniscience]] 59.0%×1.0, [[humanitys-last-exam]] 47.0%×0.3 |
| 추론 | 77.9 | +1.86 | 실측 | [[critpt]] 25.0%×1.0, [[humanitys-last-exam]] 47.0%×1.0 |
| 코딩 | 70.7 | +1.38 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 62.0 | +0.8 | 실측 | [[gdpval]] 40.0%×1.0 |
| 신뢰성 | 64.6 | +0.97 | 실측 | [[aa-omniscience]] 48.0%×1.0 |
| 멀티모달 | 66.3 | +1.09 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 69.4 | +1.29 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 68.6 | +1.24 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
