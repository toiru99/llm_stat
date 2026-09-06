---
type: Model
title: Gemini 2.5 Pro (Mar)
creator: Google
license: Proprietary
intelligence_index: 17.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.7, z: 1.0, r: 65.0, estimated: false }  # 전문 지식
  reasoning: { s: 57.7, z: 1.09, r: 66.3, estimated: false }  # 추론
  coding: { s: 68.1, z: 1.25, r: 68.8, estimated: true }  # 코딩
  agentic: { s: 53.6, z: 0.62, r: 59.2, estimated: true }  # 에이전트
  trust: { s: 43.2, z: 0.88, r: 63.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.7, z: 1.16, r: 67.4, estimated: true }  # 긴문맥
  instruction: { s: 83.4, z: 1.28, r: 69.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Pro (Mar)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Gemini 2.5 Pro (Mar)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **17.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.0 | +1.0 | 실측 | [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 66.3 | +1.09 | 실측 | [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 68.8 | +1.25 | 추정 | (추정) |
| 에이전트 | 59.2 | +0.62 | 추정 | (추정) |
| 신뢰성 | 63.2 | +0.88 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.4 | +1.16 | 추정 | (추정) |
| 지시 따르기 | 69.2 | +1.28 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
