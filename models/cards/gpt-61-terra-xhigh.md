---
type: Model
title: GPT-6.1 Terra (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 45.250051789066
price_blended_usd_1m: 0.735
output_speed_tps: 68.1125647468586
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 58.3, z: 0.56, r: 58.4, estimated: false }  # 전문 지식
  reasoning: { s: 66.3, z: 1.55, r: 73.2, estimated: false }  # 추론
  coding: { s: 76.4, z: 1.19, r: 67.9, estimated: false }  # 코딩
  agentic: { s: 80.2, z: 1.17, r: 67.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 92.4, z: 1.07, r: 66.1, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.05, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Terra (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# GPT-6.1 Terra (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **45.250051789066**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.735/1M · 68.1125647468586 t/s · TTFT 33.1078692027069s · 1M ctx` · 가성비 61.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 58.4 | +0.56 | 실측 | [[humanitys-last-exam]] 43.7442%×0.3 |
| 추론 | 73.2 | +1.55 | 실측 | [[critpt]] 26.5714%×1.0, [[humanitys-last-exam]] 43.7442%×1.0 |
| 코딩 | 67.9 | +1.19 | 실측 | [[scicode]] 53.3565%×1.0 |
| 에이전트 | 67.5 | +1.17 | 실측 | [[gdpval]] 1416.62 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.1 | +1.07 | 실측 | [[mmmu-pro]] 83.815%×1.0 |
| 긴문맥 | 65.8 | +1.05 | 실측 | [[aa-lcr]] 81.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
