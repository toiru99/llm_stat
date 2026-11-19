---
type: Model
title: Gemini 2.0 Flash-Lite (Feb)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.2, z: -0.82, r: 37.6, estimated: false }  # 전문 지식
  reasoning: { s: 26.9, z: -0.43, r: 43.5, estimated: false }  # 추론
  coding: { s: 35.3, z: -0.16, r: 47.6, estimated: true }  # 코딩
  agentic: { s: 24.3, z: -0.71, r: 39.3, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 24.3, z: -0.87, r: 37.0, estimated: true }  # 긴문맥
  instruction: { s: 28.4, z: -1.07, r: 34.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.0 Flash-Lite (Feb)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Gemini 2.0 Flash-Lite (Feb)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.6 | -0.82 | 실측 | [[gpqa-diamond]] 53.5353535353535%×0.4, [[humanitys-last-exam]] 3.35%×0.3 |
| 추론 | 43.5 | -0.43 | 실측 | [[gpqa-diamond]] 53.5353535353535%×1.0, [[humanitys-last-exam]] 3.35%×1.0 |
| 코딩 | 47.6 | -0.16 | 추정 | (추정) |
| 에이전트 | 39.3 | -0.71 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.0 | -0.87 | 추정 | (추정) |
| 지시 따르기 | 34.0 | -1.07 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
