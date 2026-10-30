---
type: Model
title: Claude Haiku 5.5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 0.077
output_speed_tps: 191.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.0, z: 0.91, r: 63.6, estimated: false }  # 전문 지식
  reasoning: { s: 66.2, z: 0.93, r: 63.9, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.27, r: 69.1, estimated: false }  # 코딩
  agentic: { s: 81.6, z: 1.63, r: 74.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 59.5, z: 0.28, r: 54.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# Claude Haiku 5.5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 191.0 t/s · TTFT 52.59s · 1M ctx` · 가성비 441.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.6 | +0.91 | 실측 | [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 63.9 | +0.93 | 실측 | [[critpt]] 45.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 69.1 | +1.27 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 74.4 | +1.63 | 실측 | [[gdpval]] 1522.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 54.3 | +0.28 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
