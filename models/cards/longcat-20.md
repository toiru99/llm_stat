---
type: Model
title: LongCat 2.0
creator: LongCat
license: Open
intelligence_index: 34.0
price_blended_usd_1m: 0.4555
output_speed_tps: 45.0
context_window: 1000000
status: current
size_class: Large
params_b: 1600
is_reasoning: true
radar:
  knowledge: { s: 55.2, z: 0.72, r: 60.8, estimated: false }  # 전문 지식
  reasoning: { s: 48.8, z: 0.69, r: 60.4, estimated: false }  # 추론
  coding: { s: 56.5, z: 0.39, r: 55.9, estimated: false }  # 코딩
  agentic: { s: 32.4, z: -0.2, r: 47.0, estimated: false }  # 에이전트
  trust: { s: 23.7, z: -0.04, r: 49.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 75.9, z: 0.78, r: 61.7, estimated: false }  # 긴문맥
  instruction: { s: 65.4, z: 0.52, r: 57.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LongCat 2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# LongCat 2.0

LongCat · Open · Large(1600B) · 컨텍스트 1M · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.75 · 출력 $2.95 · 혼합 $0.4555/1M · 45.0 t/s · TTFT 2.9s · 1M ctx` · 가성비 74.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.8 | +0.72 | 실측 | [[aa-omniscience]] 30.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 60.4 | +0.69 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 55.9 | +0.39 | 실측 | [[scicode]] 35.0%×1.0 |
| 에이전트 | 47.0 | -0.2 | 실측 | [[gdpval]] 27.0%×1.0, [[tau3-banking]] 13.0%×1.0 |
| 신뢰성 | 49.3 | -0.04 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.7 | +0.78 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 57.8 | +0.52 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
