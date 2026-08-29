---
type: Model
title: Gemini 2.0 Pro Experimental
creator: Google
license: Proprietary
intelligence_index: 12.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.9, z: -0.09, r: 48.7, estimated: false }  # 전문 지식
  reasoning: { s: 35.2, z: 0.04, r: 50.5, estimated: false }  # 추론
  coding: { s: 51.7, z: 0.17, r: 52.6, estimated: false }  # 코딩
  agentic: { s: 35.1, z: -0.07, r: 49.0, estimated: true }  # 에이전트
  trust: { s: 10.3, z: -0.65, r: 40.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 69.1, z: 0.61, r: 59.1, estimated: true }  # 긴문맥
  instruction: { s: 75.0, z: 0.95, r: 64.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.0 Pro Experimental
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Gemini 2.0 Pro Experimental

Google · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.7 | -0.09 | 실측 | [[gpqa-diamond]] 62.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 50.5 | +0.04 | 실측 | [[gpqa-diamond]] 62.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 52.6 | +0.17 | 실측 | [[scicode]] 31.0%×1.0 |
| 에이전트 | 49.0 | -0.07 | 추정 | (추정) |
| 신뢰성 | 40.2 | -0.65 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.1 | +0.61 | 추정 | (추정) |
| 지시 따르기 | 64.3 | +0.95 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
