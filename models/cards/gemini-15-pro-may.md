---
type: Model
title: Gemini 1.5 Pro (May)
creator: Google
license: Proprietary
intelligence_index: 6.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 20.8, z: -0.95, r: 35.7, estimated: false }  # 전문 지식
  reasoning: { s: 19.0, z: -0.77, r: 38.4, estimated: false }  # 추론
  coding: { s: 45.0, z: -0.05, r: 49.2, estimated: false }  # 코딩
  agentic: { s: 22.6, z: -0.53, r: 42.0, estimated: true }  # 에이전트
  trust: { s: 22.1, z: -0.26, r: 46.0, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 29.5, z: -0.57, r: 41.4, estimated: true }  # 긴문맥
  instruction: { s: 32.2, z: -0.84, r: 37.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Pro (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-19
timestamp: 2026-07-19T00:00:00Z
---

# Gemini 1.5 Pro (May)

Google · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.7 | -0.95 | 실측 | [[gpqa-diamond]] 37.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.4 | -0.77 | 실측 | [[gpqa-diamond]] 37.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 49.2 | -0.05 | 실측 | [[scicode]] 27.0%×1.0 |
| 에이전트 | 42.0 | -0.53 | 추정 | (추정) |
| 신뢰성 | 46.0 | -0.26 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 41.4 | -0.57 | 추정 | (추정) |
| 지시 따르기 | 37.5 | -0.84 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
