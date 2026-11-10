---
type: Model
title: Gemini 2.0 Flash-Lite (Preview)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 31.1, z: -0.77, r: 38.5, estimated: false }  # 전문 지식
  reasoning: { s: 27.7, z: -0.76, r: 38.6, estimated: false }  # 추론
  coding: { s: 12.7, z: -0.84, r: 37.4, estimated: true }  # 코딩
  agentic: { s: 10.1, z: -0.84, r: 37.5, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 18.7, z: -1.03, r: 34.6, estimated: true }  # 긴문맥
  instruction: { s: 34.5, z: -0.79, r: 38.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.0 Flash-Lite (Preview)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Gemini 2.0 Flash-Lite (Preview)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.5 | -0.77 | 실측 | [[gpqa-diamond]] 54.2%×0.4, [[humanitys-last-exam]] 4.1%×0.3 |
| 추론 | 38.6 | -0.76 | 실측 | [[gpqa-diamond]] 54.2%×1.0, [[humanitys-last-exam]] 4.1%×1.0 |
| 코딩 | 37.4 | -0.84 | 추정 | (추정) |
| 에이전트 | 37.5 | -0.84 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.6 | -1.03 | 추정 | (추정) |
| 지시 따르기 | 38.2 | -0.79 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
