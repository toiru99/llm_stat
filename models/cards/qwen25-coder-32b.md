---
type: Model
title: Qwen2.5 Coder 32B
creator: Alibaba
license: Open
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: past
size_class: Small
params_b: 32
is_reasoning: false
radar:
  knowledge: { s: 23.7, z: -0.83, r: 37.5, estimated: false }  # 전문 지식
  reasoning: { s: 21.4, z: -0.66, r: 40.1, estimated: false }  # 추론
  coding: { s: 43.5, z: -0.15, r: 47.8, estimated: false }  # 코딩
  agentic: { s: 16.8, z: -0.8, r: 38.0, estimated: true }  # 에이전트
  trust: { s: 36.3, z: 0.55, r: 58.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 29.6, z: -0.63, r: 40.6, estimated: true }  # 긴문맥
  instruction: { s: 35.5, z: -0.73, r: 39.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 Coder 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Qwen2.5 Coder 32B

Alibaba · Open · Small(32B) · 컨텍스트 131k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.5 | -0.83 | 실측 | [[gpqa-diamond]] 42.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.1 | -0.66 | 실측 | [[gpqa-diamond]] 42.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 47.8 | -0.15 | 실측 | [[scicode]] 27.0%×1.0 |
| 에이전트 | 38.0 | -0.8 | 추정 | (추정) |
| 신뢰성 | 58.2 | +0.55 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.6 | -0.63 | 추정 | (추정) |
| 지시 따르기 | 39.1 | -0.73 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
