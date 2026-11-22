---
type: Model
title: Inkling 2 Mini
creator: Thinking Machines
license: Open
intelligence_index: 20.1315214698783
price_blended_usd_1m: 0.0905
output_speed_tps: 279.934995309815
context_window: 1024000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.4, z: 0.34, r: 55.1, estimated: true }  # 전문 지식
  reasoning: { s: 47.7, z: 0.6, r: 59.0, estimated: true }  # 추론
  coding: { s: 71.7, z: 1.07, r: 66.1, estimated: true }  # 코딩
  agentic: { s: 75.9, z: 1.07, r: 66.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.5, z: 1.01, r: 65.1, estimated: true }  # 긴문맥
  instruction: { s: 65.0, z: 0.46, r: 57.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling 2 Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Inkling 2 Mini

Thinking Machines · Open · Small · 컨텍스트 1M · 종합지능 **20.1315214698783**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.15 · 출력 $0.5 · 혼합 $0.0905/1M · 279.934995309815 t/s · TTFT 1.48736381188096s · 1M ctx` · 가성비 222.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.1 | +0.34 | 추정 | (추정) |
| 추론 | 59.0 | +0.6 | 추정 | (추정) |
| 코딩 | 66.1 | +1.07 | 추정 | (추정) |
| 에이전트 | 66.1 | +1.07 | 실측 | [[gdpval]] 1318.54%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.1 | +1.01 | 추정 | (추정) |
| 지시 따르기 | 57.0 | +0.46 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
