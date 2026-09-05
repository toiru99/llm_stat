---
type: Model
title: Gemini 1.5 Pro (May)
creator: Google
license: Proprietary
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 19.4, z: -1.04, r: 34.5, estimated: false }  # 전문 지식
  reasoning: { s: 17.4, z: -0.85, r: 37.3, estimated: false }  # 추론
  coding: { s: 4.8, z: -0.95, r: 35.7, estimated: true }  # 코딩
  agentic: { s: 23.6, z: -0.53, r: 42.0, estimated: true }  # 에이전트
  trust: { s: 29.2, z: 0.22, r: 53.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 17.3, z: -0.98, r: 35.3, estimated: true }  # 긴문맥
  instruction: { s: 27.9, z: -1.03, r: 34.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Pro (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Gemini 1.5 Pro (May)

Google · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.5 | -1.04 | 실측 | [[gpqa-diamond]] 37.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 37.3 | -0.85 | 실측 | [[gpqa-diamond]] 37.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 35.7 | -0.95 | 추정 | (추정) |
| 에이전트 | 42.0 | -0.53 | 추정 | (추정) |
| 신뢰성 | 53.3 | +0.22 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.3 | -0.98 | 추정 | (추정) |
| 지시 따르기 | 34.5 | -1.03 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
