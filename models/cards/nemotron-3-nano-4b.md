---
type: Model
title: Nemotron 3 Nano 4B
creator: NVIDIA
license: Open
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Tiny
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 21.2, z: -0.97, r: 35.5, estimated: false }  # 전문 지식
  reasoning: { s: 18.1, z: -0.82, r: 37.7, estimated: false }  # 추론
  coding: { s: 10.6, z: -0.85, r: 37.3, estimated: false }  # 코딩
  agentic: { s: 13.0, z: -0.96, r: 35.7, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.77, r: 38.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 24.7, z: -0.79, r: 38.1, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: 0.46, r: 57.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Nano 4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# Nemotron 3 Nano 4B

NVIDIA · Open · Tiny · 컨텍스트 262k · 종합지능 **7.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.5 | -0.97 | 실측 | [[aa-omniscience]] 10.0%×1.0, [[gpqa-diamond]] 51.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 37.7 | -0.82 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 51.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 37.3 | -0.85 | 실측 | [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 35.7 | -0.96 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 28.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 38.5 | -0.77 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.1 | -0.79 | 실측 | [[aa-lcr]] 22.0%×1.0 |
| 지시 따르기 | 57.0 | +0.46 | 실측 | [[ifbench]] 58.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
