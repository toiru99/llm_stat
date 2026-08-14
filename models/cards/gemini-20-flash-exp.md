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
  knowledge: { s: 38.7, z: -0.12, r: 48.2, estimated: false }  # 전문 지식
  reasoning: { s: 34.5, z: -0.04, r: 49.4, estimated: false }  # 추론
  coding: { s: 56.7, z: 0.35, r: 55.2, estimated: false }  # 코딩
  agentic: { s: 46.5, z: 0.39, r: 55.8, estimated: true }  # 에이전트
  trust: { s: 43.7, z: 0.74, r: 61.1, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 67.5, z: 0.52, r: 57.8, estimated: true }  # 긴문맥
  instruction: { s: 64.3, z: 0.41, r: 56.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.0 Flash (exp)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
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
| 전문 지식 | 48.2 | -0.12 | 실측 | [[gpqa-diamond]] 64.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 49.4 | -0.04 | 실측 | [[gpqa-diamond]] 64.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 55.2 | +0.35 | 실측 | [[scicode]] 34.0%×1.0 |
| 에이전트 | 55.8 | +0.39 | 추정 | (추정) |
| 신뢰성 | 61.1 | +0.74 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.8 | +0.52 | 추정 | (추정) |
| 지시 따르기 | 56.1 | +0.41 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
