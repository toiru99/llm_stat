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
  knowledge: { s: 23.8, z: -0.82, r: 37.8, estimated: false }  # 전문 지식
  reasoning: { s: 23.8, z: -0.53, r: 42.1, estimated: false }  # 추론
  coding: { s: 33.3, z: -0.57, r: 41.5, estimated: true }  # 코딩
  agentic: { s: 9.4, z: -1.04, r: 34.3, estimated: true }  # 에이전트
  trust: { s: 33.1, z: 0.23, r: 53.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 20.5, z: -0.86, r: 37.1, estimated: true }  # 긴문맥
  instruction: { s: 33.2, z: -0.82, r: 37.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-3.5 Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
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
| 전문 지식 | 37.8 | -0.82 | 실측 | [[gpqa-diamond]] 30.0%×0.4 |
| 추론 | 42.1 | -0.53 | 실측 | [[gpqa-diamond]] 30.0%×1.0 |
| 코딩 | 41.5 | -0.57 | 추정 | (추정) |
| 에이전트 | 34.3 | -1.04 | 추정 | (추정) |
| 신뢰성 | 53.5 | +0.23 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.1 | -0.86 | 추정 | (추정) |
| 지시 따르기 | 37.7 | -0.82 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
