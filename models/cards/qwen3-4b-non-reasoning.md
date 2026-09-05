---
type: Model
title: Qwen3 4B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: past
size_class: Tiny
params_b: 4.02
is_reasoning: false
radar:
  knowledge: { s: 21.4, z: -0.94, r: 35.9, estimated: false }  # 전문 지식
  reasoning: { s: 19.2, z: -0.76, r: 38.5, estimated: false }  # 추론
  coding: { s: 11.0, z: -0.74, r: 38.9, estimated: true }  # 코딩
  agentic: { s: 15.3, z: -0.85, r: 37.3, estimated: true }  # 에이전트
  trust: { s: 17.9, z: -0.31, r: 45.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 12.2, z: -1.13, r: 33.0, estimated: true }  # 긴문맥
  instruction: { s: 28.7, z: -1.0, r: 35.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 4B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Qwen3 4B (Non-reasoning)

Alibaba · Open · Tiny(4.02B) · 컨텍스트 32k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.9 | -0.94 | 실측 | [[gpqa-diamond]] 40.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 38.5 | -0.76 | 실측 | [[gpqa-diamond]] 40.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 38.9 | -0.74 | 추정 | (추정) |
| 에이전트 | 37.3 | -0.85 | 추정 | (추정) |
| 신뢰성 | 45.4 | -0.31 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.0 | -1.13 | 추정 | (추정) |
| 지시 따르기 | 35.0 | -1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
