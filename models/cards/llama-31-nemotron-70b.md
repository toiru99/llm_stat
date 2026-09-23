---
type: Model
title: Llama 3.1 Nemotron 70B
creator: NVIDIA
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 1.2
output_speed_tps: 42.0
context_window: 128000
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 26.5, z: -0.72, r: 39.2, estimated: false }  # 전문 지식
  reasoning: { s: 15.6, z: -0.94, r: 35.8, estimated: false }  # 추론
  coding: { s: 7.6, z: -0.95, r: 35.7, estimated: false }  # 코딩
  agentic: { s: 15.4, z: -0.86, r: 37.1, estimated: false }  # 에이전트
  trust: { s: 27.8, z: 0.1, r: 51.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 9.0, z: -1.26, r: 31.0, estimated: false }  # 긴문맥
  instruction: { s: 26.8, z: -1.12, r: 33.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.1 Nemotron 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Llama 3.1 Nemotron 70B

NVIDIA · Open · Medium · 컨텍스트 128k · 종합지능 **7.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $1.2 · 출력 $1.2 · 혼합 $1.2/1M · 42.0 t/s · TTFT 6.13s · 128k ctx` · 가성비 5.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.2 | -0.72 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 46.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.8 | -0.94 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 46.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 35.7 | -0.95 | 실측 | [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 37.1 | -0.86 | 실측 | [[tau2-bench]] 23.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 51.5 | +0.1 | 실측 | [[aa-omniscience]] 29.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.0 | -1.26 | 실측 | [[aa-lcr]] 8.0%×1.0 |
| 지시 따르기 | 33.3 | -1.12 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
