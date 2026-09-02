---
type: Model
title: Gemini 2.0 Flash Thinking exp. (Jan)
creator: Google
license: Proprietary
intelligence_index: 13.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 44.0, z: 0.19, r: 52.8, estimated: false }  # 전문 지식
  reasoning: { s: 39.6, z: 0.26, r: 53.9, estimated: false }  # 추론
  coding: { s: 53.2, z: 0.28, r: 54.1, estimated: false }  # 코딩
  agentic: { s: 41.1, z: 0.15, r: 52.3, estimated: true }  # 에이전트
  trust: { s: 12.4, z: -0.57, r: 41.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 65.1, z: 0.47, r: 57.0, estimated: true }  # 긴문맥
  instruction: { s: 58.9, z: 0.26, r: 53.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.0 Flash Thinking exp. (Jan)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Gemini 2.0 Flash Thinking exp. (Jan)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **13.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.8 | +0.19 | 실측 | [[gpqa-diamond]] 70.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 53.9 | +0.26 | 실측 | [[gpqa-diamond]] 70.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 54.1 | +0.28 | 실측 | [[scicode]] 33.0%×1.0 |
| 에이전트 | 52.3 | +0.15 | 추정 | (추정) |
| 신뢰성 | 41.5 | -0.57 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.0 | +0.47 | 추정 | (추정) |
| 지시 따르기 | 53.9 | +0.26 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
