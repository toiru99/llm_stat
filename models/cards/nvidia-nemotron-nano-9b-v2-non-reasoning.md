---
type: Model
title: NVIDIA Nemotron Nano 9B V2 (Non-reasoning)
creator: NVIDIA
license: Open
intelligence_index: 2.0
price_blended_usd_1m: 0.0645
output_speed_tps: 134.0
context_window: 131000
status: current
size_class: Small
params_b: 9
is_reasoning: false
radar:
  knowledge: { s: 22.6, z: -0.88, r: 36.7, estimated: false }  # 전문 지식
  reasoning: { s: 20.1, z: -0.72, r: 39.2, estimated: false }  # 추론
  coding: { s: 1.5, z: -1.07, r: 34.0, estimated: false }  # 코딩
  agentic: { s: 12.4, z: -0.96, r: 35.6, estimated: false }  # 에이전트
  trust: { s: 24.7, z: 0.01, r: 50.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 27.0, z: -0.68, r: 39.8, estimated: false }  # 긴문맥
  instruction: { s: 21.1, z: -1.32, r: 30.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — NVIDIA Nemotron Nano 9B V2 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# NVIDIA Nemotron Nano 9B V2 (Non-reasoning)

NVIDIA · Open · Small(9B) · 컨텍스트 131k · 종합지능 **2.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.05 · 출력 $0.2 · 혼합 $0.0645/1M · 134.0 t/s · TTFT 2.06s · 131k ctx` · 가성비 31.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.7 | -0.88 | 실측 | [[aa-omniscience]] 10.0%×1.0, [[gpqa-diamond]] 56.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 39.2 | -0.72 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 56.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 34.0 | -1.07 | 실측 | [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 35.6 | -0.96 | 실측 | [[tau2-bench]] 23.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 50.2 | +0.01 | 실측 | [[aa-omniscience]] 26.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.8 | -0.68 | 실측 | [[aa-lcr]] 24.0%×1.0 |
| 지시 따르기 | 30.3 | -1.32 | 실측 | [[ifbench]] 27.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
