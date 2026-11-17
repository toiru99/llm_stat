---
type: Model
title: GPT-6.1 Terra (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 45.250051789066
price_blended_usd_1m: 0.735
output_speed_tps: 69.25614662020217
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 58.3, z: 0.54, r: 58.1, estimated: false }  # 전문 지식
  reasoning: { s: 66.3, z: 1.53, r: 73.0, estimated: false }  # 추론
  coding: { s: 76.4, z: 1.25, r: 68.7, estimated: false }  # 코딩
  agentic: { s: 80.2, z: 1.23, r: 68.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 92.7, z: 1.1, r: 66.5, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.15, r: 67.3, estimated: false }  # 긴문맥
  instruction: { s: 70.5, z: 0.7, r: 60.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Terra (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-6.1 Terra (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **45.250051789066**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.735/1M · 69.25614662020217 t/s · TTFT 27.5788710113471s · 1M ctx` · 가성비 61.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.1 | +0.54 | 실측 | [[humanitys-last-exam]] 43.7442075996293%×0.3 |
| 추론 | 73.0 | +1.53 | 실측 | [[critpt]] 26.5714285714286%×1.0, [[humanitys-last-exam]] 43.7442075996293%×1.0 |
| 코딩 | 68.7 | +1.25 | 실측 | [[scicode]] 53.3564814814815%×1.0 |
| 에이전트 | 68.5 | +1.23 | 실측 | [[gdpval]] 1416.43%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.5 | +1.1 | 실측 | [[mmmu-pro]] 83.8150289017341%×1.0 |
| 긴문맥 | 67.3 | +1.15 | 실측 | [[aa-lcr]] 81.6666666666667%×1.0 |
| 지시 따르기 | 60.6 | +0.7 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
