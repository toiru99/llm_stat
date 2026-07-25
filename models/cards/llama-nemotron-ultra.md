---
type: Model
title: Llama Nemotron Ultra
creator: NVIDIA
license: Open
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: 53.0
context_window: 128000
status: current
size_class: Large
params_b: 253
is_reasoning: true
radar:
  knowledge: { s: 38.7, z: -0.12, r: 48.2, estimated: false }  # 전문 지식
  reasoning: { s: 29.5, z: -0.24, r: 46.3, estimated: false }  # 추론
  coding: { s: 39.9, z: -0.29, r: 45.6, estimated: false }  # 코딩
  agentic: { s: 7.1, z: -1.13, r: 33.0, estimated: false }  # 에이전트
  trust: { s: 19.5, z: -0.4, r: 43.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 9.2, z: -1.19, r: 32.1, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.68, r: 39.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama Nemotron Ultra
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# Llama Nemotron Ultra

NVIDIA · Open · Large(253B) · 컨텍스트 128k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.6 · 출력 $1.8 · 혼합 $None/1M · 53.0 t/s · TTFT 2.35s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.2 | -0.12 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 46.3 | -0.24 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 45.6 | -0.29 | 실측 | [[scicode]] 35.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 33.0 | -1.13 | 실측 | [[tau2-bench]] 11.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 43.9 | -0.4 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.1 | -1.19 | 실측 | [[aa-lcr]] 7.0%×1.0 |
| 지시 따르기 | 39.8 | -0.68 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
