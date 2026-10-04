---
type: Model
title: Claude Sonnet 5.5 (high with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 47.0
price_blended_usd_1m: 1.54
output_speed_tps: 102.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.0, z: 1.59, r: 73.9, estimated: false }  # 전문 지식
  reasoning: { s: 76.6, z: 1.82, r: 77.3, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.43, r: 71.5, estimated: false }  # 코딩
  agentic: { s: 79.1, z: 1.54, r: 73.1, estimated: false }  # 에이전트
  trust: { s: 34.0, z: 0.35, r: 55.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: 77.8, z: 0.98, r: 64.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (high with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# Claude Sonnet 5.5 (high with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **47.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 102.0 t/s · TTFT 12.2s · 1M ctx` · 가성비 30.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.9 | +1.59 | 실측 | [[aa-omniscience]] 52.0%×1.0, [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 77.3 | +1.82 | 실측 | [[critpt]] 25.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 71.5 | +1.43 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 73.1 | +1.54 | 실측 | [[gdpval]] 53.0%×1.0 |
| 신뢰성 | 55.2 | +0.35 | 실측 | [[aa-omniscience]] 35.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 64.7 | +0.98 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
