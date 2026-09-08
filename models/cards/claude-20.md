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
  knowledge: { s: 27.9, z: -0.63, r: 40.6, estimated: false }  # 전문 지식
  reasoning: { s: 27.9, z: -0.34, r: 44.8, estimated: false }  # 추론
  coding: { s: 23.7, z: -0.33, r: 45.0, estimated: true }  # 코딩
  agentic: { s: 37.7, z: 0.01, r: 50.1, estimated: true }  # 에이전트
  trust: { s: 35.9, z: 0.52, r: 57.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 53.3, z: 0.13, r: 52.0, estimated: true }  # 긴문맥
  instruction: { s: 51.1, z: -0.07, r: 49.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-08
timestamp: 2026-09-08T00:00:00Z
---

# Claude 2.0

Anthropic · Proprietary · Unknown · 컨텍스트 100k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 100k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.6 | -0.63 | 실측 | [[gpqa-diamond]] 34.0%×0.4 |
| 추론 | 44.8 | -0.34 | 실측 | [[gpqa-diamond]] 34.0%×1.0 |
| 코딩 | 45.0 | -0.33 | 추정 | (추정) |
| 에이전트 | 50.1 | +0.01 | 추정 | (추정) |
| 신뢰성 | 57.8 | +0.52 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.0 | +0.13 | 추정 | (추정) |
| 지시 따르기 | 49.0 | -0.07 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
