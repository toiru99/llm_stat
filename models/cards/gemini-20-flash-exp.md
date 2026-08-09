---
type: Model
title: Gemini 2.0 Flash (exp)
creator: Google
license: Proprietary
intelligence_index: 11.0
price_blended_usd_1m: 0
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.1, z: -0.08, r: 48.8, estimated: false }  # 전문 지식
  reasoning: { s: 34.9, z: 0.0, r: 50.1, estimated: false }  # 추론
  coding: { s: 56.7, z: 0.39, r: 55.8, estimated: false }  # 코딩
  agentic: { s: 43.2, z: 0.3, r: 54.5, estimated: true }  # 에이전트
  trust: { s: 52.2, z: 1.19, r: 67.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 64.6, z: 0.47, r: 57.0, estimated: true }  # 긴문맥
  instruction: { s: 63.8, z: 0.42, r: 56.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.0 Flash (exp)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-09
timestamp: 2026-08-09T00:00:00Z
---

# Gemini 2.0 Flash (exp)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.8 | -0.08 | 실측 | [[gpqa-diamond]] 64.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 50.1 | +0.0 | 실측 | [[gpqa-diamond]] 64.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 55.8 | +0.39 | 실측 | [[scicode]] 34.0%×1.0 |
| 에이전트 | 54.5 | +0.3 | 추정 | (추정) |
| 신뢰성 | 67.8 | +1.19 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.0 | +0.47 | 추정 | (추정) |
| 지시 따르기 | 56.3 | +0.42 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
