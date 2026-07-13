---
type: Model
title: Gemini 2.5 Pro (Mar)
creator: Google
license: Proprietary
intelligence_index: 23.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.5, z: 1.12, r: 66.9, estimated: false }  # 전문 지식
  reasoning: { s: 59.4, z: 1.38, r: 70.6, estimated: false }  # 추론
  coding: { s: 65.0, z: 0.81, r: 62.1, estimated: false }  # 코딩
  agentic: { s: 59.0, z: 0.89, r: 63.3, estimated: true }  # 에이전트
  trust: { s: 47.7, z: 0.93, r: 63.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.6, z: 1.1, r: 66.6, estimated: true }  # 긴문맥
  instruction: { s: 75.2, z: 0.94, r: 64.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Pro (Mar)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-13
timestamp: 2026-07-13T00:00:00Z
---

# Gemini 2.5 Pro (Mar)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **23.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.9 | +1.12 | 실측 | [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 70.6 | +1.38 | 실측 | [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 62.1 | +0.81 | 실측 | [[scicode]] 39.0%×1.0 |
| 에이전트 | 63.3 | +0.89 | 추정 | (추정) |
| 신뢰성 | 63.9 | +0.93 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.6 | +1.1 | 추정 | (추정) |
| 지시 따르기 | 64.1 | +0.94 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
