---
type: Model
title: Inkling (high)
creator: Thinking Machines
license: Open
intelligence_index: 11.0316478809701
price_blended_usd_1m: 0.724
output_speed_tps: 101.957525097422
context_window: 1000000
status: current
size_class: Large
params_b: 975
is_reasoning: true
radar:
  knowledge: { s: null, z: null, r: null, estimated: false }  # 전문 지식
  reasoning: { s: null, z: null, r: null, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: null, z: null, r: null, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 73.8, z: 0.12, r: 51.8, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Inkling (high)

Thinking Machines · Open · Large(975B) · 컨텍스트 1M · 종합지능 **11.0316478809701**

## 강점 / 약점 (평균 대비)
- **강점**: 멀티모달
- **약점**: —

## 실용 지표
`입력 $1.0 · 출력 $4.05 · 혼합 $0.724/1M · 101.957525097422 t/s · TTFT 1.811214904639s · 1M ctx` · 가성비 15.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | — | — | 측정 안 됨 | — |
| 추론 | — | — | 측정 안 됨 | — |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | — | — | 측정 안 됨 | — |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.8 | +0.12 | 실측 | [[mmmu-pro]] 69.8266%×1.0 |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
