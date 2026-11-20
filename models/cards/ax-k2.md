---
type: Model
title: A.X-K2
creator: SK Telecom
license: Open
intelligence_index: 9.04405716512642
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.8, z: 0.94, r: 64.1, estimated: false }  # 전문 지식
  reasoning: { s: 50.5, z: 0.73, r: 61.0, estimated: false }  # 추론
  coding: { s: 56.0, z: 0.54, r: 58.1, estimated: false }  # 코딩
  agentic: { s: 45.7, z: 0.03, r: 50.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.75, r: 61.3, estimated: false }  # 긴문맥
  instruction: { s: 74.2, z: 0.85, r: 62.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — A.X-K2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# A.X-K2

SK Telecom · Open · Large · 컨텍스트 262k · 종합지능 **9.04405716512642**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.1 | +0.94 | 실측 | [[gpqa-diamond]] 85.6565656565657%×0.4, [[humanitys-last-exam]] 29.5644114921223%×0.3 |
| 추론 | 61.0 | +0.73 | 실측 | [[critpt]] 8.857142857142861%×1.0, [[gpqa-diamond]] 85.6565656565657%×1.0, [[humanitys-last-exam]] 29.5644114921223%×1.0 |
| 코딩 | 58.1 | +0.54 | 실측 | [[scicode]] 40.9722222222222%×1.0 |
| 에이전트 | 50.4 | +0.03 | 실측 | [[gdpval]] 967.42%×1.0, [[tau3-banking]] 16.0824742268041%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.3 | +0.75 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 62.8 | +0.85 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
