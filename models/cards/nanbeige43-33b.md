---
type: Model
title: Nanbeige4.3-33B
creator: Nanbeige
license: Open
intelligence_index: 20.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 524000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 24.7, z: -1.07, r: 33.9, estimated: true }  # 전문 지식
  reasoning: { s: 20.3, z: -1.12, r: 33.2, estimated: false }  # 추론
  coding: { s: 8.6, z: -0.98, r: 35.4, estimated: true }  # 코딩
  agentic: { s: 9.8, z: -0.85, r: 37.3, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 29.4, z: -0.71, r: 39.4, estimated: true }  # 긴문맥
  instruction: { s: 32.3, z: -0.88, r: 36.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nanbeige4.3-33B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Nanbeige4.3-33B

Nanbeige · Open · Small · 컨텍스트 524k · 종합지능 **20.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 524k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.9 | -1.07 | 추정 | (추정) |
| 추론 | 33.2 | -1.12 | 실측 | [[critpt]] 15.5%×1.0 |
| 코딩 | 35.4 | -0.98 | 추정 | (추정) |
| 에이전트 | 37.3 | -0.85 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.4 | -0.71 | 추정 | (추정) |
| 지시 따르기 | 36.8 | -0.88 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
