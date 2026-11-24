---
type: Model
title: Inkling Small (high)
creator: Thinking Machines
license: Open
intelligence_index: 9.57506402218475
price_blended_usd_1m: 0.222
output_speed_tps: 96.4265706948641
context_window: 1000000
status: past
size_class: Large
params_b: 266
is_reasoning: true
radar:
  knowledge: { s: null, z: null, r: null, estimated: false }  # 전문 지식
  reasoning: { s: null, z: null, r: null, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: null, z: null, r: null, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 76.9, z: 0.28, r: 54.2, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling Small (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Inkling Small (high)

Thinking Machines · Open · Large(266B) · 컨텍스트 1M · 종합지능 **9.57506402218475** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 멀티모달
- **약점**: —

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 96.4265706948641 t/s · TTFT 1.43194634846676s · 1M ctx` · 가성비 43.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | — | — | 측정 안 됨 | — |
| 추론 | — | — | 측정 안 됨 | — |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | — | — | 측정 안 됨 | — |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 54.2 | +0.28 | 실측 | [[mmmu-pro]] 72.1387%×1.0 |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
