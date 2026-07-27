---
type: Model
title: Qwen2 72B
creator: Alibaba
license: Open
intelligence_index: 6.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: past
size_class: Medium
params_b: 72
is_reasoning: false
radar:
  knowledge: { s: 20.8, z: -0.96, r: 35.7, estimated: false }  # 전문 지식
  reasoning: { s: 19.0, z: -0.77, r: 38.4, estimated: false }  # 추론
  coding: { s: 38.3, z: -0.36, r: 44.7, estimated: false }  # 코딩
  agentic: { s: 15.9, z: -0.79, r: 38.1, estimated: true }  # 에이전트
  trust: { s: 24.6, z: -0.16, r: 47.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 20.3, z: -0.86, r: 37.0, estimated: true }  # 긴문맥
  instruction: { s: 29.2, z: -0.99, r: 35.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2 72B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-27
timestamp: 2026-07-27T00:00:00Z
---

# Qwen2 72B

Alibaba · Open · Medium(72B) · 컨텍스트 131k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.7 | -0.96 | 실측 | [[gpqa-diamond]] 37.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.4 | -0.77 | 실측 | [[gpqa-diamond]] 37.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 44.7 | -0.36 | 실측 | [[scicode]] 23.0%×1.0 |
| 에이전트 | 38.1 | -0.79 | 추정 | (추정) |
| 신뢰성 | 47.5 | -0.16 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.0 | -0.86 | 추정 | (추정) |
| 지시 따르기 | 35.2 | -0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
