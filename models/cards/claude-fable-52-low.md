---
type: Model
title: Claude Fable 5.2 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 53.9249388799182
price_blended_usd_1m: 5.74
output_speed_tps: 110.61378210307838
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.1, z: 1.6, r: 74.0, estimated: false }  # 전문 지식
  reasoning: { s: 81.3, z: 2.27, r: 84.1, estimated: false }  # 추론
  coding: { s: 83.6, z: 1.49, r: 72.4, estimated: false }  # 코딩
  agentic: { s: 85.9, z: 1.43, r: 71.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.1, r: 66.4, estimated: false }  # 긴문맥
  instruction: { s: 84.0, z: 1.27, r: 69.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.2 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude Fable 5.2 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **53.9249388799182**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $8.0 · 출력 $40.0 · 혼합 $5.74/1M · 110.61378210307838 t/s · TTFT 7.223547158523549s · 1M ctx` · 가성비 9.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.0 | +1.6 | 실측 | [[humanitys-last-exam]] 59.7312326227989%×0.3 |
| 추론 | 84.1 | +2.27 | 실측 | [[critpt]] 29.4285714285714%×1.0, [[humanitys-last-exam]] 59.7312326227989%×1.0 |
| 코딩 | 72.4 | +1.49 | 실측 | [[scicode]] 57.7546296296296%×1.0 |
| 에이전트 | 71.5 | +1.43 | 실측 | [[gdpval]] 1545.68%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.4 | +1.1 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 69.0 | +1.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
