---
type: Model
title: K2 Horizon 375B A23B
creator: MBZUAI Institute of Foundation Models
license: Open
intelligence_index: 38.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 524000
status: current
size_class: Large
params_b: 375
is_reasoning: true
radar:
  knowledge: { s: 46.3, z: 0.26, r: 53.9, estimated: false }  # 전문 지식
  reasoning: { s: 52.9, z: 0.86, r: 62.9, estimated: false }  # 추론
  coding: { s: 59.2, z: 0.94, r: 64.1, estimated: false }  # 코딩
  agentic: { s: 69.2, z: 1.22, r: 68.2, estimated: false }  # 에이전트
  trust: { s: 74.2, z: 2.35, r: 85.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.26, r: 68.8, estimated: false }  # 긴문맥
  instruction: { s: 91.8, z: 1.63, r: 74.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2 Horizon 375B A23B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# K2 Horizon 375B A23B

MBZUAI Institute of Foundation Models · Open · Large(375B) · 컨텍스트 524k · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 524k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.9 | +0.26 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 32.0%×0.3 |
| 추론 | 62.9 | +0.86 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 32.0%×1.0 |
| 코딩 | 64.1 | +0.94 | 실측 | [[scicode]] 43.0%×1.0 |
| 에이전트 | 68.2 | +1.22 | 실측 | [[gdpval]] 46.0%×1.0, [[tau3-banking]] 34.0%×1.0 |
| 신뢰성 | 85.2 | +2.35 | 실측 | [[aa-omniscience]] 74.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.8 | +1.26 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 74.4 | +1.63 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
