---
type: Model
title: Gemini 2.5 Flash (Apr)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 47.7, z: -0.08, r: 48.9, estimated: false }  # 전문 지식
  reasoning: { s: 44.1, z: -0.07, r: 48.9, estimated: false }  # 추론
  coding: { s: 26.3, z: -0.36, r: 44.6, estimated: true }  # 코딩
  agentic: { s: 28.8, z: -0.18, r: 47.2, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 58.2, z: 0.18, r: 52.7, estimated: true }  # 긴문맥
  instruction: { s: 40.0, z: -0.53, r: 42.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash (Apr)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# Gemini 2.5 Flash (Apr)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 추론
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.9 | -0.08 | 실측 | [[gpqa-diamond]] 70.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 48.9 | -0.07 | 실측 | [[gpqa-diamond]] 70.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 44.6 | -0.36 | 추정 | (추정) |
| 에이전트 | 47.2 | -0.18 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.7 | +0.18 | 추정 | (추정) |
| 지시 따르기 | 42.0 | -0.53 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
