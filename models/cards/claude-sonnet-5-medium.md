---
type: Model
title: Claude Sonnet 5 (medium)
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
  knowledge: { s: 39.5, z: -0.36, r: 44.6, estimated: false }  # 전문 지식
  reasoning: { s: 39.5, z: -0.18, r: 47.3, estimated: false }  # 추론
  coding: { s: 73.5, z: 1.2, r: 68.0, estimated: false }  # 코딩
  agentic: { s: 62.5, z: 0.94, r: 64.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.9, r: 63.5, estimated: false }  # 긴문맥
  instruction: { s: 46.5, z: -0.27, r: 45.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Claude Sonnet 5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.6 | -0.36 | 실측 | [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 47.3 | -0.18 | 실측 | [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 68.0 | +1.2 | 실측 | [[scicode]] 51.6%×1.0 |
| 에이전트 | 64.1 | +0.94 | 실측 | [[gdpval]] 1167.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.5 | +0.9 | 실측 | [[aa-lcr]] 73.7%×1.0 |
| 지시 따르기 | 45.9 | -0.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
