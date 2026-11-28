---
type: Model
title: Claude Haiku 5.5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 24.6013254343023
price_blended_usd_1m: 0.077
output_speed_tps: 222.891307687095
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 44.7, z: -0.1, r: 48.5, estimated: false }  # 전문 지식
  reasoning: { s: 40.3, z: 0.26, r: 53.9, estimated: false }  # 추론
  coding: { s: 69.1, z: 0.95, r: 64.2, estimated: false }  # 코딩
  agentic: { s: 74.3, z: 0.95, r: 64.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.2, z: 0.9, r: 63.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Claude Haiku 5.5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **24.6013254343023**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 222.891307687095 t/s · TTFT 9.76978939683107s · 1M ctx` · 가성비 319.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 48.5 | -0.1 | 실측 | [[humanitys-last-exam]] 33.7813%×0.3 |
| 추론 | 53.9 | +0.26 | 실측 | [[critpt]] 12.8571%×1.0, [[humanitys-last-exam]] 33.7813%×1.0 |
| 코딩 | 64.2 | +0.95 | 실측 | [[scicode]] 48.9583%×1.0 |
| 에이전트 | 64.3 | +0.95 | 실측 | [[gdpval]] 1282.93 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.6 | +0.9 | 실측 | [[aa-lcr]] 77.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
