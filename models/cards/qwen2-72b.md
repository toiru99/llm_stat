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
  knowledge: { s: 20.8, z: -0.95, r: 35.7, estimated: false }  # 전문 지식
  reasoning: { s: 19.0, z: -0.77, r: 38.4, estimated: false }  # 추론
  coding: { s: 38.3, z: -0.34, r: 45.0, estimated: false }  # 코딩
  agentic: { s: 18.9, z: -0.68, r: 39.9, estimated: true }  # 에이전트
  trust: { s: 24.0, z: -0.18, r: 47.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 26.6, z: -0.65, r: 40.2, estimated: true }  # 긴문맥
  instruction: { s: 29.7, z: -0.94, r: 35.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2 72B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-18
timestamp: 2026-07-18T00:00:00Z
---

# Qwen2 72B

Alibaba · Open · Medium(72B) · 컨텍스트 131k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.7 | -0.95 | 실측 | [[gpqa-diamond]] 37.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.4 | -0.77 | 실측 | [[gpqa-diamond]] 37.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 45.0 | -0.34 | 실측 | [[scicode]] 23.0%×1.0 |
| 에이전트 | 39.9 | -0.68 | 추정 | (추정) |
| 신뢰성 | 47.3 | -0.18 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.2 | -0.65 | 추정 | (추정) |
| 지시 따르기 | 35.9 | -0.94 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
