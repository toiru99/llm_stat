---
type: Model
title: GPT-6 Sol (high)
creator: OpenAI
license: Proprietary
intelligence_index: 43.0
price_blended_usd_1m: 1.54
output_speed_tps: 83.0
context_window: 872000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.5, z: 1.74, r: 76.2, estimated: false }  # 전문 지식
  reasoning: { s: 74.9, z: 1.85, r: 77.7, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.56, r: 73.4, estimated: false }  # 코딩
  agentic: { s: 65.7, z: 1.08, r: 66.1, estimated: false }  # 에이전트
  trust: { s: 41.2, z: 0.73, r: 60.9, estimated: false }  # 신뢰성
  multimodal: { s: 90.4, z: 1.01, r: 65.1, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.34, r: 70.0, estimated: false }  # 긴문맥
  instruction: { s: 85.0, z: 1.31, r: 69.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# GPT-6 Sol (high)

OpenAI · Proprietary · Unknown · 컨텍스트 872k · 종합지능 **43.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 83.0 t/s · TTFT 9.21s · 872k ctx` · 가성비 27.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.2 | +1.74 | 실측 | [[aa-omniscience]] 54.0%×1.0, [[humanitys-last-exam]] 44.0%×0.3 |
| 추론 | 77.7 | +1.85 | 실측 | [[critpt]] 25.0%×1.0, [[humanitys-last-exam]] 44.0%×1.0 |
| 코딩 | 73.4 | +1.56 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 66.1 | +1.08 | 실측 | [[gdpval]] 44.0%×1.0 |
| 신뢰성 | 60.9 | +0.73 | 실측 | [[aa-omniscience]] 42.0%×1.0 |
| 멀티모달 | 65.1 | +1.01 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 70.0 | +1.34 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 69.6 | +1.31 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
