---
type: Model
title: GPT-3.5 Turbo
creator: OpenAI
license: Proprietary
intelligence_index: 3.0
price_blended_usd_1m: 0.6
output_speed_tps: None
context_window: 4100
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 23.5, z: -0.84, r: 37.4, estimated: false }  # 전문 지식
  reasoning: { s: 23.5, z: -0.58, r: 41.3, estimated: false }  # 추론
  coding: { s: 28.3, z: -0.82, r: 37.7, estimated: true }  # 코딩
  agentic: { s: 10.6, z: -1.03, r: 34.6, estimated: true }  # 에이전트
  trust: { s: 30.3, z: 0.13, r: 52.0, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 23.0, z: -0.83, r: 37.5, estimated: true }  # 긴문맥
  instruction: { s: 34.6, z: -0.8, r: 38.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-3.5 Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# GPT-3.5 Turbo

OpenAI · Proprietary · Unknown · 컨텍스트 4k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $0.5 · 출력 $1.5 · 혼합 $0.6/1M · None t/s · TTFT Nones · 4k ctx` · 가성비 5.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.4 | -0.84 | 실측 | [[gpqa-diamond]] 30.0%×0.4 |
| 추론 | 41.3 | -0.58 | 실측 | [[gpqa-diamond]] 30.0%×1.0 |
| 코딩 | 37.7 | -0.82 | 추정 | (추정) |
| 에이전트 | 34.6 | -1.03 | 추정 | (추정) |
| 신뢰성 | 52.0 | +0.13 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.5 | -0.83 | 추정 | (추정) |
| 지시 따르기 | 38.0 | -0.8 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
