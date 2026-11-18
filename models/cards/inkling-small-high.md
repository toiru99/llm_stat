---
type: Model
title: Inkling Small (high)
creator: Thinking Machines
license: Open
intelligence_index: 9.57506402218475
price_blended_usd_1m: 0.222
output_speed_tps: 141.29943854521267
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 58.5, z: 0.54, r: 58.1, estimated: true }  # 전문 지식
  reasoning: { s: 43.7, z: 0.4, r: 56.0, estimated: true }  # 추론
  coding: { s: 56.2, z: 0.55, r: 58.2, estimated: true }  # 코딩
  agentic: { s: 57.0, z: 0.42, r: 56.3, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 76.9, z: 0.28, r: 54.2, estimated: false }  # 멀티모달
  long_context: { s: 82.2, z: 0.85, r: 62.7, estimated: true }  # 긴문맥
  instruction: { s: 69.2, z: 0.64, r: 59.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling Small (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Inkling Small (high)

Thinking Machines · Open · Large · 컨텍스트 1M · 종합지능 **9.57506402218475** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 141.29943854521267 t/s · TTFT 1.5269929650666498s · 1M ctx` · 가성비 43.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.1 | +0.54 | 추정 | (추정) |
| 추론 | 56.0 | +0.4 | 추정 | (추정) |
| 코딩 | 58.2 | +0.55 | 추정 | (추정) |
| 에이전트 | 56.3 | +0.42 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 54.2 | +0.28 | 실측 | [[mmmu-pro]] 72.1387283236994%×1.0 |
| 긴문맥 | 62.7 | +0.85 | 추정 | (추정) |
| 지시 따르기 | 59.6 | +0.64 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
