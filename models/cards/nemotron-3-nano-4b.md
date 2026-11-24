---
type: Model
title: Nemotron 3 Nano 4B
creator: NVIDIA
license: Open
intelligence_index: 1.81584603785463
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Tiny
params_b: 4
is_reasoning: true
radar:
  knowledge: { s: 29.7, z: -0.83, r: 37.5, estimated: false }  # 전문 지식
  reasoning: { s: 17.7, z: -0.87, r: 37.0, estimated: false }  # 추론
  coding: { s: 13.5, z: -0.93, r: 36.0, estimated: false }  # 코딩
  agentic: { s: 18.0, z: -1.02, r: 34.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 24.4, z: -1.02, r: 34.7, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: 0.6, r: 58.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Nano 4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Nemotron 3 Nano 4B

NVIDIA · Open · Tiny(4B) · 컨텍스트 262k · 종합지능 **1.81584603785463**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 37.5 | -0.83 | 실측 | [[gpqa-diamond]] 51.3131%×0.4, [[humanitys-last-exam]] 4.86562%×0.3 |
| 추론 | 37.0 | -0.87 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 51.3131%×1.0, [[humanitys-last-exam]] 4.86562%×1.0 |
| 코딩 | 36.0 | -0.93 | 실측 | [[scicode]] 16.088%×1.0, [[terminal-bench]] 6.81818%×0.5 |
| 에이전트 | 34.6 | -1.02 | 실측 | [[gdpval]] -51.62 Elo×1.0, [[tau2-bench]] 28.0702%×1.0, [[terminal-bench]] 6.81818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.7 | -1.02 | 실측 | [[aa-lcr]] 21.6667%×1.0 |
| 지시 따르기 | 58.9 | +0.6 | 실측 | [[ifbench]] 58.2313%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
