---
type: Model
title: Grok 4.7 (xhigh)
creator: SpaceXAI
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 1.35
output_speed_tps: None
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.7, z: 0.9, r: 63.5, estimated: false }  # 전문 지식
  reasoning: { s: 58.1, z: 0.57, r: 58.5, estimated: false }  # 추론
  coding: { s: 84.2, z: 1.56, r: 73.4, estimated: false }  # 코딩
  agentic: { s: 83.4, z: 1.68, r: 75.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.01, r: 65.2, estimated: false }  # 긴문맥
  instruction: { s: 61.3, z: 0.36, r: 55.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.7 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Grok 4.7 (xhigh)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · None t/s · TTFT Nones · 500k ctx` · 가성비 25.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.5 | +0.9 | 실측 | [[humanitys-last-exam]] 43.1%×0.3 |
| 추론 | 58.5 | +0.57 | 실측 | [[critpt]] 33.5%×1.0, [[humanitys-last-exam]] 43.1%×1.0 |
| 코딩 | 73.4 | +1.56 | 실측 | [[scicode]] 57.4%×1.0 |
| 에이전트 | 75.1 | +1.68 | 실측 | [[gdpval]] 1718.0%×1.0, [[itbench]] 42.1%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.2 | +1.01 | 실측 | [[aa-lcr]] 76.7%×1.0 |
| 지시 따르기 | 55.4 | +0.36 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
