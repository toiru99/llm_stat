---
type: Model
title: GPT-6.1 Sol (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 48.0
price_blended_usd_1m: 1.47
output_speed_tps: 55.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 87.7, z: 2.09, r: 81.3, estimated: false }  # 전문 지식
  reasoning: { s: 83.3, z: 2.13, r: 82.0, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.35, r: 70.3, estimated: false }  # 코딩
  agentic: { s: 69.1, z: 1.13, r: 67.0, estimated: false }  # 에이전트
  trust: { s: 47.4, z: 0.95, r: 64.2, estimated: false }  # 신뢰성
  multimodal: { s: 94.5, z: 1.15, r: 67.3, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.24, r: 68.7, estimated: false }  # 긴문맥
  instruction: { s: 81.5, z: 1.13, r: 66.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-13
timestamp: 2026-10-13T00:00:00Z
---

# GPT-6.1 Sol (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **48.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 55.0 t/s · TTFT 7.64s · 1M ctx` · 가성비 32.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 81.3 | +2.09 | 실측 | [[aa-omniscience]] 60.0%×1.0, [[humanitys-last-exam]] 50.0%×0.3 |
| 추론 | 82.0 | +2.13 | 실측 | [[critpt]] 28.0%×1.0, [[humanitys-last-exam]] 50.0%×1.0 |
| 코딩 | 70.3 | +1.35 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 67.0 | +1.13 | 실측 | [[gdpval]] 47.0%×1.0 |
| 신뢰성 | 64.2 | +0.95 | 실측 | [[aa-omniscience]] 48.0%×1.0 |
| 멀티모달 | 67.3 | +1.15 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 68.7 | +1.24 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 66.9 | +1.13 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
