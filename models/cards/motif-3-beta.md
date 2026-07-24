---
type: Model
title: Motif 3 (Beta)
creator: Motif Technologies
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Large
params_b: 314
is_reasoning: true
radar:
  knowledge: { s: 53.7, z: 0.63, r: 59.4, estimated: false }  # 전문 지식
  reasoning: { s: 60.5, z: 1.4, r: 71.0, estimated: false }  # 추론
  coding: { s: 73.3, z: 1.13, r: 67.0, estimated: false }  # 코딩
  agentic: { s: 74.6, z: 1.49, r: 72.3, estimated: false }  # 에이전트
  trust: { s: 57.5, z: 1.41, r: 71.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.3, z: 0.93, r: 63.9, estimated: false }  # 긴문맥
  instruction: { s: 79.5, z: 1.1, r: 66.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Motif 3 (Beta)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-24
timestamp: 2026-07-24T00:00:00Z
---

# Motif 3 (Beta)

Motif Technologies · Proprietary · Large(314B) · 컨텍스트 262k · 종합지능 **44.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.4 | +0.63 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 38.0%×0.3 |
| 추론 | 71.0 | +1.4 | 실측 | [[critpt]] 6.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 38.0%×1.0 |
| 코딩 | 67.0 | +1.13 | 실측 | [[scicode]] 44.0%×1.0 |
| 에이전트 | 72.3 | +1.49 | 실측 | [[gdpval]] 38.0%×1.0, [[tau3-banking]] 29.0%×1.0 |
| 신뢰성 | 71.2 | +1.41 | 실측 | [[aa-omniscience]] 51.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.9 | +0.93 | 실측 | [[aa-lcr]] 61.0%×1.0 |
| 지시 따르기 | 66.5 | +1.1 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
