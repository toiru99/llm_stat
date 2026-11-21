---
type: Model
title: GPT-6 Luna (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 18.4542156192416
price_blended_usd_1m: 0.077
output_speed_tps: 92.7052761016719
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 37.2, z: -0.49, r: 42.6, estimated: false }  # 전문 지식
  reasoning: { s: 33.4, z: -0.11, r: 48.4, estimated: false }  # 추론
  coding: { s: 72.4, z: 1.1, r: 66.5, estimated: false }  # 코딩
  agentic: { s: 73.8, z: 1.0, r: 65.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 84.5, z: 0.67, r: 60.0, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 1.03, r: 65.4, estimated: false }  # 긴문맥
  instruction: { s: 52.1, z: -0.07, r: 48.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# GPT-6 Luna (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **18.4542156192416**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 92.7052761016719 t/s · TTFT 6.01427357596494s · 1M ctx` · 가성비 239.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.6 | -0.49 | 실측 | [[humanitys-last-exam]] 28.2669138090825%×0.3 |
| 추론 | 48.4 | -0.11 | 실측 | [[critpt]] 10.5714285714286%×1.0, [[humanitys-last-exam]] 28.2669138090825%×1.0 |
| 코딩 | 66.5 | +1.1 | 실측 | [[scicode]] 50.925925925925895%×1.0 |
| 에이전트 | 65.0 | +1.0 | 실측 | [[gdpval]] 1270.76%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.0 | +0.67 | 실측 | [[mmmu-pro]] 77.8612716763006%×1.0 |
| 긴문맥 | 65.4 | +1.03 | 실측 | [[aa-lcr]] 78.3333333333333%×1.0 |
| 지시 따르기 | 48.9 | -0.07 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
