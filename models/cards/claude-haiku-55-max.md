---
type: Model
title: Claude Haiku 5.5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 36.4845435880142
price_blended_usd_1m: 0.077
output_speed_tps: 257.062238828662
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.2, z: 0.57, r: 58.6, estimated: false }  # 전문 지식
  reasoning: { s: 56.0, z: 1.01, r: 65.1, estimated: false }  # 추론
  coding: { s: 79.0, z: 1.32, r: 69.8, estimated: false }  # 코딩
  agentic: { s: 89.5, z: 1.54, r: 73.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 1.17, r: 67.6, estimated: false }  # 긴문맥
  instruction: { s: 65.6, z: 0.49, r: 57.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Claude Haiku 5.5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **36.4845435880142**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 257.062238828662 t/s · TTFT 170.154873365554s · 1M ctx` · 가성비 473.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.6 | +0.57 | 실측 | [[humanitys-last-exam]] 44.3929564411492%×0.3 |
| 추론 | 65.1 | +1.01 | 실측 | [[critpt]] 18.8571428571429%×1.0, [[humanitys-last-exam]] 44.3929564411492%×1.0 |
| 코딩 | 69.8 | +1.32 | 실측 | [[scicode]] 54.976851851851805%×1.0 |
| 에이전트 | 73.2 | +1.54 | 실측 | [[gdpval]] 1628.98%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.6 | +1.17 | 실측 | [[aa-lcr]] 82.6666666666667%×1.0 |
| 지시 따르기 | 57.3 | +0.49 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
