---
type: Model
title: Gemini 2.0 Pro Experimental
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
  knowledge: { s: 38.2, z: -0.13, r: 48.1, estimated: false }  # 전문 지식
  reasoning: { s: 34.5, z: -0.02, r: 49.6, estimated: false }  # 추론
  coding: { s: 29.9, z: -0.07, r: 48.9, estimated: true }  # 코딩
  agentic: { s: 34.1, z: -0.13, r: 48.0, estimated: true }  # 에이전트
  trust: { s: 12.0, z: -0.59, r: 41.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 36.0, z: -0.4, r: 43.9, estimated: true }  # 긴문맥
  instruction: { s: 50.6, z: -0.08, r: 48.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.0 Pro Experimental
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Gemini 2.0 Pro Experimental

Google · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.1 | -0.13 | 실측 | [[gpqa-diamond]] 62.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 49.6 | -0.02 | 실측 | [[gpqa-diamond]] 62.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 48.9 | -0.07 | 추정 | (추정) |
| 에이전트 | 48.0 | -0.13 | 추정 | (추정) |
| 신뢰성 | 41.2 | -0.59 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 43.9 | -0.4 | 추정 | (추정) |
| 지시 따르기 | 48.8 | -0.08 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
