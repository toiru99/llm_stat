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
params_b: 692
is_reasoning: true
radar:
  knowledge: { s: 66.8, z: 0.97, r: 64.6, estimated: false }  # 전문 지식
  reasoning: { s: 50.5, z: 0.76, r: 61.4, estimated: false }  # 추론
  coding: { s: 56.0, z: 0.5, r: 57.6, estimated: false }  # 코딩
  agentic: { s: 45.7, z: -0.05, r: 49.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.65, r: 59.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — A.X-K2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# A.X-K2

SK Telecom · Open · Large(692B) · 컨텍스트 262k · 종합지능 **9.04405716512642**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 64.6 | +0.97 | 실측 | [[gpqa-diamond]] 85.6566%×0.4, [[humanitys-last-exam]] 29.5644%×0.3 |
| 추론 | 61.4 | +0.76 | 실측 | [[critpt]] 8.85714%×1.0, [[gpqa-diamond]] 85.6566%×1.0, [[humanitys-last-exam]] 29.5644%×1.0 |
| 코딩 | 57.6 | +0.5 | 실측 | [[scicode]] 40.9722%×1.0 |
| 에이전트 | 49.2 | -0.05 | 실측 | [[gdpval]] 967.21 Elo×1.0, [[tau3-banking]] 16.0825%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.8 | +0.65 | 실측 | [[aa-lcr]] 70%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
