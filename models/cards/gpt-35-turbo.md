---
type: Model
title: GPT-3.5 Turbo
creator: OpenAI
license: Proprietary
intelligence_index: 5.0
price_blended_usd_1m: 0.6
output_speed_tps: None
context_window: 4100
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 23.3, z: -0.88, r: 36.7, estimated: false }  # 전문 지식
  reasoning: { s: 23.3, z: -0.59, r: 41.1, estimated: false }  # 추론
  coding: { s: 11.9, z: -0.82, r: 37.7, estimated: true }  # 코딩
  agentic: { s: 14.7, z: -0.91, r: 36.4, estimated: true }  # 에이전트
  trust: { s: 32.8, z: 0.31, r: 54.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 5.5, z: -1.4, r: 29.0, estimated: true }  # 긴문맥
  instruction: { s: 17.7, z: -1.5, r: 27.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-3.5 Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# GPT-3.5 Turbo

OpenAI · Proprietary · Unknown · 컨텍스트 4k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.5 · 출력 $1.5 · 혼합 $0.6/1M · None t/s · TTFT Nones · 4k ctx` · 가성비 8.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.7 | -0.88 | 실측 | [[gpqa-diamond]] 30.0%×0.4 |
| 추론 | 41.1 | -0.59 | 실측 | [[gpqa-diamond]] 30.0%×1.0 |
| 코딩 | 37.7 | -0.82 | 추정 | (추정) |
| 에이전트 | 36.4 | -0.91 | 추정 | (추정) |
| 신뢰성 | 54.6 | +0.31 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.0 | -1.4 | 추정 | (추정) |
| 지시 따르기 | 27.5 | -1.5 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
