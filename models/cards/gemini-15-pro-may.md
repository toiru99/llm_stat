---
type: Model
title: Gemini 1.5 Pro (May)
creator: Google
license: Proprietary
intelligence_index: 6.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 20.0, z: -1.0, r: 35.1, estimated: false }  # 전문 지식
  reasoning: { s: 17.9, z: -0.84, r: 37.5, estimated: false }  # 추론
  coding: { s: 45.0, z: -0.1, r: 48.6, estimated: false }  # 코딩
  agentic: { s: 25.6, z: -0.4, r: 44.0, estimated: true }  # 에이전트
  trust: { s: 17.6, z: -0.4, r: 44.0, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 32.0, z: -0.52, r: 42.2, estimated: true }  # 긴문맥
  instruction: { s: 38.2, z: -0.63, r: 40.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Pro (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# Gemini 1.5 Pro (May)

Google · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.1 | -1.0 | 실측 | [[gpqa-diamond]] 37.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 37.5 | -0.84 | 실측 | [[gpqa-diamond]] 37.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 48.6 | -0.1 | 실측 | [[scicode]] 27.0%×1.0 |
| 에이전트 | 44.0 | -0.4 | 추정 | (추정) |
| 신뢰성 | 44.0 | -0.4 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.2 | -0.52 | 추정 | (추정) |
| 지시 따르기 | 40.5 | -0.63 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
