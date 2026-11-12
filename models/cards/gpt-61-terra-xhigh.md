---
type: Model
title: GPT-6.1 Terra (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 45.0
price_blended_usd_1m: 0.735
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 58.2, z: 0.54, r: 58.2, estimated: false }  # 전문 지식
  reasoning: { s: 68.6, z: 1.25, r: 68.8, estimated: false }  # 추론
  coding: { s: 76.5, z: 1.3, r: 69.5, estimated: false }  # 코딩
  agentic: { s: 75.8, z: 1.39, r: 70.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.2, z: 1.1, r: 66.5, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.17, r: 67.6, estimated: false }  # 긴문맥
  instruction: { s: 71.7, z: 0.81, r: 62.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Terra (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# GPT-6.1 Terra (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **45.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.735/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 61.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.2 | +0.54 | 실측 | [[humanitys-last-exam]] 43.7%×0.3 |
| 추론 | 68.8 | +1.25 | 실측 | [[critpt]] 60.5%×1.0, [[humanitys-last-exam]] 43.7%×1.0 |
| 코딩 | 69.5 | +1.3 | 실측 | [[scicode]] 53.4%×1.0 |
| 에이전트 | 70.9 | +1.39 | 실측 | [[gdpval]] 1415.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.5 | +1.1 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 67.6 | +1.17 | 실측 | [[aa-lcr]] 81.7%×1.0 |
| 지시 따르기 | 62.2 | +0.81 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
