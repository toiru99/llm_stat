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
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 29.7, z: -0.85, r: 37.2, estimated: false }  # 전문 지식
  reasoning: { s: 17.7, z: -0.88, r: 36.8, estimated: false }  # 추론
  coding: { s: 13.5, z: -0.9, r: 36.5, estimated: false }  # 코딩
  agentic: { s: 18.0, z: -0.93, r: 36.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 24.4, z: -0.87, r: 37.0, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: 0.46, r: 56.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Nano 4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Nemotron 3 Nano 4B

NVIDIA · Open · Tiny · 컨텍스트 262k · 종합지능 **1.81584603785463**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.2 | -0.85 | 실측 | [[gpqa-diamond]] 51.3131313131313%×0.4, [[humanitys-last-exam]] 4.86561631139944%×0.3 |
| 추론 | 36.8 | -0.88 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 51.3131313131313%×1.0, [[humanitys-last-exam]] 4.86561631139944%×1.0 |
| 코딩 | 36.5 | -0.9 | 실측 | [[scicode]] 16.087962962963%×1.0, [[terminal-bench]] 6.81818181818182%×0.5 |
| 에이전트 | 36.1 | -0.93 | 실측 | [[gdpval]] -51.62%×1.0, [[tau2-bench]] 28.0701754385965%×1.0, [[terminal-bench]] 6.81818181818182%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.0 | -0.87 | 실측 | [[aa-lcr]] 21.6666666666667%×1.0 |
| 지시 따르기 | 56.8 | +0.46 | 실측 | [[ifbench]] 58.23129251700681%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
