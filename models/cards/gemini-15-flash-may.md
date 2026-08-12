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
  knowledge: { s: 17.3, z: -1.13, r: 33.1, estimated: false }  # 전문 지식
  reasoning: { s: 15.9, z: -0.94, r: 35.8, estimated: false }  # 추론
  coding: { s: 30.0, z: -0.72, r: 39.2, estimated: false }  # 코딩
  agentic: { s: 15.9, z: -0.8, r: 38.0, estimated: true }  # 에이전트
  trust: { s: 13.5, z: -0.58, r: 41.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 28.9, z: -0.63, r: 40.6, estimated: true }  # 긴문맥
  instruction: { s: 31.1, z: -0.93, r: 36.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Flash (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Gemini 1.5 Flash (May)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.1 | -1.13 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.8 | -0.94 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 39.2 | -0.72 | 실측 | [[scicode]] 18.0%×1.0 |
| 에이전트 | 38.0 | -0.8 | 추정 | (추정) |
| 신뢰성 | 41.3 | -0.58 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.6 | -0.63 | 추정 | (추정) |
| 지시 따르기 | 36.1 | -0.93 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
