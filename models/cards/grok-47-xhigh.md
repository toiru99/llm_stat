---
type: Model
title: Grok 4.7 (xhigh)
creator: SpaceXAI
license: Proprietary
intelligence_index: 46.0
price_blended_usd_1m: 1.35
output_speed_tps: 49.0
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.1, z: 1.35, r: 70.2, estimated: false }  # 전문 지식
  reasoning: { s: 63.1, z: 1.29, r: 69.4, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.68, r: 75.1, estimated: false }  # 코딩
  agentic: { s: 82.0, z: 1.71, r: 75.6, estimated: false }  # 에이전트
  trust: { s: 71.1, z: 2.13, r: 81.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.1, r: 66.4, estimated: false }  # 긴문맥
  instruction: { s: 73.0, z: 0.81, r: 62.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.7 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Grok 4.7 (xhigh)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **46.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 49.0 t/s · TTFT 2.41s · 500k ctx` · 가성비 34.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.2 | +1.35 | 실측 | [[aa-omniscience]] 47.0%×1.0, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 69.4 | +1.29 | 실측 | [[critpt]] 18.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 75.1 | +1.68 | 실측 | [[scicode]] 57.0%×1.0 |
| 에이전트 | 75.6 | +1.71 | 실측 | [[gdpval]] 60.0%×1.0, [[itbench]] 42.0%×1.0 |
| 신뢰성 | 81.9 | +2.13 | 실측 | [[aa-omniscience]] 71.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.4 | +1.1 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 62.2 | +0.81 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
