---
type: Model
title: Claude Fable 5.2 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 61.8218785440284
price_blended_usd_1m: 5.74
output_speed_tps: 111.14694336471057
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.9, z: 2.02, r: 80.4, estimated: false }  # 전문 지식
  reasoning: { s: 90.5, z: 2.73, r: 90.9, estimated: false }  # 추론
  coding: { s: 86.5, z: 1.59, r: 73.9, estimated: false }  # 코딩
  agentic: { s: 93.5, z: 1.69, r: 75.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 82.5, z: 1.21, r: 68.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.2 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude Fable 5.2 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **61.8218785440284**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $8.0 · 출력 $40.0 · 혼합 $5.74/1M · 111.14694336471057 t/s · TTFT 23.85673711348582s · 1M ctx` · 가성비 10.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.4 | +2.02 | 실측 | [[humanitys-last-exam]] 66.1723818350324%×0.3 |
| 추론 | 90.9 | +2.73 | 실측 | [[critpt]] 32.857142857142904%×1.0, [[humanitys-last-exam]] 66.1723818350324%×1.0 |
| 코딩 | 73.9 | +1.59 | 실측 | [[scicode]] 59.4907407407407%×1.0 |
| 에이전트 | 75.4 | +1.69 | 실측 | [[gdpval]] 1718.3%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 83.3333333333333%×1.0 |
| 지시 따르기 | 68.1 | +1.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
