---
type: Model
title: Granite 4.1 30B
creator: IBM
license: Open
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 24.4, z: -0.77, r: 38.5, estimated: false }  # 전문 지식
  reasoning: { s: 17.0, z: -0.87, r: 37.0, estimated: false }  # 추론
  coding: { s: 29.9, z: -0.68, r: 39.8, estimated: false }  # 코딩
  agentic: { s: 14.4, z: -0.84, r: 37.4, estimated: false }  # 에이전트
  trust: { s: 4.7, z: -1.09, r: 33.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 25.0, z: -0.69, r: 39.7, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.29, r: 45.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.1 30B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Granite 4.1 30B

IBM · Open · Unknown · 컨텍스트 131k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.5 | -0.77 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 48.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.0 | -0.87 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 48.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 39.8 | -0.68 | 실측 | [[scicode]] 26.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 37.4 | -0.84 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 42.0%×1.0, [[tau3-banking]] 4.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 33.7 | -1.09 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.7 | -0.69 | 실측 | [[aa-lcr]] 19.0%×1.0 |
| 지시 따르기 | 45.6 | -0.29 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
