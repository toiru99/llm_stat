---
type: Model
title: Gemini 2.0 Flash (exp)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 37.3, z: -0.47, r: 42.9, estimated: false }  # 전문 지식
  reasoning: { s: 33.1, z: -0.5, r: 42.6, estimated: false }  # 추론
  coding: { s: 7.1, z: -1.03, r: 34.6, estimated: true }  # 코딩
  agentic: { s: 6.7, z: -0.96, r: 35.6, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 28.6, z: -0.74, r: 38.9, estimated: true }  # 긴문맥
  instruction: { s: 43.3, z: -0.41, r: 43.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.0 Flash (exp)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Gemini 2.0 Flash (exp)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.9 | -0.47 | 실측 | [[gpqa-diamond]] 63.6%×0.4, [[humanitys-last-exam]] 4.1%×0.3 |
| 추론 | 42.6 | -0.5 | 실측 | [[gpqa-diamond]] 63.6%×1.0, [[humanitys-last-exam]] 4.1%×1.0 |
| 코딩 | 34.6 | -1.03 | 추정 | (추정) |
| 에이전트 | 35.6 | -0.96 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.9 | -0.74 | 추정 | (추정) |
| 지시 따르기 | 43.8 | -0.41 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
