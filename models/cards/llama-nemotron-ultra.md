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
  knowledge: { s: 45.4, z: -0.1, r: 48.6, estimated: false }  # 전문 지식
  reasoning: { s: 27.2, z: -0.42, r: 43.8, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.24, r: 31.4, estimated: false }  # 코딩
  agentic: { s: 7.5, z: -1.29, r: 30.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 10.8, z: -1.27, r: 30.9, estimated: true }  # 긴문맥
  instruction: { s: 36.6, z: -0.72, r: 39.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama Nemotron Ultra
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Llama Nemotron Ultra

NVIDIA · Open · Large · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.6 | -0.1 | 실측 | [[gpqa-diamond]] 72.8282828282828%×0.4, [[humanitys-last-exam]] 7.380000000000001%×0.3 |
| 추론 | 43.8 | -0.42 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 72.8282828282828%×1.0, [[humanitys-last-exam]] 7.380000000000001%×1.0 |
| 코딩 | 31.4 | -1.24 | 실측 | [[terminal-bench]] 2.27272727272727%×0.5 |
| 에이전트 | 30.6 | -1.29 | 실측 | [[tau2-bench]] 11.4035087719298%×1.0, [[terminal-bench]] 2.27272727272727%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.9 | -1.27 | 추정 | (추정) |
| 지시 따르기 | 39.1 | -0.72 | 실측 | [[ifbench]] 38.163265306122504%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
