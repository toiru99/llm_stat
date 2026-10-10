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
  knowledge: { s: 19.4, z: -1.08, r: 33.8, estimated: false }  # 전문 지식
  reasoning: { s: 17.4, z: -0.88, r: 36.8, estimated: false }  # 추론
  coding: { s: 4.7, z: -1.1, r: 33.6, estimated: true }  # 코딩
  agentic: { s: 24.2, z: -0.57, r: 41.5, estimated: true }  # 에이전트
  trust: { s: 26.4, z: -0.02, r: 49.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 17.3, z: -1.05, r: 34.3, estimated: true }  # 긴문맥
  instruction: { s: 27.9, z: -1.11, r: 33.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Pro (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# Gemini 1.5 Pro (May)

Google · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.8 | -1.08 | 실측 | [[gpqa-diamond]] 37.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 36.8 | -0.88 | 실측 | [[gpqa-diamond]] 37.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 33.6 | -1.1 | 추정 | (추정) |
| 에이전트 | 41.5 | -0.57 | 추정 | (추정) |
| 신뢰성 | 49.7 | -0.02 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.3 | -1.05 | 추정 | (추정) |
| 지시 따르기 | 33.4 | -1.11 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
