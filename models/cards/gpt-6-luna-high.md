---
type: Model
title: GPT-6 Luna (high)
creator: OpenAI
license: Proprietary
intelligence_index: 21.4795221369633
price_blended_usd_1m: 0.077
output_speed_tps: 125.397728489983
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.5, z: -0.16, r: 47.6, estimated: false }  # 전문 지식
  reasoning: { s: 43.4, z: 0.41, r: 56.1, estimated: false }  # 추론
  coding: { s: 71.4, z: 1.02, r: 65.4, estimated: false }  # 코딩
  agentic: { s: 77.3, z: 1.06, r: 65.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 84.0, z: 0.65, r: 59.7, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 0.97, r: 64.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# GPT-6 Luna (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **21.4795221369633**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 125.397728489983 t/s · TTFT 9.60309186456842s · 1M ctx` · 가성비 279.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 47.6 | -0.16 | 실측 | [[humanitys-last-exam]] 32.9472%×0.3 |
| 추론 | 56.1 | +0.41 | 실측 | [[critpt]] 15.4286%×1.0, [[humanitys-last-exam]] 32.9472%×1.0 |
| 코딩 | 65.4 | +1.02 | 실측 | [[scicode]] 50.3472%×1.0 |
| 에이전트 | 65.9 | +1.06 | 실측 | [[gdpval]] 1350.13 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 59.7 | +0.65 | 실측 | [[mmmu-pro]] 77.5145%×1.0 |
| 긴문맥 | 64.6 | +0.97 | 실측 | [[aa-lcr]] 79.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
