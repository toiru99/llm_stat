---
type: Model
title: Devstral 2
creator: Mistral
license: Open
intelligence_index: 19.0
price_blended_usd_1m: None
output_speed_tps: 50.0
context_window: 256000
status: current
size_class: Medium
params_b: 125
is_reasoning: false
radar:
  knowledge: { s: 34.4, z: -0.33, r: 45.1, estimated: false }  # 전문 지식
  reasoning: { s: 21.4, z: -0.66, r: 40.1, estimated: false }  # 추론
  coding: { s: 46.3, z: -0.03, r: 49.5, estimated: false }  # 코딩
  agentic: { s: 25.3, z: -0.43, r: 43.5, estimated: false }  # 에이전트
  trust: { s: 16.1, z: -0.57, r: 41.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 39.5, z: -0.3, r: 45.6, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.68, r: 39.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Devstral 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-31
timestamp: 2026-07-31T00:00:00Z
---

# Devstral 2

Mistral · Open · Medium(125B) · 컨텍스트 256k · 종합지능 **19.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $None/1M · 50.0 t/s · TTFT 1.33s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.1 | -0.33 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.1 | -0.66 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 49.5 | -0.03 | 실측 | [[scicode]] 33.0%×1.0, [[terminal-bench]] 19.0%×0.5 |
| 에이전트 | 43.5 | -0.43 | 실측 | [[gdpval]] 12.0%×1.0, [[tau2-bench]] 25.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 19.0%×1.0 |
| 신뢰성 | 41.4 | -0.57 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.6 | -0.3 | 실측 | [[aa-lcr]] 30.0%×1.0 |
| 지시 따르기 | 39.8 | -0.68 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
