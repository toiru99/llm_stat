---
type: Model
title: Claude Haiku 5.5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 18.6180055310996
price_blended_usd_1m: 0.077
output_speed_tps: 212.3599525592139
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 35.4, z: -0.56, r: 41.5, estimated: false }  # 전문 지식
  reasoning: { s: 30.5, z: -0.24, r: 46.4, estimated: false }  # 추론
  coding: { s: 69.5, z: 1.01, r: 65.2, estimated: false }  # 코딩
  agentic: { s: 67.6, z: 0.8, r: 61.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 81.2, z: 0.83, r: 62.4, estimated: false }  # 긴문맥
  instruction: { s: 45.5, z: -0.34, r: 44.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude Haiku 5.5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **18.6180055310996**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 212.3599525592139 t/s · TTFT 5.03481297575257s · 1M ctx` · 가성비 241.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.5 | -0.56 | 실측 | [[humanitys-last-exam]] 27.0157553290083%×0.3 |
| 추론 | 46.4 | -0.24 | 실측 | [[critpt]] 9.14285714285714%×1.0, [[humanitys-last-exam]] 27.0157553290083%×1.0 |
| 코딩 | 65.2 | +1.01 | 실측 | [[scicode]] 49.189814814814795%×1.0 |
| 에이전트 | 61.9 | +0.8 | 실측 | [[gdpval]] 1130.39%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.4 | +0.83 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 44.9 | -0.34 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
