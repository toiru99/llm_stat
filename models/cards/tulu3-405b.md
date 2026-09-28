---
type: Model
title: Tulu3 405B
creator: Allen Institute for AI
license: Open
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 29.3, z: -0.58, r: 41.3, estimated: false }  # 전문 지식
  reasoning: { s: 26.1, z: -0.45, r: 43.3, estimated: false }  # 추론
  coding: { s: 16.1, z: -0.66, r: 40.1, estimated: true }  # 코딩
  agentic: { s: 30.6, z: -0.28, r: 45.8, estimated: true }  # 에이전트
  trust: { s: 17.4, z: -0.39, r: 44.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 45.2, z: -0.17, r: 47.5, estimated: true }  # 긴문맥
  instruction: { s: 43.7, z: -0.41, r: 43.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Tulu3 405B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# Tulu3 405B

Allen Institute for AI · Open · Large · 컨텍스트 128k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.3 | -0.58 | 실측 | [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 43.3 | -0.45 | 실측 | [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 40.1 | -0.66 | 추정 | (추정) |
| 에이전트 | 45.8 | -0.28 | 추정 | (추정) |
| 신뢰성 | 44.2 | -0.39 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.5 | -0.17 | 추정 | (추정) |
| 지시 따르기 | 43.9 | -0.41 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
