---
type: Model
title: GPT-6 Luna (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 18.4542156192416
price_blended_usd_1m: 0.077
output_speed_tps: 118.255050671252
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 37.2, z: -0.47, r: 43.0, estimated: false }  # 전문 지식
  reasoning: { s: 33.4, z: -0.09, r: 48.7, estimated: false }  # 추론
  coding: { s: 72.4, z: 1.06, r: 65.8, estimated: false }  # 코딩
  agentic: { s: 73.7, z: 0.94, r: 64.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 84.5, z: 0.67, r: 60.0, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 0.94, r: 64.1, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# GPT-6 Luna (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **18.4542156192416**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 118.255050671252 t/s · TTFT 5.02176240428429s · 1M ctx` · 가성비 239.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 43.0 | -0.47 | 실측 | [[humanitys-last-exam]] 28.2669%×0.3 |
| 추론 | 48.7 | -0.09 | 실측 | [[critpt]] 10.5714%×1.0, [[humanitys-last-exam]] 28.2669%×1.0 |
| 코딩 | 65.8 | +1.06 | 실측 | [[scicode]] 50.9259%×1.0 |
| 에이전트 | 64.0 | +0.94 | 실측 | [[gdpval]] 1270.63 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.0 | +0.67 | 실측 | [[mmmu-pro]] 77.8613%×1.0 |
| 긴문맥 | 64.1 | +0.94 | 실측 | [[aa-lcr]] 78.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
