---
type: Model
title: Claude Sonnet 5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 70.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.3, z: -0.05, r: 49.3, estimated: false }  # 전문 지식
  reasoning: { s: 48.3, z: 0.12, r: 51.7, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.27, r: 69.1, estimated: false }  # 코딩
  agentic: { s: 62.5, z: 0.98, r: 64.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.93, r: 63.9, estimated: false }  # 긴문맥
  instruction: { s: 45.7, z: -0.3, r: 45.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Claude Sonnet 5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 70.0 t/s · TTFT 2.23s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.3 | -0.05 | 실측 | [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 51.7 | +0.12 | 실측 | [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 69.1 | +1.27 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 64.7 | +0.98 | 실측 | [[gdpval]] 1167.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.9 | +0.93 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 45.5 | -0.3 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
