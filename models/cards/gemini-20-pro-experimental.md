---
type: Model
title: Gemini 2.0 Pro Experimental
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.1, z: -0.5, r: 42.6, estimated: false }  # 전문 지식
  reasoning: { s: 34.4, z: -0.51, r: 42.4, estimated: false }  # 추론
  coding: { s: 23.3, z: -0.46, r: 43.1, estimated: true }  # 코딩
  agentic: { s: 20.4, z: -0.47, r: 42.9, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 37.9, z: -0.43, r: 43.5, estimated: true }  # 긴문맥
  instruction: { s: 45.8, z: -0.29, r: 45.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.0 Pro Experimental
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Gemini 2.0 Pro Experimental

Google · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.6 | -0.5 | 실측 | [[gpqa-diamond]] 62.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 42.4 | -0.51 | 실측 | [[gpqa-diamond]] 62.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 43.1 | -0.46 | 추정 | (추정) |
| 에이전트 | 42.9 | -0.47 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 43.5 | -0.43 | 추정 | (추정) |
| 지시 따르기 | 45.7 | -0.29 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
