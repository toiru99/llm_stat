---
type: Model
title: Claude Fable 5.2 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 56.0
price_blended_usd_1m: 5.74
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.1, z: 1.74, r: 76.2, estimated: false }  # 전문 지식
  reasoning: { s: 81.7, z: 1.89, r: 78.4, estimated: false }  # 추론
  coding: { s: 86.8, z: 1.65, r: 74.7, estimated: false }  # 코딩
  agentic: { s: 85.3, z: 1.71, r: 75.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.11, r: 66.7, estimated: false }  # 긴문맥
  instruction: { s: 78.4, z: 1.1, r: 66.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.2 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Claude Fable 5.2 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **56.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $8.0 · 출력 $40.0 · 혼합 $5.74/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 9.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.2 | +1.74 | 실측 | [[humanitys-last-exam]] 61.9%×0.3 |
| 추론 | 78.4 | +1.89 | 실측 | [[critpt]] 61.5%×1.0, [[humanitys-last-exam]] 61.9%×1.0 |
| 코딩 | 74.7 | +1.65 | 실측 | [[scicode]] 59.7%×1.0 |
| 에이전트 | 75.6 | +1.71 | 실측 | [[gdpval]] 1591.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.7 | +1.11 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 66.5 | +1.1 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
