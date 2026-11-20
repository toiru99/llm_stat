---
type: Model
title: Nemotron Cascade 2 30B A3B
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.0, z: 0.13, r: 51.9, estimated: false }  # 전문 지식
  reasoning: { s: 30.9, z: -0.23, r: 46.6, estimated: false }  # 추론
  coding: { s: 32.2, z: -0.27, r: 46.0, estimated: false }  # 코딩
  agentic: { s: 38.5, z: -0.22, r: 46.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 44.4, z: -0.27, r: 45.9, estimated: false }  # 긴문맥
  instruction: { s: 95.9, z: 1.76, r: 76.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron Cascade 2 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Nemotron Cascade 2 30B A3B

NVIDIA · Open · Small · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.9 | +0.13 | 실측 | [[gpqa-diamond]] 75.75757575757581%×0.4, [[humanitys-last-exam]] 12.0018535681186%×0.3 |
| 추론 | 46.6 | -0.23 | 실측 | [[critpt]] 0.571428571428571%×1.0, [[gpqa-diamond]] 75.75757575757581%×1.0, [[humanitys-last-exam]] 12.0018535681186%×1.0 |
| 코딩 | 46.0 | -0.27 | 실측 | [[terminal-bench]] 21.2121212121212%×0.5 |
| 에이전트 | 46.7 | -0.22 | 실측 | [[gdpval]] 272.28%×1.0, [[tau2-bench]] 53.2163742690059%×1.0, [[terminal-bench]] 21.2121212121212%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.9 | -0.27 | 실측 | [[aa-lcr]] 39.3333333333333%×1.0 |
| 지시 따르기 | 76.4 | +1.76 | 실측 | [[ifbench]] 80.4081632653061%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
