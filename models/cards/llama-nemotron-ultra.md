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
params_b: 253
is_reasoning: true
radar:
  knowledge: { s: 45.4, z: -0.07, r: 49.0, estimated: false }  # 전문 지식
  reasoning: { s: 27.2, z: -0.4, r: 44.0, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.27, r: 31.0, estimated: false }  # 코딩
  agentic: { s: 7.5, z: -1.4, r: 29.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.58, r: 41.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama Nemotron Ultra
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Llama Nemotron Ultra

NVIDIA · Open · Large(253B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 49.0 | -0.07 | 실측 | [[gpqa-diamond]] 72.8283%×0.4, [[humanitys-last-exam]] 7.38%×0.3 |
| 추론 | 44.0 | -0.4 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 72.8283%×1.0, [[humanitys-last-exam]] 7.38%×1.0 |
| 코딩 | 31.0 | -1.27 | 실측 | [[terminal-bench]] 2.27273%×0.5 |
| 에이전트 | 29.0 | -1.4 | 실측 | [[tau2-bench]] 11.4035%×1.0, [[terminal-bench]] 2.27273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | 41.4 | -0.58 | 실측 | [[ifbench]] 38.1633%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
