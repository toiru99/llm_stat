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
  knowledge: { s: 30.7, z: -0.56, r: 41.7, estimated: false }  # 전문 지식
  reasoning: { s: 27.2, z: -0.43, r: 43.6, estimated: false }  # 추론
  coding: { s: 6.5, z: -1.03, r: 34.5, estimated: true }  # 코딩
  agentic: { s: 16.9, z: -0.85, r: 37.3, estimated: true }  # 에이전트
  trust: { s: 13.0, z: -0.64, r: 40.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 16.3, z: -1.08, r: 33.8, estimated: true }  # 긴문맥
  instruction: { s: 42.5, z: -0.5, r: 42.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.0 Flash-Lite (Feb)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
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
| 전문 지식 | 41.7 | -0.56 | 실측 | [[gpqa-diamond]] 54.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 43.6 | -0.43 | 실측 | [[gpqa-diamond]] 54.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 34.5 | -1.03 | 추정 | (추정) |
| 에이전트 | 37.3 | -0.85 | 추정 | (추정) |
| 신뢰성 | 40.4 | -0.64 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.8 | -1.08 | 추정 | (추정) |
| 지시 따르기 | 42.6 | -0.5 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
