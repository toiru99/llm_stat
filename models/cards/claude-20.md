---
type: Model
title: Claude 2.0
creator: Anthropic
license: Proprietary
intelligence_index: 6.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 100000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.9, z: -0.71, r: 39.4, estimated: false }  # 전문 지식
  reasoning: { s: 27.9, z: -0.42, r: 43.7, estimated: false }  # 추론
  coding: { s: 36.7, z: -0.04, r: 49.4, estimated: true }  # 코딩
  agentic: { s: 28.0, z: -0.23, r: 46.5, estimated: true }  # 에이전트
  trust: { s: 35.3, z: 0.36, r: 55.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 44.4, z: -0.26, r: 46.1, estimated: true }  # 긴문맥
  instruction: { s: 48.4, z: -0.26, r: 46.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Claude 2.0

Anthropic · Proprietary · Unknown · 컨텍스트 100k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 100k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.4 | -0.71 | 실측 | [[gpqa-diamond]] 34.0%×0.4 |
| 추론 | 43.7 | -0.42 | 실측 | [[gpqa-diamond]] 34.0%×1.0 |
| 코딩 | 49.4 | -0.04 | 추정 | (추정) |
| 에이전트 | 46.5 | -0.23 | 추정 | (추정) |
| 신뢰성 | 55.4 | +0.36 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 46.1 | -0.26 | 추정 | (추정) |
| 지시 따르기 | 46.1 | -0.26 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
