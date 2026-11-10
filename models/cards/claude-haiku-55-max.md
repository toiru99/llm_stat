---
type: Model
title: Claude Haiku 5.5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 36.0
price_blended_usd_1m: 0.077
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.2, z: 0.59, r: 58.8, estimated: false }  # 전문 지식
  reasoning: { s: 58.0, z: 0.72, r: 60.9, estimated: false }  # 추론
  coding: { s: 79.1, z: 1.39, r: 70.8, estimated: false }  # 코딩
  agentic: { s: 87.3, z: 1.78, r: 76.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 1.2, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 60.0, z: 0.31, r: 54.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Claude Haiku 5.5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **36.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 467.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.8 | +0.59 | 실측 | [[humanitys-last-exam]] 44.4%×0.3 |
| 추론 | 60.9 | +0.72 | 실측 | [[critpt]] 43.5%×1.0, [[humanitys-last-exam]] 44.4%×1.0 |
| 코딩 | 70.8 | +1.39 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 76.7 | +1.78 | 실측 | [[gdpval]] 1629.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.1 | +1.2 | 실측 | [[aa-lcr]] 82.7%×1.0 |
| 지시 따르기 | 54.6 | +0.31 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
