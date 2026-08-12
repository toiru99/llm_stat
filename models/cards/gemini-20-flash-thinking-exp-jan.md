---
type: Model
title: Gemini 2.0 Flash Thinking exp. (Jan)
creator: Google
license: Proprietary
intelligence_index: 13.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 44.8, z: 0.19, r: 52.9, estimated: false }  # 전문 지식
  reasoning: { s: 40.3, z: 0.27, r: 54.1, estimated: false }  # 추론
  coding: { s: 55.0, z: 0.32, r: 54.7, estimated: false }  # 코딩
  agentic: { s: 36.8, z: 0.03, r: 50.5, estimated: true }  # 에이전트
  trust: { s: 12.1, z: -0.65, r: 40.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 64.1, z: 0.44, r: 56.7, estimated: true }  # 긴문맥
  instruction: { s: 64.5, z: 0.45, r: 56.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.0 Flash Thinking exp. (Jan)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Gemini 2.0 Flash Thinking exp. (Jan)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **13.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.9 | +0.19 | 실측 | [[gpqa-diamond]] 70.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 54.1 | +0.27 | 실측 | [[gpqa-diamond]] 70.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 54.7 | +0.32 | 실측 | [[scicode]] 33.0%×1.0 |
| 에이전트 | 50.5 | +0.03 | 추정 | (추정) |
| 신뢰성 | 40.3 | -0.65 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.7 | +0.44 | 추정 | (추정) |
| 지시 따르기 | 56.7 | +0.45 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
