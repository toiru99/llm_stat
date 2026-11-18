---
type: Model
title: Inkling 2 Small
creator: Thinking Machines
license: Open
intelligence_index: 30.6286781498958
price_blended_usd_1m: 0.181
output_speed_tps: 116.5014514676663
context_window: 1024000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 58.8, z: 0.55, r: 58.3, estimated: false }  # 전문 지식
  reasoning: { s: 58.8, z: 1.14, r: 67.2, estimated: false }  # 추론
  coding: { s: 74.7, z: 1.18, r: 67.6, estimated: false }  # 코딩
  agentic: { s: 84.1, z: 1.36, r: 70.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 89.4, z: 0.92, r: 63.8, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.2, r: 68.0, estimated: false }  # 긴문맥
  instruction: { s: 66.5, z: 0.53, r: 58.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling 2 Small
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Inkling 2 Small

Thinking Machines · Open · Large · 컨텍스트 1M · 종합지능 **30.6286781498958**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.3 · 출력 $1.0 · 혼합 $0.181/1M · 116.5014514676663 t/s · TTFT 2.7689347094459222s · 1M ctx` · 가성비 169.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.3 | +0.55 | 실측 | [[humanitys-last-exam]] 44.114921223355005%×0.3 |
| 추론 | 67.2 | +1.14 | 실측 | [[humanitys-last-exam]] 44.114921223355005%×1.0 |
| 코딩 | 67.6 | +1.18 | 실측 | [[scicode]] 52.3148148148148%×1.0 |
| 에이전트 | 70.4 | +1.36 | 실측 | [[gdpval]] 1630.23%×1.0, [[tau3-banking]] 40.4123711340206%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 63.8 | +0.92 | 실측 | [[mmmu-pro]] 81.5606936416185%×1.0 |
| 긴문맥 | 68.0 | +1.2 | 실측 | [[aa-lcr]] 83.3333333333333%×1.0 |
| 지시 따르기 | 58.0 | +0.53 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
