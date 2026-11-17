---
type: Model
title: Nemotron 3 Nano
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: 0.065
output_speed_tps: 196.0914740683038
context_window: 1000000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 49.6, z: 0.12, r: 51.8, estimated: false }  # 전문 지식
  reasoning: { s: 30.9, z: -0.22, r: 46.7, estimated: false }  # 추론
  coding: { s: 32.8, z: -0.24, r: 46.5, estimated: false }  # 코딩
  agentic: { s: 25.6, z: -0.66, r: 40.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 42.9, z: -0.31, r: 45.3, estimated: false }  # 긴문맥
  instruction: { s: 82.8, z: 1.22, r: 68.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Nano
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Nemotron 3 Nano

NVIDIA · Open · Small · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.05 · 출력 $0.2 · 혼합 $0.065/1M · 196.0914740683038 t/s · TTFT 1.3366516586300168s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.8 | +0.12 | 실측 | [[gpqa-diamond]] 75.6565656565657%×0.4, [[humanitys-last-exam]] 11.3994439295644%×0.3 |
| 추론 | 46.7 | -0.22 | 실측 | [[critpt]] 0.857142857142857%×1.0, [[gpqa-diamond]] 75.6565656565657%×1.0, [[humanitys-last-exam]] 11.3994439295644%×1.0 |
| 코딩 | 46.5 | -0.24 | 실측 | [[scicode]] 30.555555555555603%×1.0, [[terminal-bench]] 13.6363636363636%×0.5 |
| 에이전트 | 40.1 | -0.66 | 실측 | [[gdpval]] 262.0%×1.0, [[tau2-bench]] 40.935672514619895%×1.0, [[tau3-banking]] 5.97938144329897%×1.0, [[terminal-bench]] 13.6363636363636%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.3 | -0.31 | 실측 | [[aa-lcr]] 38.0%×1.0 |
| 지시 따르기 | 68.3 | +1.22 | 실측 | [[ifbench]] 71.08843537414971%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
