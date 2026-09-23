---
type: Model
title: Devstral 2
creator: Mistral
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 0
output_speed_tps: 136.0
context_window: 256000
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.7, z: -0.43, r: 43.6, estimated: false }  # 전문 지식
  reasoning: { s: 20.7, z: -0.71, r: 39.4, estimated: false }  # 추론
  coding: { s: 38.5, z: 0.12, r: 51.8, estimated: false }  # 코딩
  agentic: { s: 19.6, z: -0.7, r: 39.5, estimated: false }  # 에이전트
  trust: { s: 13.4, z: -0.57, r: 41.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 36.0, z: -0.45, r: 43.3, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.71, r: 39.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Devstral 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Devstral 2

Mistral · Open · Medium · 컨텍스트 256k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 136.0 t/s · TTFT 2.31s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.6 | -0.43 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.4 | -0.71 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 51.8 | +0.12 | 실측 | [[scicode]] 33.0%×1.0, [[terminal-bench]] 19.0%×0.5 |
| 에이전트 | 39.5 | -0.7 | 실측 | [[gdpval]] 2.0%×1.0, [[tau2-bench]] 25.0%×1.0, [[tau3-banking]] 11.0%×1.0, [[terminal-bench]] 19.0%×1.0 |
| 신뢰성 | 41.4 | -0.57 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 43.3 | -0.45 | 실측 | [[aa-lcr]] 32.0%×1.0 |
| 지시 따르기 | 39.4 | -0.71 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
