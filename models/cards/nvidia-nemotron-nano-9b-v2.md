---
type: Model
title: NVIDIA Nemotron Nano 9B V2
creator: NVIDIA
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 0.05
output_speed_tps: 67.0
context_window: 131000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 24.3, z: -0.77, r: 38.4, estimated: false }  # 전문 지식
  reasoning: { s: 21.2, z: -0.64, r: 40.3, estimated: false }  # 추론
  coding: { s: 25.5, z: -0.87, r: 37.0, estimated: false }  # 코딩
  agentic: { s: 12.6, z: -0.91, r: 36.3, estimated: false }  # 에이전트
  trust: { s: 44.7, z: 0.81, r: 62.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 27.6, z: -0.61, r: 40.8, estimated: false }  # 긴문맥
  instruction: { s: 22.5, z: -1.22, r: 31.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — NVIDIA Nemotron Nano 9B V2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# NVIDIA Nemotron Nano 9B V2

NVIDIA · Open · Unknown · 컨텍스트 131k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $0.04 · 출력 $0.16 · 혼합 $0.05/1M · 67.0 t/s · TTFT 4.61s · 131k ctx` · 가성비 180.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.4 | -0.77 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 57.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 40.3 | -0.64 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 37.0 | -0.87 | 실측 | [[scicode]] 22.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 36.3 | -0.91 | 실측 | [[tau2-bench]] 22.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 62.1 | +0.81 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.8 | -0.61 | 실측 | [[aa-lcr]] 21.0%×1.0 |
| 지시 따르기 | 31.7 | -1.22 | 실측 | [[ifbench]] 28.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
