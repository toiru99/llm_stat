---
type: Model
title: GPT-6 Luna (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 18.4542156192416
price_blended_usd_1m: 0.077
output_speed_tps: 95.05718615389237
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 37.2, z: -0.48, r: 42.8, estimated: false }  # 전문 지식
  reasoning: { s: 33.4, z: -0.1, r: 48.5, estimated: false }  # 추론
  coding: { s: 72.4, z: 1.11, r: 66.7, estimated: false }  # 코딩
  agentic: { s: 73.8, z: 1.01, r: 65.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 84.8, z: 0.69, r: 60.4, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 1.04, r: 65.6, estimated: false }  # 긴문맥
  instruction: { s: 52.1, z: -0.06, r: 49.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-6 Luna (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **18.4542156192416**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 95.05718615389237 t/s · TTFT 5.228601652414236s · 1M ctx` · 가성비 239.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.8 | -0.48 | 실측 | [[humanitys-last-exam]] 28.2669138090825%×0.3 |
| 추론 | 48.5 | -0.1 | 실측 | [[critpt]] 10.5714285714286%×1.0, [[humanitys-last-exam]] 28.2669138090825%×1.0 |
| 코딩 | 66.7 | +1.11 | 실측 | [[scicode]] 50.925925925925895%×1.0 |
| 에이전트 | 65.2 | +1.01 | 실측 | [[gdpval]] 1270.76%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.4 | +0.69 | 실측 | [[mmmu-pro]] 77.8612716763006%×1.0 |
| 긴문맥 | 65.6 | +1.04 | 실측 | [[aa-lcr]] 78.3333333333333%×1.0 |
| 지시 따르기 | 49.0 | -0.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
