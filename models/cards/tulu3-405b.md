---
type: Model
title: Tulu3 405B
creator: Allen Institute for AI
license: Open
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 405
is_reasoning: false
radar:
  knowledge: { s: 29.4, z: -0.56, r: 41.7, estimated: false }  # 전문 지식
  reasoning: { s: 26.1, z: -0.43, r: 43.6, estimated: false }  # 추론
  coding: { s: 15.2, z: -0.59, r: 41.2, estimated: true }  # 코딩
  agentic: { s: 27.2, z: -0.39, r: 44.1, estimated: true }  # 에이전트
  trust: { s: 25.0, z: 0.03, r: 50.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 43.7, z: -0.16, r: 47.5, estimated: true }  # 긴문맥
  instruction: { s: 40.8, z: -0.49, r: 42.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Tulu3 405B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Tulu3 405B

Allen Institute for AI · Open · Large(405B) · 컨텍스트 128k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.7 | -0.56 | 실측 | [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 43.6 | -0.43 | 실측 | [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 41.2 | -0.59 | 추정 | (추정) |
| 에이전트 | 44.1 | -0.39 | 추정 | (추정) |
| 신뢰성 | 50.4 | +0.03 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.5 | -0.16 | 추정 | (추정) |
| 지시 따르기 | 42.6 | -0.49 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
