---
type: Model
title: Gemini 2.0 Flash-Lite (Preview)
creator: Google
license: Proprietary
intelligence_index: 8.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.3, z: -0.4, r: 43.9, estimated: false }  # 전문 지식
  reasoning: { s: 29.0, z: -0.29, r: 45.7, estimated: false }  # 추론
  coding: { s: 41.7, z: -0.23, r: 46.5, estimated: false }  # 코딩
  agentic: { s: 17.3, z: -0.73, r: 39.0, estimated: true }  # 에이전트
  trust: { s: 19.8, z: -0.3, r: 45.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 19.0, z: -0.91, r: 36.3, estimated: true }  # 긴문맥
  instruction: { s: 35.9, z: -0.73, r: 39.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.0 Flash-Lite (Preview)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-10
timestamp: 2026-08-10T00:00:00Z
---

# Gemini 2.0 Flash-Lite (Preview)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.9 | -0.4 | 실측 | [[gpqa-diamond]] 54.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 45.7 | -0.29 | 실측 | [[gpqa-diamond]] 54.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 46.5 | -0.23 | 실측 | [[scicode]] 25.0%×1.0 |
| 에이전트 | 39.0 | -0.73 | 추정 | (추정) |
| 신뢰성 | 45.5 | -0.3 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.3 | -0.91 | 추정 | (추정) |
| 지시 따르기 | 39.0 | -0.73 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
