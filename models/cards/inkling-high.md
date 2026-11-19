---
type: Model
title: Inkling (high)
creator: Thinking Machines
license: Open
intelligence_index: 11.0316478809701
price_blended_usd_1m: 0.724
output_speed_tps: 128.805150319111
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.5, z: 0.44, r: 56.6, estimated: true }  # 전문 지식
  reasoning: { s: 43.9, z: 0.41, r: 56.2, estimated: true }  # 추론
  coding: { s: 61.5, z: 0.73, r: 60.9, estimated: true }  # 코딩
  agentic: { s: 52.9, z: 0.28, r: 54.2, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 73.8, z: 0.12, r: 51.8, estimated: false }  # 멀티모달
  long_context: { s: 79.4, z: 0.77, r: 61.5, estimated: true }  # 긴문맥
  instruction: { s: 71.8, z: 0.75, r: 61.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Inkling (high)

Thinking Machines · Open · Large · 컨텍스트 1M · 종합지능 **11.0316478809701**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $1.0 · 출력 $4.05 · 혼합 $0.724/1M · 128.805150319111 t/s · TTFT 1.32322322173502s · 1M ctx` · 가성비 15.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.6 | +0.44 | 추정 | (추정) |
| 추론 | 56.2 | +0.41 | 추정 | (추정) |
| 코딩 | 60.9 | +0.73 | 추정 | (추정) |
| 에이전트 | 54.2 | +0.28 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.8 | +0.12 | 실측 | [[mmmu-pro]] 69.8265895953757%×1.0 |
| 긴문맥 | 61.5 | +0.77 | 추정 | (추정) |
| 지시 따르기 | 61.2 | +0.75 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
