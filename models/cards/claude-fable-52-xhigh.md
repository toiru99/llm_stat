---
type: Model
title: Claude Fable 5.2 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: 62.2167392403357
price_blended_usd_1m: 5.74
output_speed_tps: 104.8226894639775
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 92.6, z: 2.2, r: 83.0, estimated: false }  # 전문 지식
  reasoning: { s: 96.3, z: 3.02, r: 95.3, estimated: false }  # 추론
  coding: { s: 96.6, z: 1.93, r: 79.0, estimated: false }  # 코딩
  agentic: { s: 94.9, z: 1.74, r: 76.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 79.8, z: 1.09, r: 66.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.2 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude Fable 5.2 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **62.2167392403357**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $8.0 · 출력 $40.0 · 혼합 $5.74/1M · 104.8226894639775 t/s · TTFT 48.963882907532366s · 1M ctx` · 가성비 10.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 83.0 | +2.2 | 실측 | [[humanitys-last-exam]] 68.8600556070436%×0.3 |
| 추론 | 95.3 | +3.02 | 실측 | [[critpt]] 35.7142857142857%×1.0, [[humanitys-last-exam]] 68.8600556070436%×1.0 |
| 코딩 | 79.0 | +1.93 | 실측 | [[scicode]] 65.625%×1.0 |
| 에이전트 | 76.2 | +1.74 | 실측 | [[gdpval]] 1750.9%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 82.6666666666667%×1.0 |
| 지시 따르기 | 66.4 | +1.09 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
