---
type: Model
title: Gemini 2.0 Flash-Lite (Feb)
creator: Google
license: Proprietary
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.7, z: -0.55, r: 41.8, estimated: false }  # 전문 지식
  reasoning: { s: 27.2, z: -0.42, r: 43.7, estimated: false }  # 추론
  coding: { s: 6.5, z: -1.02, r: 34.6, estimated: true }  # 코딩
  agentic: { s: 16.9, z: -0.83, r: 37.5, estimated: true }  # 에이전트
  trust: { s: 13.0, z: -0.63, r: 40.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 16.3, z: -1.07, r: 34.0, estimated: true }  # 긴문맥
  instruction: { s: 42.5, z: -0.49, r: 42.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.0 Flash-Lite (Feb)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# Gemini 2.0 Flash-Lite (Feb)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 지시 따르기
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.8 | -0.55 | 실측 | [[gpqa-diamond]] 54.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 43.7 | -0.42 | 실측 | [[gpqa-diamond]] 54.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 34.6 | -1.02 | 추정 | (추정) |
| 에이전트 | 37.5 | -0.83 | 추정 | (추정) |
| 신뢰성 | 40.6 | -0.63 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.0 | -1.07 | 추정 | (추정) |
| 지시 따르기 | 42.7 | -0.49 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
