---
type: Model
title: Gemini 2.5 Pro (May)
creator: Google
license: Proprietary
intelligence_index: 22.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 60.5, z: 0.91, r: 63.7, estimated: false }  # 전문 지식
  reasoning: { s: 56.3, z: 1.1, r: 66.6, estimated: false }  # 추론
  coding: { s: 70.0, z: 0.97, r: 64.5, estimated: false }  # 코딩
  agentic: { s: 63.1, z: 1.03, r: 65.5, estimated: true }  # 에이전트
  trust: { s: 41.1, z: 0.61, r: 59.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.4, z: 1.04, r: 65.6, estimated: true }  # 긴문맥
  instruction: { s: 72.1, z: 0.79, r: 61.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Pro (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# Gemini 2.5 Pro (May)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **22.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 긴문맥
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.7 | +0.91 | 실측 | [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 66.6 | +1.1 | 실측 | [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 64.5 | +0.97 | 실측 | [[scicode]] 42.0%×1.0 |
| 에이전트 | 65.5 | +1.03 | 추정 | (추정) |
| 신뢰성 | 59.2 | +0.61 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.6 | +1.04 | 추정 | (추정) |
| 지시 따르기 | 61.8 | +0.79 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
