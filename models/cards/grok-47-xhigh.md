---
type: Model
title: Grok 4.7 (xhigh)
creator: SpaceXAI
license: Proprietary
intelligence_index: 46.0
price_blended_usd_1m: 1.35
output_speed_tps: 92.0
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.1, z: 1.25, r: 68.7, estimated: false }  # 전문 지식
  reasoning: { s: 62.3, z: 1.13, r: 67.0, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.53, r: 73.0, estimated: false }  # 코딩
  agentic: { s: 83.4, z: 1.68, r: 75.2, estimated: false }  # 에이전트
  trust: { s: 71.1, z: 1.99, r: 79.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.01, r: 65.2, estimated: false }  # 긴문맥
  instruction: { s: 68.6, z: 0.6, r: 59.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.7 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Grok 4.7 (xhigh)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **46.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 92.0 t/s · TTFT 75.96s · 500k ctx` · 가성비 34.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.7 | +1.25 | 실측 | [[aa-omniscience]] 47.0%×1.0, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 67.0 | +1.13 | 실측 | [[critpt]] 18.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 73.0 | +1.53 | 실측 | [[scicode]] 57.0%×1.0 |
| 에이전트 | 75.2 | +1.68 | 실측 | [[gdpval]] 1722.0%×1.0, [[itbench]] 42.0%×1.0 |
| 신뢰성 | 79.8 | +1.99 | 실측 | [[aa-omniscience]] 71.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.2 | +1.01 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 59.1 | +0.6 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
