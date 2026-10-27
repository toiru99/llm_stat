---
type: Model
title: Claude Haiku 5.5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 0.077
output_speed_tps: 174.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 51.7, z: 0.4, r: 55.9, estimated: false }  # 전문 지식
  reasoning: { s: 47.2, z: 0.45, r: 56.8, estimated: false }  # 추론
  coding: { s: 70.0, z: 1.08, r: 66.3, estimated: false }  # 코딩
  agentic: { s: 68.7, z: 1.17, r: 67.6, estimated: false }  # 에이전트
  trust: { s: 54.6, z: 1.24, r: 68.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.01, r: 65.2, estimated: false }  # 긴문맥
  instruction: { s: 75.8, z: 0.91, r: 63.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Claude Haiku 5.5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 174.0 t/s · TTFT 12.88s · 1M ctx` · 가성비 441.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.9 | +0.4 | 실측 | [[aa-omniscience]] 34.0%×1.0, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 56.8 | +0.45 | 실측 | [[critpt]] 13.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 66.3 | +1.08 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 67.6 | +1.17 | 실측 | [[gdpval]] 1283.0%×1.0 |
| 신뢰성 | 68.6 | +1.24 | 실측 | [[aa-omniscience]] 55.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.2 | +1.01 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 63.7 | +0.91 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
