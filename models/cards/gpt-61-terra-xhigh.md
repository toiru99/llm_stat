---
type: Model
title: GPT-6.1 Terra (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 45.0
price_blended_usd_1m: 0.735
output_speed_tps: 91.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.9, z: 1.42, r: 71.4, estimated: false }  # 전문 지식
  reasoning: { s: 76.7, z: 1.79, r: 76.8, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.31, r: 69.6, estimated: false }  # 코딩
  agentic: { s: 75.8, z: 1.42, r: 71.2, estimated: false }  # 에이전트
  trust: { s: 57.7, z: 1.38, r: 70.7, estimated: false }  # 신뢰성
  multimodal: { s: 94.5, z: 1.12, r: 66.8, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.18, r: 67.7, estimated: false }  # 긴문맥
  instruction: { s: 69.3, z: 0.63, r: 59.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Terra (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# GPT-6.1 Terra (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **45.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.735/1M · 91.0 t/s · TTFT 13.32s · 1M ctx` · 가성비 61.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.4 | +1.42 | 실측 | [[aa-omniscience]] 50.0%×1.0, [[humanitys-last-exam]] 44.0%×0.3 |
| 추론 | 76.8 | +1.79 | 실측 | [[critpt]] 27.0%×1.0, [[humanitys-last-exam]] 44.0%×1.0 |
| 코딩 | 69.6 | +1.31 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 71.2 | +1.42 | 실측 | [[gdpval]] 1415.0%×1.0 |
| 신뢰성 | 70.7 | +1.38 | 실측 | [[aa-omniscience]] 58.0%×1.0 |
| 멀티모달 | 66.8 | +1.12 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 67.7 | +1.18 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 59.5 | +0.63 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
