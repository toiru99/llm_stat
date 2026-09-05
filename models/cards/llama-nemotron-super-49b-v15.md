---
type: Model
title: Llama Nemotron Super 49B v1.5
creator: NVIDIA
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.4
output_speed_tps: 18.0
context_window: 128000
status: current
size_class: Medium
params_b: 49
is_reasoning: true
radar:
  knowledge: { s: 34.5, z: -0.31, r: 45.4, estimated: false }  # 전문 지식
  reasoning: { s: 28.6, z: -0.31, r: 45.4, estimated: false }  # 추론
  coding: { s: 7.6, z: -0.86, r: 37.1, estimated: false }  # 코딩
  agentic: { s: 17.9, z: -0.75, r: 38.8, estimated: false }  # 에이전트
  trust: { s: 20.6, z: -0.18, r: 47.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 6.1, z: -1.32, r: 30.1, estimated: true }  # 긴문맥
  instruction: { s: 35.2, z: -0.73, r: 39.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama Nemotron Super 49B v1.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Llama Nemotron Super 49B v1.5

NVIDIA · Open · Medium(49B) · 컨텍스트 128k · 종합지능 **7.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.4 · 출력 $0.4 · 혼합 $0.4/1M · 18.0 t/s · TTFT 31.34s · 128k ctx` · 가성비 17.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.4 | -0.31 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 45.4 | -0.31 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 37.1 | -0.86 | 실측 | [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 38.8 | -0.75 | 실측 | [[tau2-bench]] 28.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 47.3 | -0.18 | 실측 | [[aa-omniscience]] 22.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.1 | -1.32 | 추정 | (추정) |
| 지시 따르기 | 39.1 | -0.73 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
