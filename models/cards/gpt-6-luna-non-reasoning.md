---
type: Model
title: GPT-6 Luna (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 9.44244373619813
price_blended_usd_1m: 0.077
output_speed_tps: 98.008973082285
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 10.3, z: -1.78, r: 23.4, estimated: false }  # 전문 지식
  reasoning: { s: 6.7, z: -1.41, r: 28.8, estimated: false }  # 추론
  coding: { s: 59.4, z: 0.62, r: 59.3, estimated: false }  # 코딩
  agentic: { s: 64.1, z: 0.6, r: 59.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.5, z: -0.41, r: 43.9, estimated: false }  # 멀티모달
  long_context: { s: 44.7, z: -0.4, r: 44.0, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GPT-6 Luna (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **9.44244373619813**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 98.008973082285 t/s · TTFT 1.27467082466921s · 1M ctx` · 가성비 122.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 23.4 | -1.78 | 실측 | [[humanitys-last-exam]] 8.57275%×0.3 |
| 추론 | 28.8 | -1.41 | 실측 | [[critpt]] 1.14286%×1.0, [[humanitys-last-exam]] 8.57275%×1.0 |
| 코딩 | 59.3 | +0.62 | 실측 | [[scicode]] 43.0556%×1.0 |
| 에이전트 | 59.0 | +0.6 | 실측 | [[gdpval]] 1052.06 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 43.9 | -0.41 | 실측 | [[mmmu-pro]] 62.0809%×1.0 |
| 긴문맥 | 44.0 | -0.4 | 실측 | [[aa-lcr]] 39.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
