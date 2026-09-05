---
type: Model
title: Mixtral 8x22B
creator: Mistral
license: Open
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 65400
status: past
size_class: Medium
params_b: 141
is_reasoning: false
radar:
  knowledge: { s: 17.5, z: -1.13, r: 33.1, estimated: false }  # 전문 지식
  reasoning: { s: 16.0, z: -0.92, r: 36.2, estimated: false }  # 추론
  coding: { s: 0.2, z: -1.12, r: 33.3, estimated: true }  # 코딩
  agentic: { s: 2.7, z: -1.33, r: 30.0, estimated: true }  # 에이전트
  trust: { s: 25.0, z: 0.03, r: 50.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 3.5, z: -1.4, r: 29.0, estimated: true }  # 긴문맥
  instruction: { s: 28.7, z: -1.0, r: 35.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mixtral 8x22B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Mixtral 8x22B

Mistral · Open · Medium(141B) · 컨텍스트 65k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 65k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.1 | -1.13 | 실측 | [[gpqa-diamond]] 33.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 36.2 | -0.92 | 실측 | [[gpqa-diamond]] 33.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 33.3 | -1.12 | 추정 | (추정) |
| 에이전트 | 30.0 | -1.33 | 추정 | (추정) |
| 신뢰성 | 50.4 | +0.03 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.0 | -1.4 | 추정 | (추정) |
| 지시 따르기 | 35.0 | -1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
