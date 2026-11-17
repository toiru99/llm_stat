---
type: Model
title: Claude Sonnet 5.5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 54.54133407109
price_blended_usd_1m: 1.47
output_speed_tps: 146.6928056695709
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.6, z: 1.28, r: 69.2, estimated: false }  # 전문 지식
  reasoning: { s: 80.8, z: 2.25, r: 83.8, estimated: false }  # 추론
  coding: { s: 89.0, z: 1.68, r: 75.1, estimated: false }  # 코딩
  agentic: { s: 98.7, z: 1.88, r: 78.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 80.5, z: 1.12, r: 66.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude Sonnet 5.5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **54.54133407109**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 146.6928056695709 t/s · TTFT 278.92179799600234s · 1M ctx` · 가성비 37.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.2 | +1.28 | 실측 | [[humanitys-last-exam]] 54.9582947173309%×0.3 |
| 추론 | 83.8 | +2.25 | 실측 | [[critpt]] 31.4285714285714%×1.0, [[humanitys-last-exam]] 54.9582947173309%×1.0 |
| 코딩 | 75.1 | +1.68 | 실측 | [[scicode]] 60.9953703703704%×1.0 |
| 에이전트 | 78.2 | +1.88 | 실측 | [[gdpval]] 1837.82%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 82.6666666666667%×1.0 |
| 지시 따르기 | 66.8 | +1.12 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
