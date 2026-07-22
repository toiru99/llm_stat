---
type: Model
title: GPT-3.5 Turbo
creator: OpenAI
license: Proprietary
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 4100
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 23.8, z: -0.81, r: 37.8, estimated: false }  # 전문 지식
  reasoning: { s: 23.8, z: -0.52, r: 42.2, estimated: false }  # 추론
  coding: { s: 33.3, z: -0.55, r: 41.7, estimated: true }  # 코딩
  agentic: { s: 11.5, z: -0.96, r: 35.6, estimated: true }  # 에이전트
  trust: { s: 30.5, z: 0.13, r: 51.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 20.5, z: -0.85, r: 37.2, estimated: true }  # 긴문맥
  instruction: { s: 33.2, z: -0.81, r: 37.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-3.5 Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-22
timestamp: 2026-07-22T00:00:00Z
---

# GPT-3.5 Turbo

OpenAI · Proprietary · Unknown · 컨텍스트 4k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.5 · 출력 $1.5 · 혼합 $None/1M · None t/s · TTFT Nones · 4k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.8 | -0.81 | 실측 | [[gpqa-diamond]] 30.0%×0.4 |
| 추론 | 42.2 | -0.52 | 실측 | [[gpqa-diamond]] 30.0%×1.0 |
| 코딩 | 41.7 | -0.55 | 추정 | (추정) |
| 에이전트 | 35.6 | -0.96 | 추정 | (추정) |
| 신뢰성 | 51.9 | +0.13 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.2 | -0.85 | 추정 | (추정) |
| 지시 따르기 | 37.8 | -0.81 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
