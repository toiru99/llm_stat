---
type: Model
title: GPT-6 Luna (low)
creator: OpenAI
license: Proprietary
intelligence_index: 10.0
price_blended_usd_1m: 0.077
output_speed_tps: 119.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 31.7, z: -0.78, r: 38.3, estimated: false }  # 전문 지식
  reasoning: { s: 22.8, z: -1.04, r: 34.4, estimated: false }  # 추론
  coding: { s: 66.7, z: 0.99, r: 64.9, estimated: false }  # 코딩
  agentic: { s: 55.8, z: 0.74, r: 61.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 83.6, z: 0.57, r: 58.6, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.93, r: 63.9, estimated: false }  # 긴문맥
  instruction: { s: 47.6, z: -0.22, r: 46.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# GPT-6 Luna (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **10.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 119.0 t/s · TTFT 2.43s · 1M ctx` · 가성비 129.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.3 | -0.78 | 실측 | [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 34.4 | -1.04 | 실측 | [[critpt]] 10.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 64.9 | +0.99 | 실측 | [[scicode]] 47.0%×1.0 |
| 에이전트 | 61.2 | +0.74 | 실측 | [[gdpval]] 1041.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.6 | +0.57 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 63.9 | +0.93 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 46.7 | -0.22 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
