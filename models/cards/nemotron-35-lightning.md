---
type: Model
title: Nemotron 3.5 Lightning
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0565
output_speed_tps: 302.0
context_window: 1000000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 49.7, z: 0.01, r: 50.2, estimated: false }  # 전문 지식
  reasoning: { s: 45.5, z: -0.01, r: 49.8, estimated: false }  # 추론
  coding: { s: 41.7, z: 0.15, r: 52.3, estimated: false }  # 코딩
  agentic: { s: 26.1, z: -0.28, r: 45.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 67.4, z: 0.45, r: 56.8, estimated: false }  # 긴문맥
  instruction: { s: 59.4, z: 0.28, r: 54.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3.5 Lightning
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Nemotron 3.5 Lightning

NVIDIA · Open · Small · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.06 · 출력 $0.2 · 혼합 $0.0565/1M · 302.0 t/s · TTFT 0.57s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.2 | +0.01 | 실측 | [[gpqa-diamond]] 74.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 49.8 | -0.01 | 실측 | [[gpqa-diamond]] 74.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 52.3 | +0.15 | 실측 | [[scicode]] 32.0%×1.0 |
| 에이전트 | 45.9 | -0.28 | 실측 | [[gdpval]] 646.0%×1.0, [[tau3-banking]] 9.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.8 | +0.45 | 실측 | [[aa-lcr]] 60.0%×1.0 |
| 지시 따르기 | 54.2 | +0.28 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
