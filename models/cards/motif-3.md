---
type: Model
title: Motif 3
creator: Motif Technologies
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.2, z: 1.08, r: 66.2, estimated: false }  # 전문 지식
  reasoning: { s: 72.4, z: 1.2, r: 67.9, estimated: false }  # 추론
  coding: { s: 58.3, z: 0.7, r: 60.6, estimated: false }  # 코딩
  agentic: { s: 64.5, z: 1.03, r: 65.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 0.99, r: 64.8, estimated: false }  # 긴문맥
  instruction: { s: 87.6, z: 1.45, r: 71.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Motif 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-07
timestamp: 2026-11-07T00:00:00Z
---

# Motif 3

Motif Technologies · Open · Large · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.2 | +1.08 | 실측 | [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 67.9 | +1.2 | 실측 | [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 60.6 | +0.7 | 실측 | [[scicode]] 42.0%×1.0 |
| 에이전트 | 65.5 | +1.03 | 실측 | [[gdpval]] 1127.0%×1.0, [[tau3-banking]] 35.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.8 | +0.99 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 71.7 | +1.45 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
