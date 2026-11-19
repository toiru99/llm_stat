---
type: Model
title: Claude Fable 5.2 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 64.563595756626
price_blended_usd_1m: 5.74
output_speed_tps: 109.032282490984
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 100.0, z: 2.54, r: 88.1, estimated: false }  # 전문 지식
  reasoning: { s: 99.6, z: 3.16, r: 97.4, estimated: false }  # 추론
  coding: { s: 100.0, z: 2.04, r: 80.5, estimated: false }  # 코딩
  agentic: { s: 98.4, z: 1.85, r: 77.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.2, r: 68.0, estimated: false }  # 긴문맥
  instruction: { s: 80.2, z: 1.1, r: 66.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.2 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Claude Fable 5.2 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **64.563595756626**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $8.0 · 출력 $40.0 · 혼합 $5.74/1M · 109.032282490984 t/s · TTFT 244.840852400881s · 1M ctx` · 가성비 11.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 88.1 | +2.54 | 실측 | [[humanitys-last-exam]] 74.2817423540315%×0.3 |
| 추론 | 97.4 | +3.16 | 실측 | [[critpt]] 35.428571428571395%×1.0, [[humanitys-last-exam]] 74.2817423540315%×1.0 |
| 코딩 | 80.5 | +2.04 | 실측 | [[scicode]] 67.7083333333333%×1.0 |
| 에이전트 | 77.8 | +1.85 | 실측 | [[gdpval]] 1831.06%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.0 | +1.2 | 실측 | [[aa-lcr]] 83.3333333333333%×1.0 |
| 지시 따르기 | 66.5 | +1.1 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
