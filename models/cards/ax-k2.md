---
type: Model
title: A.X-K2
creator: SK Telecom
license: Open
intelligence_index: 21.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.0, z: 0.13, r: 52.0, estimated: false }  # 전문 지식
  reasoning: { s: 54.7, z: 0.79, r: 61.8, estimated: false }  # 추론
  coding: { s: 56.7, z: 0.63, r: 59.5, estimated: false }  # 코딩
  agentic: { s: 41.4, z: 0.23, r: 53.4, estimated: false }  # 에이전트
  trust: { s: 67.0, z: 1.8, r: 77.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.77, r: 61.6, estimated: false }  # 긴문맥
  instruction: { s: 88.3, z: 1.45, r: 71.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — A.X-K2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# A.X-K2

SK Telecom · Open · Large · 컨텍스트 262k · 종합지능 **21.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.0 | +0.13 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 61.8 | +0.79 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 59.5 | +0.63 | 실측 | [[scicode]] 41.0%×1.0 |
| 에이전트 | 53.4 | +0.23 | 실측 | [[gdpval]] 960.0%×1.0, [[tau3-banking]] 16.0%×1.0 |
| 신뢰성 | 77.0 | +1.8 | 실측 | [[aa-omniscience]] 67.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.6 | +0.77 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 71.7 | +1.45 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
