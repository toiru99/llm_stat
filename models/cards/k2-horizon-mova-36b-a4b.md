---
type: Model
title: K2 Horizon MoVA 36B A4B
creator: Institute of Foundation Models
license: Open
intelligence_index: 13.8458943758068
price_blended_usd_1m: None
output_speed_tps: None
context_window: 524288
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.0, z: 0.66, r: 59.9, estimated: false }  # 전문 지식
  reasoning: { s: 40.2, z: 0.23, r: 53.4, estimated: false }  # 추론
  coding: { s: 54.5, z: 0.49, r: 57.3, estimated: false }  # 코딩
  agentic: { s: 66.3, z: 0.74, r: 61.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.8, z: 0.81, r: 62.1, estimated: false }  # 긴문맥
  instruction: { s: 73.7, z: 0.83, r: 62.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2 Horizon MoVA 36B A4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# K2 Horizon MoVA 36B A4B

Institute of Foundation Models · Open · Small · 컨텍스트 524k · 종합지능 **13.8458943758068**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 524k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.9 | +0.66 | 실측 | [[gpqa-diamond]] 82.2222222222222%×0.4, [[humanitys-last-exam]] 23.4476367006487%×0.3 |
| 추론 | 53.4 | +0.23 | 실측 | [[critpt]] 2.28571428571429%×1.0, [[gpqa-diamond]] 82.2222222222222%×1.0, [[humanitys-last-exam]] 23.4476367006487%×1.0 |
| 코딩 | 57.3 | +0.49 | 실측 | [[scicode]] 40.046296296296305%×1.0 |
| 에이전트 | 61.1 | +0.74 | 실측 | [[gdpval]] 1197.58%×1.0, [[tau3-banking]] 31.958762886597903%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.1 | +0.81 | 실측 | [[aa-lcr]] 71.6666666666667%×1.0 |
| 지시 따르기 | 62.4 | +0.83 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
