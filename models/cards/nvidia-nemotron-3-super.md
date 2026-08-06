---
type: Model
title: NVIDIA Nemotron 3 Super
creator: NVIDIA
license: Open
intelligence_index: 25.0
price_blended_usd_1m: 0.26
output_speed_tps: 142.0
context_window: 1000000
status: current
size_class: Medium
params_b: 120.6
is_reasoning: true
radar:
  knowledge: { s: 48.3, z: 0.32, r: 54.8, estimated: false }  # 전문 지식
  reasoning: { s: 42.4, z: 0.39, r: 55.8, estimated: false }  # 추론
  coding: { s: 54.6, z: 0.3, r: 54.5, estimated: false }  # 코딩
  agentic: { s: 25.6, z: -0.41, r: 43.9, estimated: false }  # 에이전트
  trust: { s: 13.8, z: -0.68, r: 39.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.86, r: 62.9, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.23, r: 68.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — NVIDIA Nemotron 3 Super
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# NVIDIA Nemotron 3 Super

NVIDIA · Open · Medium(120.6B) · 컨텍스트 1M · 종합지능 **25.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $0.8 · 혼합 $0.26/1M · 142.0 t/s · TTFT 1.95s · 1M ctx` · 가성비 96.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.8 | +0.32 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 55.8 | +0.39 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 54.5 | +0.3 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 43.9 | -0.41 | 실측 | [[apex-agents]] 2.0%×1.0, [[gdpval]] 10.0%×1.0, [[itbench]] 1.0%×1.0, [[tau2-bench]] 68.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | 39.7 | -0.68 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.9 | +0.86 | 실측 | [[aa-lcr]] 60.0%×1.0 |
| 지시 따르기 | 68.4 | +1.23 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
