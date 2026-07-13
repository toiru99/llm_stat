---
type: Model
title: Tulu3 405B
creator: Allen Institute for AI
license: Open
intelligence_index: 8.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.2, z: -0.49, r: 42.6, estimated: false }  # 전문 지식
  reasoning: { s: 26.9, z: -0.34, r: 44.8, estimated: false }  # 추론
  coding: { s: 50.0, z: 0.17, r: 52.5, estimated: false }  # 코딩
  agentic: { s: 42.7, z: 0.25, r: 53.8, estimated: true }  # 에이전트
  trust: { s: 43.5, z: 0.73, r: 61.0, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 21.6, z: -0.79, r: 38.1, estimated: true }  # 긴문맥
  instruction: { s: 36.5, z: -0.65, r: 40.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Tulu3 405B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-13
timestamp: 2026-07-13T00:00:00Z
---

# Tulu3 405B

Allen Institute for AI · Open · Unknown · 컨텍스트 128k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.6 | -0.49 | 실측 | [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 44.8 | -0.34 | 실측 | [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 52.5 | +0.17 | 실측 | [[scicode]] 30.0%×1.0 |
| 에이전트 | 53.8 | +0.25 | 추정 | (추정) |
| 신뢰성 | 61.0 | +0.73 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.1 | -0.79 | 추정 | (추정) |
| 지시 따르기 | 40.2 | -0.65 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
