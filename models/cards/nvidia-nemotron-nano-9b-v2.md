---
type: Model
title: NVIDIA Nemotron Nano 9B V2
creator: NVIDIA
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.052
output_speed_tps: 20.0
context_window: 131000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 24.6, z: -0.83, r: 37.5, estimated: false }  # 전문 지식
  reasoning: { s: 20.4, z: -0.73, r: 39.0, estimated: false }  # 추론
  coding: { s: 3.0, z: -1.15, r: 32.8, estimated: false }  # 코딩
  agentic: { s: 12.6, z: -1.0, r: 35.0, estimated: false }  # 에이전트
  trust: { s: 39.2, z: 0.59, r: 58.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 25.8, z: -0.78, r: 38.3, estimated: false }  # 긴문맥
  instruction: { s: 22.5, z: -1.32, r: 30.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — NVIDIA Nemotron Nano 9B V2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# NVIDIA Nemotron Nano 9B V2

NVIDIA · Open · Unknown · 컨텍스트 131k · 종합지능 **7.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.04 · 출력 $0.16 · 혼합 $0.052/1M · 20.0 t/s · TTFT 37.05s · 131k ctx` · 가성비 134.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.5 | -0.83 | 실측 | [[aa-omniscience]] 12.0%×1.0, [[gpqa-diamond]] 57.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 39.0 | -0.73 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 32.8 | -1.15 | 실측 | [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 35.0 | -1.0 | 실측 | [[tau2-bench]] 22.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 58.8 | +0.59 | 실측 | [[aa-omniscience]] 40.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.3 | -0.78 | 실측 | [[aa-lcr]] 23.0%×1.0 |
| 지시 따르기 | 30.2 | -1.32 | 실측 | [[ifbench]] 28.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
