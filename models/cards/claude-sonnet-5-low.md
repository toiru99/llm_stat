---
type: Model
title: Claude Sonnet 5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 61.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 35.0, z: -0.63, r: 40.5, estimated: false }  # 전문 지식
  reasoning: { s: 35.0, z: -0.48, r: 42.8, estimated: false }  # 추론
  coding: { s: 71.7, z: 1.16, r: 67.4, estimated: false }  # 코딩
  agentic: { s: 57.6, z: 0.81, r: 62.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 75.3, z: 0.69, r: 60.4, estimated: false }  # 긴문맥
  instruction: { s: 42.5, z: -0.43, r: 43.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Claude Sonnet 5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 61.0 t/s · TTFT 1.12s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.5 | -0.63 | 실측 | [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 42.8 | -0.48 | 실측 | [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 67.4 | +1.16 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 62.1 | +0.81 | 실측 | [[gdpval]] 1076.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.4 | +0.69 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 43.6 | -0.43 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
