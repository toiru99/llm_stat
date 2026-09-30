---
type: Model
title: Claude Sonnet 5.5 (high with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 47.0
price_blended_usd_1m: 1.54
output_speed_tps: 93.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.0, z: 1.61, r: 74.1, estimated: false }  # 전문 지식
  reasoning: { s: 76.6, z: 1.84, r: 77.6, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.46, r: 71.9, estimated: false }  # 코딩
  agentic: { s: 76.1, z: 1.45, r: 71.7, estimated: false }  # 에이전트
  trust: { s: 34.0, z: 0.36, r: 55.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.1, r: 66.6, estimated: false }  # 긴문맥
  instruction: { s: 77.7, z: 0.98, r: 64.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (high with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Claude Sonnet 5.5 (high with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **47.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 93.0 t/s · TTFT 13.07s · 1M ctx` · 가성비 30.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.1 | +1.61 | 실측 | [[aa-omniscience]] 52.0%×1.0, [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 77.6 | +1.84 | 실측 | [[critpt]] 25.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 71.9 | +1.46 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 71.7 | +1.45 | 실측 | [[gdpval]] 51.0%×1.0 |
| 신뢰성 | 55.5 | +0.36 | 실측 | [[aa-omniscience]] 35.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.6 | +1.1 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 64.8 | +0.98 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
