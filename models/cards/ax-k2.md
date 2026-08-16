---
type: Model
title: A.X-K2
creator: SK Telecom
license: Open
intelligence_index: 35.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 47.1, z: 0.28, r: 54.2, estimated: false }  # 전문 지식
  reasoning: { s: 57.1, z: 1.06, r: 66.0, estimated: false }  # 추론
  coding: { s: 65.0, z: 0.69, r: 60.3, estimated: false }  # 코딩
  agentic: { s: 38.1, z: 0.06, r: 50.9, estimated: false }  # 에이전트
  trust: { s: 75.6, z: 2.14, r: 82.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 79.5, z: 0.88, r: 63.2, estimated: false }  # 긴문맥
  instruction: { s: 89.0, z: 1.41, r: 71.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — A.X-K2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-16
timestamp: 2026-08-16T00:00:00Z
---

# A.X-K2

SK Telecom · Open · Unknown · 컨텍스트 262k · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.2 | +0.28 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 66.0 | +1.06 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 60.3 | +0.69 | 실측 | [[scicode]] 39.0%×1.0 |
| 에이전트 | 50.9 | +0.06 | 실측 | [[gdpval]] 30.0%×1.0, [[tau3-banking]] 16.0%×1.0 |
| 신뢰성 | 82.1 | +2.14 | 실측 | [[aa-omniscience]] 67.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.2 | +0.88 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 71.2 | +1.41 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
