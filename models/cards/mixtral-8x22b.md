---
type: Model
title: Mixtral 8x22B
creator: Mistral
license: Open
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 65400
status: past
size_class: Medium
params_b: 141
is_reasoning: false
radar:
  knowledge: { s: 17.8, z: -1.14, r: 33.0, estimated: false }  # 전문 지식
  reasoning: { s: 16.3, z: -0.92, r: 36.2, estimated: false }  # 추론
  coding: { s: 31.7, z: -0.67, r: 40.0, estimated: false }  # 코딩
  agentic: { s: 19.3, z: -0.69, r: 39.7, estimated: true }  # 에이전트
  trust: { s: 14.0, z: -0.48, r: 42.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 29.7, z: -0.6, r: 41.0, estimated: true }  # 긴문맥
  instruction: { s: 29.6, z: -0.95, r: 35.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mixtral 8x22B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Mixtral 8x22B

Mistral · Open · Medium(141B) · 컨텍스트 65k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 65k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.0 | -1.14 | 실측 | [[gpqa-diamond]] 33.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 36.2 | -0.92 | 실측 | [[gpqa-diamond]] 33.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 40.0 | -0.67 | 실측 | [[scicode]] 19.0%×1.0 |
| 에이전트 | 39.7 | -0.69 | 추정 | (추정) |
| 신뢰성 | 42.8 | -0.48 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 41.0 | -0.6 | 추정 | (추정) |
| 지시 따르기 | 35.7 | -0.95 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
