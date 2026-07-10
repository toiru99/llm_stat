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
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 22.6, z: -0.86, r: 37.1, estimated: false }  # 전문 지식
  reasoning: { s: 22.6, z: -0.57, r: 41.5, estimated: false }  # 추론
  coding: { s: 34.8, z: -0.47, r: 42.9, estimated: true }  # 코딩
  agentic: { s: 19.4, z: -0.65, r: 40.3, estimated: true }  # 에이전트
  trust: { s: 37.0, z: 0.44, r: 56.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 13.1, z: -1.04, r: 34.4, estimated: true }  # 긴문맥
  instruction: { s: 25.2, z: -1.11, r: 33.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen1.5 Chat 110B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Qwen1.5 Chat 110B

Alibaba · Open · Unknown · 컨텍스트 32k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.1 | -0.86 | 실측 | [[gpqa-diamond]] 29.0%×0.4 |
| 추론 | 41.5 | -0.57 | 실측 | [[gpqa-diamond]] 29.0%×1.0 |
| 코딩 | 42.9 | -0.47 | 추정 | (추정) |
| 에이전트 | 40.3 | -0.65 | 추정 | (추정) |
| 신뢰성 | 56.6 | +0.44 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.4 | -1.04 | 추정 | (추정) |
| 지시 따르기 | 33.3 | -1.11 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
