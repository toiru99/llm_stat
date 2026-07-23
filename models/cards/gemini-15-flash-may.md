---
type: Model
title: Gemini 1.5 Flash (May)
creator: Google
license: Proprietary
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 17.4, z: -1.12, r: 33.3, estimated: false }  # 전문 지식
  reasoning: { s: 16.0, z: -0.93, r: 36.1, estimated: false }  # 추론
  coding: { s: 30.0, z: -0.69, r: 39.6, estimated: false }  # 코딩
  agentic: { s: 15.9, z: -0.79, r: 38.1, estimated: true }  # 에이전트
  trust: { s: 30.6, z: 0.16, r: 52.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 21.4, z: -0.83, r: 37.6, estimated: true }  # 긴문맥
  instruction: { s: 30.0, z: -0.94, r: 35.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Flash (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-23
timestamp: 2026-07-23T00:00:00Z
---

# Gemini 1.5 Flash (May)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.3 | -1.12 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 36.1 | -0.93 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 39.6 | -0.69 | 실측 | [[scicode]] 18.0%×1.0 |
| 에이전트 | 38.1 | -0.79 | 추정 | (추정) |
| 신뢰성 | 52.3 | +0.16 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.6 | -0.83 | 추정 | (추정) |
| 지시 따르기 | 35.8 | -0.94 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
