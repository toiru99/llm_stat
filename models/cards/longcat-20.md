---
type: Model
title: LongCat 2.0
creator: LongCat
license: Open
intelligence_index: 34.0
price_blended_usd_1m: 0.4555
output_speed_tps: 41.0
context_window: 1000000
status: current
size_class: Large
params_b: 1600
is_reasoning: true
radar:
  knowledge: { s: 56.8, z: 0.8, r: 62.0, estimated: false }  # 전문 지식
  reasoning: { s: 50.2, z: 0.79, r: 61.9, estimated: false }  # 추론
  coding: { s: 58.3, z: 0.45, r: 56.8, estimated: false }  # 코딩
  agentic: { s: 33.2, z: -0.14, r: 47.9, estimated: false }  # 에이전트
  trust: { s: 23.7, z: -0.01, r: 49.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 75.9, z: 0.81, r: 62.2, estimated: false }  # 긴문맥
  instruction: { s: 65.4, z: 0.55, r: 58.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LongCat 2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# LongCat 2.0

LongCat · Open · Large(1600B) · 컨텍스트 1M · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.75 · 출력 $2.95 · 혼합 $0.4555/1M · 41.0 t/s · TTFT 2.86s · 1M ctx` · 가성비 74.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.0 | +0.8 | 실측 | [[aa-omniscience]] 30.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 61.9 | +0.79 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 56.8 | +0.45 | 실측 | [[scicode]] 35.0%×1.0 |
| 에이전트 | 47.9 | -0.14 | 실측 | [[gdpval]] 27.0%×1.0, [[tau3-banking]] 13.0%×1.0 |
| 신뢰성 | 49.8 | -0.01 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.2 | +0.81 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 58.2 | +0.55 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
