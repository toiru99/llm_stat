---
type: Model
title: Tulu3 405B
creator: Allen Institute for AI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.9, z: -0.89, r: 36.7, estimated: false }  # 전문 지식
  reasoning: { s: 25.7, z: -0.49, r: 42.7, estimated: false }  # 추론
  coding: { s: 24.2, z: -0.54, r: 41.9, estimated: true }  # 코딩
  agentic: { s: 25.4, z: -0.67, r: 39.9, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 36.6, z: -0.51, r: 42.4, estimated: true }  # 긴문맥
  instruction: { s: 34.1, z: -0.83, r: 37.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Tulu3 405B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Tulu3 405B

Allen Institute for AI · Open · Large · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 긴문맥
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.7 | -0.89 | 실측 | [[gpqa-diamond]] 51.616161616161605%×0.4, [[humanitys-last-exam]] 3.2800000000000002%×0.3 |
| 추론 | 42.7 | -0.49 | 실측 | [[gpqa-diamond]] 51.616161616161605%×1.0, [[humanitys-last-exam]] 3.2800000000000002%×1.0 |
| 코딩 | 41.9 | -0.54 | 추정 | (추정) |
| 에이전트 | 39.9 | -0.67 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.4 | -0.51 | 추정 | (추정) |
| 지시 따르기 | 37.6 | -0.83 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
