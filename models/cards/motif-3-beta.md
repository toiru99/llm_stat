---
type: Model
title: Motif 3 (Beta)
creator: Motif Technologies
license: Proprietary
intelligence_index: 37.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Large
params_b: 314
is_reasoning: true
radar:
  knowledge: { s: 51.4, z: 0.5, r: 57.6, estimated: false }  # 전문 지식
  reasoning: { s: 58.5, z: 1.13, r: 66.9, estimated: false }  # 추론
  coding: { s: 58.8, z: 0.94, r: 64.1, estimated: true }  # 코딩
  agentic: { s: 54.0, z: 0.63, r: 59.5, estimated: false }  # 에이전트
  trust: { s: 50.5, z: 1.23, r: 68.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 1.08, r: 66.2, estimated: false }  # 긴문맥
  instruction: { s: 76.2, z: 0.99, r: 64.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Motif 3 (Beta)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Motif 3 (Beta)

Motif Technologies · Proprietary · Large(314B) · 컨텍스트 262k · 종합지능 **37.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.6 | +0.5 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 66.9 | +1.13 | 실측 | [[critpt]] 6.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 64.1 | +0.94 | 추정 | (추정) |
| 에이전트 | 59.5 | +0.63 | 실측 | [[gdpval]] 34.0%×1.0 |
| 신뢰성 | 68.5 | +1.23 | 실측 | [[aa-omniscience]] 51.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.2 | +1.08 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 64.8 | +0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
