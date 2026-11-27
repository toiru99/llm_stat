---
type: Model
title: Gemma 4 12B
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: current
size_class: Small
params_b: 12
is_reasoning: true
radar:
  knowledge: { s: 51.8, z: 0.24, r: 53.7, estimated: false }  # 전문 지식
  reasoning: { s: 31.9, z: -0.16, r: 47.6, estimated: false }  # 추론
  coding: { s: 27.6, z: -0.45, r: 43.2, estimated: false }  # 코딩
  agentic: { s: 33.7, z: -0.47, r: 42.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 73.6, z: 0.11, r: 51.6, estimated: false }  # 멀티모달
  long_context: { s: 71.8, z: 0.43, r: 56.5, estimated: false }  # 긴문맥
  instruction: { s: 86.2, z: 1.49, r: 72.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 12B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Gemma 4 12B

Google · Open · Small(12B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 53.7 | +0.24 | 실측 | [[gpqa-diamond]] 75.2525%×0.4, [[humanitys-last-exam]] 15.6627%×0.3 |
| 추론 | 47.6 | -0.16 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 75.2525%×1.0, [[humanitys-last-exam]] 15.6627%×1.0 |
| 코딩 | 43.2 | -0.45 | 실측 | [[terminal-bench]] 18.1818%×0.5 |
| 에이전트 | 42.9 | -0.47 | 실측 | [[gdpval]] 434.63 Elo×1.0, [[tau2-bench]] 36.2573%×1.0, [[terminal-bench]] 18.1818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.6 | +0.11 | 실측 | [[mmmu-pro]] 69.6532%×1.0 |
| 긴문맥 | 56.5 | +0.43 | 실측 | [[aa-lcr]] 63.6667%×1.0 |
| 지시 따르기 | 72.3 | +1.49 | 실측 | [[ifbench]] 73.5374%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
