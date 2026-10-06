---
type: Model
title: GPT-6 Luna (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 0.077
output_speed_tps: 138.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.2, z: 0.95, r: 64.3, estimated: false }  # 전문 지식
  reasoning: { s: 54.1, z: 0.8, r: 62.0, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.32, r: 69.8, estimated: false }  # 코딩
  agentic: { s: 63.2, z: 0.93, r: 64.0, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.47, r: 43.0, estimated: false }  # 신뢰성
  multimodal: { s: 89.0, z: 0.88, r: 63.2, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.16, r: 67.3, estimated: false }  # 긴문맥
  instruction: { s: 78.2, z: 0.99, r: 64.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# GPT-6 Luna (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 138.0 t/s · TTFT 29.58s · 1M ctx` · 가성비 454.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.3 | +0.95 | 실측 | [[aa-omniscience]] 44.0%×1.0, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 62.0 | +0.8 | 실측 | [[critpt]] 17.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 69.8 | +1.32 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 64.0 | +0.93 | 실측 | [[gdpval]] 43.0%×1.0 |
| 신뢰성 | 43.0 | -0.47 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 63.2 | +0.88 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 67.3 | +1.16 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 64.9 | +0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
