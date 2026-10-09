---
type: Model
title: Claude Sonnet 5.5 (medium with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 41.0
price_blended_usd_1m: 1.47
output_speed_tps: 99.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.0, z: 1.22, r: 68.3, estimated: false }  # 전문 지식
  reasoning: { s: 59.1, z: 1.02, r: 65.3, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.36, r: 70.4, estimated: false }  # 코딩
  agentic: { s: 60.3, z: 0.81, r: 62.1, estimated: false }  # 에이전트
  trust: { s: 48.5, z: 1.0, r: 65.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 1.01, r: 65.1, estimated: false }  # 긴문맥
  instruction: { s: 78.4, z: 1.0, r: 65.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (medium with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# Claude Sonnet 5.5 (medium with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **41.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 99.0 t/s · TTFT 1.87s · 1M ctx` · 가성비 27.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.3 | +1.22 | 실측 | [[aa-omniscience]] 47.0%×1.0, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 65.3 | +1.02 | 실측 | [[critpt]] 17.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 70.4 | +1.36 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 62.1 | +0.81 | 실측 | [[gdpval]] 41.0%×1.0 |
| 신뢰성 | 65.0 | +1.0 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.1 | +1.01 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 65.0 | +1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
