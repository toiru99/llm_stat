---
type: Model
title: Claude Sonnet 5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 34.5, z: -0.66, r: 40.2, estimated: false }  # 전문 지식
  reasoning: { s: 34.5, z: -0.49, r: 42.6, estimated: false }  # 추론
  coding: { s: 72.0, z: 1.15, r: 67.3, estimated: false }  # 코딩
  agentic: { s: 57.6, z: 0.8, r: 61.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 75.9, z: 0.69, r: 60.4, estimated: false }  # 긴문맥
  instruction: { s: 46.3, z: -0.28, r: 45.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Claude Sonnet 5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.2 | -0.66 | 실측 | [[humanitys-last-exam]] 21.9%×0.3 |
| 추론 | 42.6 | -0.49 | 실측 | [[humanitys-last-exam]] 21.9%×1.0 |
| 코딩 | 67.3 | +1.15 | 실측 | [[scicode]] 50.1%×1.0 |
| 에이전트 | 61.9 | +0.8 | 실측 | [[gdpval]] 1076.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.4 | +0.69 | 실측 | [[aa-lcr]] 67.3%×1.0 |
| 지시 따르기 | 45.8 | -0.28 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
