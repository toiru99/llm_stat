---
type: Model
title: Claude Haiku 5.5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 19.0
price_blended_usd_1m: 0.077
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 35.4, z: -0.56, r: 41.6, estimated: false }  # 전문 지식
  reasoning: { s: 31.7, z: -0.56, r: 41.6, estimated: false }  # 추론
  coding: { s: 69.6, z: 1.07, r: 66.1, estimated: false }  # 코딩
  agentic: { s: 60.5, z: 0.87, r: 63.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 81.2, z: 0.84, r: 62.7, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.45, r: 43.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# Claude Haiku 5.5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **19.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 246.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.6 | -0.56 | 실측 | [[humanitys-last-exam]] 27.0%×0.3 |
| 추론 | 41.6 | -0.56 | 실측 | [[critpt]] 21.5%×1.0, [[humanitys-last-exam]] 27.0%×1.0 |
| 코딩 | 66.1 | +1.07 | 실측 | [[scicode]] 49.2%×1.0 |
| 에이전트 | 63.1 | +0.87 | 실측 | [[gdpval]] 1130.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.7 | +0.84 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 43.3 | -0.45 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
