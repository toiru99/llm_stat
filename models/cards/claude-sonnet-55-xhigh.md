---
type: Model
title: Claude Sonnet 5.5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: 49.9240327787242
price_blended_usd_1m: 1.47
output_speed_tps: 143.33592778520276
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.8, z: 0.95, r: 64.3, estimated: false }  # 전문 지식
  reasoning: { s: 77.0, z: 2.06, r: 81.0, estimated: false }  # 추론
  coding: { s: 82.9, z: 1.47, r: 72.0, estimated: false }  # 코딩
  agentic: { s: 94.6, z: 1.73, r: 76.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: 77.7, z: 1.0, r: 65.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude Sonnet 5.5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **49.9240327787242**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 143.33592778520276 t/s · TTFT 27.48259301218707s · 1M ctx` · 가성비 34.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.3 | +0.95 | 실측 | [[humanitys-last-exam]] 50.0%×0.3 |
| 추론 | 81.0 | +2.06 | 실측 | [[critpt]] 31.1428571428571%×1.0, [[humanitys-last-exam]] 50.0%×1.0 |
| 코딩 | 72.0 | +1.47 | 실측 | [[scicode]] 57.2916666666667%×1.0 |
| 에이전트 | 76.0 | +1.73 | 실측 | [[gdpval]] 1742.63%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 79.6666666666667%×1.0 |
| 지시 따르기 | 65.1 | +1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
