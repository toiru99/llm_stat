---
type: Model
title: Gemini 2.5 Pro (Mar)
creator: Google
license: Proprietary
intelligence_index: 23.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.5, z: 1.1, r: 66.5, estimated: false }  # 전문 지식
  reasoning: { s: 59.4, z: 1.34, r: 70.1, estimated: false }  # 추론
  coding: { s: 65.0, z: 0.78, r: 61.7, estimated: false }  # 코딩
  agentic: { s: 59.7, z: 0.9, r: 63.5, estimated: true }  # 에이전트
  trust: { s: 34.9, z: 0.33, r: 54.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.0, z: 0.86, r: 62.9, estimated: true }  # 긴문맥
  instruction: { s: 76.6, z: 0.99, r: 64.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Pro (Mar)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-22
timestamp: 2026-07-22T00:00:00Z
---

# Gemini 2.5 Pro (Mar)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **23.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.5 | +1.1 | 실측 | [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 70.1 | +1.34 | 실측 | [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 61.7 | +0.78 | 실측 | [[scicode]] 39.0%×1.0 |
| 에이전트 | 63.5 | +0.9 | 추정 | (추정) |
| 신뢰성 | 54.9 | +0.33 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.9 | +0.86 | 추정 | (추정) |
| 지시 따르기 | 64.8 | +0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
