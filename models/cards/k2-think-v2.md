---
type: Model
title: K2 Think V2
creator: Institute of Foundation Models
license: Open
intelligence_index: 11.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 35.1, z: -0.33, r: 45.0, estimated: false }  # 전문 지식
  reasoning: { s: 28.6, z: -0.35, r: 44.8, estimated: false }  # 추론
  coding: { s: 10.6, z: -0.87, r: 37.0, estimated: false }  # 코딩
  agentic: { s: 12.0, z: -1.01, r: 34.8, estimated: false }  # 에이전트
  trust: { s: 27.8, z: 0.07, r: 51.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 64.0, z: 0.39, r: 55.8, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.74, r: 61.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2 Think V2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# K2 Think V2

Institute of Foundation Models · Open · Medium · 컨텍스트 262k · 종합지능 **11.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.0 | -0.33 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 71.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 44.8 | -0.35 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 71.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 37.0 | -0.87 | 실측 | [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 34.8 | -1.01 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 25.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 51.1 | +0.07 | 실측 | [[aa-omniscience]] 29.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 55.8 | +0.39 | 실측 | [[aa-lcr]] 57.0%×1.0 |
| 지시 따르기 | 61.1 | +0.74 | 실측 | [[ifbench]] 63.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
