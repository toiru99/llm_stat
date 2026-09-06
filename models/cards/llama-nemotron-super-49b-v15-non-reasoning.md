---
type: Model
title: Llama Nemotron Super 49B v1.5 (Non-reasoning)
creator: NVIDIA
license: Open
intelligence_index: 3.0
price_blended_usd_1m: 0.4
output_speed_tps: 20.0
context_window: 128000
status: current
size_class: Medium
params_b: 49
is_reasoning: false
radar:
  knowledge: { s: 22.7, z: -0.88, r: 36.8, estimated: false }  # 전문 지식
  reasoning: { s: 16.5, z: -0.9, r: 36.6, estimated: false }  # 추론
  coding: { s: 6.1, z: -0.91, r: 36.3, estimated: false }  # 코딩
  agentic: { s: 15.7, z: -0.84, r: 37.5, estimated: false }  # 에이전트
  trust: { s: 32.0, z: 0.35, r: 55.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 28.1, z: -0.65, r: 40.3, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -0.97, r: 35.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama Nemotron Super 49B v1.5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Llama Nemotron Super 49B v1.5 (Non-reasoning)

NVIDIA · Open · Medium(49B) · 컨텍스트 128k · 종합지능 **3.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.4 · 출력 $0.4 · 혼합 $0.4/1M · 20.0 t/s · TTFT 14.7s · 128k ctx` · 가성비 7.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.8 | -0.88 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 48.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 36.6 | -0.9 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 48.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 36.3 | -0.91 | 실측 | [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 37.5 | -0.84 | 실측 | [[tau2-bench]] 25.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 55.3 | +0.35 | 실측 | [[aa-omniscience]] 33.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.3 | -0.65 | 실측 | [[aa-lcr]] 25.0%×1.0 |
| 지시 따르기 | 35.5 | -0.97 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
