---
type: Model
title: Llama Nemotron Ultra
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 45.3, z: -0.09, r: 48.7, estimated: false }  # 전문 지식
  reasoning: { s: 40.7, z: -0.13, r: 48.1, estimated: false }  # 추론
  coding: { s: 3.5, z: -1.15, r: 32.8, estimated: false }  # 코딩
  agentic: { s: 3.5, z: -1.07, r: 34.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 18.7, z: -1.03, r: 34.5, estimated: true }  # 긴문맥
  instruction: { s: 36.7, z: -0.7, r: 39.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama Nemotron Ultra
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Llama Nemotron Ultra

NVIDIA · Open · Large · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.7 | -0.09 | 실측 | [[gpqa-diamond]] 72.8%×0.4, [[humanitys-last-exam]] 7.4%×0.3 |
| 추론 | 48.1 | -0.13 | 실측 | [[gpqa-diamond]] 72.8%×1.0, [[humanitys-last-exam]] 7.4%×1.0 |
| 코딩 | 32.8 | -1.15 | 실측 | [[terminal-bench]] 2.3%×0.5 |
| 에이전트 | 34.0 | -1.07 | 실측 | [[terminal-bench]] 2.3%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.5 | -1.03 | 추정 | (추정) |
| 지시 따르기 | 39.5 | -0.7 | 실측 | [[ifbench]] 38.2%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
