---
type: Model
title: Motif 3
creator: Motif Technologies
license: Open
intelligence_index: 34.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.9, z: 0.72, r: 60.8, estimated: false }  # 전문 지식
  reasoning: { s: 55.6, z: 0.93, r: 64.0, estimated: false }  # 추론
  coding: { s: 58.3, z: 0.8, r: 62.1, estimated: false }  # 코딩
  agentic: { s: 68.6, z: 1.18, r: 67.7, estimated: false }  # 에이전트
  trust: { s: 72.2, z: 2.16, r: 82.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 1.06, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 92.1, z: 1.59, r: 73.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Motif 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Motif 3

Motif Technologies · Open · Large · 컨텍스트 262k · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 코딩, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.8 | +0.72 | 실측 | [[aa-omniscience]] 30.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 64.0 | +0.93 | 실측 | [[critpt]] 7.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 62.1 | +0.8 | 실측 | [[scicode]] 42.0%×1.0 |
| 에이전트 | 67.7 | +1.18 | 실측 | [[tau3-banking]] 35.0%×1.0 |
| 신뢰성 | 82.4 | +2.16 | 실측 | [[aa-omniscience]] 72.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.8 | +1.06 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 73.9 | +1.59 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
