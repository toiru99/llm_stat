---
type: Model
title: Gemini 2.5 Flash (Apr)
creator: Google
license: Proprietary
intelligence_index: 18.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 49.1, z: 0.42, r: 56.2, estimated: false }  # 전문 지식
  reasoning: { s: 45.5, z: 0.56, r: 58.4, estimated: false }  # 추론
  coding: { s: 60.0, z: 0.52, r: 57.8, estimated: false }  # 코딩
  agentic: { s: 60.5, z: 0.93, r: 63.9, estimated: true }  # 에이전트
  trust: { s: 49.1, z: 1.18, r: 67.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 74.9, z: 0.79, r: 61.8, estimated: true }  # 긴문맥
  instruction: { s: 74.7, z: 0.94, r: 64.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash (Apr)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Gemini 2.5 Flash (Apr)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **18.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 코딩, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.2 | +0.42 | 실측 | [[gpqa-diamond]] 70.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 58.4 | +0.56 | 실측 | [[gpqa-diamond]] 70.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 57.8 | +0.52 | 실측 | [[scicode]] 36.0%×1.0 |
| 에이전트 | 63.9 | +0.93 | 추정 | (추정) |
| 신뢰성 | 67.7 | +1.18 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.8 | +0.79 | 추정 | (추정) |
| 지시 따르기 | 64.1 | +0.94 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
