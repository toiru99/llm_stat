---
type: Model
title: GPT-6 Luna (high)
creator: OpenAI
license: Proprietary
intelligence_index: 21.4290170864582
price_blended_usd_1m: 0.077
output_speed_tps: 93.30484272949825
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.5, z: -0.17, r: 47.4, estimated: false }  # 전문 지식
  reasoning: { s: 43.4, z: 0.4, r: 56.0, estimated: false }  # 추론
  coding: { s: 71.4, z: 1.08, r: 66.2, estimated: false }  # 코딩
  agentic: { s: 77.2, z: 1.13, r: 67.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 84.3, z: 0.67, r: 60.0, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.07, r: 66.1, estimated: false }  # 긴문맥
  instruction: { s: 57.8, z: 0.17, r: 52.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-6 Luna (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **21.4290170864582**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 93.30484272949825 t/s · TTFT 10.303399626307057s · 1M ctx` · 가성비 278.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.4 | -0.17 | 실측 | [[humanitys-last-exam]] 32.9471733086191%×0.3 |
| 추론 | 56.0 | +0.4 | 실측 | [[critpt]] 15.4285714285714%×1.0, [[humanitys-last-exam]] 32.9471733086191%×1.0 |
| 코딩 | 66.2 | +1.08 | 실측 | [[scicode]] 50.3472222222222%×1.0 |
| 에이전트 | 67.0 | +1.13 | 실측 | [[gdpval]] 1349.61%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.0 | +0.67 | 실측 | [[mmmu-pro]] 77.514450867052%×1.0 |
| 긴문맥 | 66.1 | +1.07 | 실측 | [[aa-lcr]] 79.3333333333333%×1.0 |
| 지시 따르기 | 52.6 | +0.17 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
