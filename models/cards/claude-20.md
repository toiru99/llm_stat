---
type: Model
title: Claude 2.0
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 100000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.4, z: -0.89, r: 36.6, estimated: false }  # 전문 지식
  reasoning: { s: 28.4, z: -0.72, r: 39.2, estimated: false }  # 추론
  coding: { s: 27.9, z: -0.33, r: 45.1, estimated: true }  # 코딩
  agentic: { s: 14.1, z: -0.7, r: 39.5, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 24.3, z: -0.86, r: 37.1, estimated: true }  # 긴문맥
  instruction: { s: 33.3, z: -0.84, r: 37.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Claude 2.0

Anthropic · Proprietary · Unknown · 컨텍스트 100k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 100k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.6 | -0.89 | 실측 | [[gpqa-diamond]] 34.4%×0.4 |
| 추론 | 39.2 | -0.72 | 실측 | [[gpqa-diamond]] 34.4%×1.0 |
| 코딩 | 45.1 | -0.33 | 추정 | (추정) |
| 에이전트 | 39.5 | -0.7 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.1 | -0.86 | 추정 | (추정) |
| 지시 따르기 | 37.4 | -0.84 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
