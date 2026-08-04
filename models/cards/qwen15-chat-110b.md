---
type: Model
title: Qwen1.5 Chat 110B
creator: Alibaba
license: Open
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: past
size_class: Medium
params_b: 110
is_reasoning: false
radar:
  knowledge: { s: 22.6, z: -0.88, r: 36.8, estimated: false }  # 전문 지식
  reasoning: { s: 22.6, z: -0.6, r: 41.0, estimated: false }  # 추론
  coding: { s: 34.8, z: -0.51, r: 42.3, estimated: true }  # 코딩
  agentic: { s: 17.4, z: -0.74, r: 38.9, estimated: true }  # 에이전트
  trust: { s: 24.4, z: -0.19, r: 47.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 25.1, z: -0.72, r: 39.2, estimated: true }  # 긴문맥
  instruction: { s: 28.1, z: -1.04, r: 34.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen1.5 Chat 110B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-04
timestamp: 2026-08-04T00:00:00Z
---

# Qwen1.5 Chat 110B

Alibaba · Open · Medium(110B) · 컨텍스트 32k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.8 | -0.88 | 실측 | [[gpqa-diamond]] 29.0%×0.4 |
| 추론 | 41.0 | -0.6 | 실측 | [[gpqa-diamond]] 29.0%×1.0 |
| 코딩 | 42.3 | -0.51 | 추정 | (추정) |
| 에이전트 | 38.9 | -0.74 | 추정 | (추정) |
| 신뢰성 | 47.2 | -0.19 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.2 | -0.72 | 추정 | (추정) |
| 지시 따르기 | 34.5 | -1.04 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
