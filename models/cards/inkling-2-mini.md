---
type: Model
title: Inkling 2 Mini
creator: Thinking Machines
license: Open
intelligence_index: 20.1315214698783
price_blended_usd_1m: 0.0905
output_speed_tps: 185.635234353339
context_window: 1024000
status: current
size_class: Small
params_b: 26
is_reasoning: true
radar:
  knowledge: { s: null, z: null, r: null, estimated: false }  # 전문 지식
  reasoning: { s: null, z: null, r: null, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: 75.9, z: 1.01, r: 65.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling 2 Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Inkling 2 Mini

Thinking Machines · Open · Small(26B) · 컨텍스트 1M · 종합지능 **20.1315214698783**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트
- **약점**: —

## 실용 지표
`입력 $0.15 · 출력 $0.5 · 혼합 $0.0905/1M · 185.635234353339 t/s · TTFT 1.95198216430552s · 1M ctx` · 가성비 222.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | — | — | 측정 안 됨 | — |
| 추론 | — | — | 측정 안 됨 | — |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | 65.2 | +1.01 | 실측 | [[gdpval]] 1318.54 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
