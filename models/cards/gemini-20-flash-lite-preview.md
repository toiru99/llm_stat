---
type: Model
title: Gemini 2.0 Flash-Lite (Preview)
creator: Google
license: Proprietary
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.4, z: -0.39, r: 44.1, estimated: false }  # 전문 지식
  reasoning: { s: 29.1, z: -0.24, r: 46.4, estimated: false }  # 추론
  coding: { s: 41.7, z: -0.19, r: 47.1, estimated: false }  # 코딩
  agentic: { s: 22.2, z: -0.55, r: 41.8, estimated: true }  # 에이전트
  trust: { s: 22.6, z: -0.24, r: 46.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 36.6, z: -0.36, r: 44.6, estimated: true }  # 긴문맥
  instruction: { s: 51.5, z: -0.04, r: 49.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.0 Flash-Lite (Preview)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-20
timestamp: 2026-07-20T00:00:00Z
---

# Gemini 2.0 Flash-Lite (Preview)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.1 | -0.39 | 실측 | [[gpqa-diamond]] 54.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 46.4 | -0.24 | 실측 | [[gpqa-diamond]] 54.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 47.1 | -0.19 | 실측 | [[scicode]] 25.0%×1.0 |
| 에이전트 | 41.8 | -0.55 | 추정 | (추정) |
| 신뢰성 | 46.4 | -0.24 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.6 | -0.36 | 추정 | (추정) |
| 지시 따르기 | 49.4 | -0.04 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
