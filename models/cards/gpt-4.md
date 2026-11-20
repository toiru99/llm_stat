---
type: Model
title: GPT-4
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 8192
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 29.1, z: -0.88, r: 36.8, estimated: false }  # 전문 지식
  reasoning: { s: 29.1, z: -0.32, r: 45.2, estimated: false }  # 추론
  coding: { s: 34.8, z: -0.18, r: 47.4, estimated: true }  # 코딩
  agentic: { s: 17.2, z: -0.96, r: 35.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 26.5, z: -0.8, r: 37.9, estimated: true }  # 긴문맥
  instruction: { s: 29.6, z: -1.01, r: 34.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# GPT-4

OpenAI · Proprietary · Unknown · 컨텍스트 8k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 8k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.8 | -0.88 | 실측 | [[gpqa-diamond]] 34.949494949494905%×0.4 |
| 추론 | 45.2 | -0.32 | 실측 | [[gpqa-diamond]] 34.949494949494905%×1.0 |
| 코딩 | 47.4 | -0.18 | 추정 | (추정) |
| 에이전트 | 35.6 | -0.96 | 실측 | [[gdpval]] -12.81%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.9 | -0.8 | 추정 | (추정) |
| 지시 따르기 | 34.8 | -1.01 | 실측 | [[ifbench]] 33.197278911564595%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
