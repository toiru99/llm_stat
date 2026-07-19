---
type: Model
title: LongCat 2.0
creator: LongCat
license: Open
intelligence_index: 33.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: 1600
is_reasoning: true
radar:
  knowledge: { s: 58.0, z: 0.84, r: 62.6, estimated: false }  # 전문 지식
  reasoning: { s: 50.0, z: 0.86, r: 62.9, estimated: false }  # 추론
  coding: { s: 58.3, z: 0.51, r: 57.6, estimated: false }  # 코딩
  agentic: { s: 40.3, z: 0.16, r: 52.4, estimated: false }  # 에이전트
  trust: { s: 28.2, z: 0.02, r: 50.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 76.3, z: 0.82, r: 62.3, estimated: false }  # 긴문맥
  instruction: { s: 65.1, z: 0.52, r: 57.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LongCat 2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-19
timestamp: 2026-07-19T00:00:00Z
---

# LongCat 2.0

LongCat · Open · Large(1600B) · 컨텍스트 1M · 종합지능 **33.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.6 | +0.84 | 실측 | [[aa-omniscience]] 30.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 32.0%×0.3 |
| 추론 | 62.9 | +0.86 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 32.0%×1.0 |
| 코딩 | 57.6 | +0.51 | 실측 | [[scicode]] 35.0%×1.0 |
| 에이전트 | 52.4 | +0.16 | 실측 | [[gdpval]] 26.0%×1.0, [[tau3-banking]] 13.0%×1.0 |
| 신뢰성 | 50.4 | +0.02 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.3 | +0.82 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 57.9 | +0.52 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
