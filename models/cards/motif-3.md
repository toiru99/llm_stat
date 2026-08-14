---
type: Model
title: Motif 3
creator: Motif Technologies
license: Open
intelligence_index: 47.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Large
params_b: 314
is_reasoning: true
radar:
  knowledge: { s: 58.6, z: 0.83, r: 62.4, estimated: false }  # 전문 지식
  reasoning: { s: 58.1, z: 1.12, r: 66.7, estimated: false }  # 추론
  coding: { s: 68.3, z: 0.82, r: 62.4, estimated: false }  # 코딩
  agentic: { s: 63.4, z: 1.05, r: 65.8, estimated: false }  # 에이전트
  trust: { s: 81.4, z: 2.41, r: 86.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.7, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 93.8, z: 1.61, r: 74.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Motif 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
---

# Motif 3

Motif Technologies · Open · Large(314B) · 컨텍스트 262k · 종합지능 **47.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.4 | +0.83 | 실측 | [[aa-omniscience]] 30.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 66.7 | +1.12 | 실측 | [[critpt]] 7.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 62.4 | +0.82 | 실측 | [[scicode]] 41.0%×1.0 |
| 에이전트 | 65.8 | +1.05 | 실측 | [[gdpval]] 39.0%×1.0, [[tau3-banking]] 35.0%×1.0 |
| 신뢰성 | 86.2 | +2.41 | 실측 | [[aa-omniscience]] 72.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 74.2 | +1.61 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
