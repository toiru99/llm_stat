---
type: Model
title: Claude Haiku 5.5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 0.077
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.0, z: 0.9, r: 63.5, estimated: false }  # 전문 지식
  reasoning: { s: 68.3, z: 1.01, r: 65.2, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.26, r: 68.9, estimated: false }  # 코딩
  agentic: { s: 81.6, z: 1.62, r: 74.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.06, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 66.7, z: 0.57, r: 58.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-07
timestamp: 2026-11-07T00:00:00Z
---

# Claude Haiku 5.5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 454.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.5 | +0.9 | 실측 | [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 65.2 | +1.01 | 실측 | [[critpt]] 48.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 68.9 | +1.26 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 74.3 | +1.62 | 실측 | [[gdpval]] 1522.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.8 | +1.06 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 58.6 | +0.57 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
