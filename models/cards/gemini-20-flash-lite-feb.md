---
type: Model
title: Gemini 2.0 Flash-Lite (Feb)
creator: Google
license: Proprietary
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 31.2, z: -0.47, r: 42.9, estimated: false }  # 전문 지식
  reasoning: { s: 27.7, z: -0.34, r: 44.9, estimated: false }  # 추론
  coding: { s: 41.7, z: -0.25, r: 46.3, estimated: false }  # 코딩
  agentic: { s: 30.9, z: -0.23, r: 46.5, estimated: true }  # 에이전트
  trust: { s: 30.3, z: 0.29, r: 54.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 18.8, z: -0.94, r: 35.9, estimated: true }  # 긴문맥
  instruction: { s: 29.5, z: -0.96, r: 35.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.0 Flash-Lite (Feb)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Gemini 2.0 Flash-Lite (Feb)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.9 | -0.47 | 실측 | [[gpqa-diamond]] 54.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 44.9 | -0.34 | 실측 | [[gpqa-diamond]] 54.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 46.3 | -0.25 | 실측 | [[scicode]] 25.0%×1.0 |
| 에이전트 | 46.5 | -0.23 | 추정 | (추정) |
| 신뢰성 | 54.4 | +0.29 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.9 | -0.94 | 추정 | (추정) |
| 지시 따르기 | 35.6 | -0.96 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
