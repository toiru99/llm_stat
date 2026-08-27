---
type: Model
title: LongCat 2.0
creator: LongCat
license: Open
intelligence_index: 34.0
price_blended_usd_1m: 0.4555
output_speed_tps: 42.0
context_window: 1000000
status: current
size_class: Large
params_b: 1600
is_reasoning: true
radar:
  knowledge: { s: 56.3, z: 0.71, r: 60.6, estimated: false }  # 전문 지식
  reasoning: { s: 50.2, z: 0.69, r: 60.4, estimated: false }  # 추론
  coding: { s: 58.3, z: 0.39, r: 55.8, estimated: false }  # 코딩
  agentic: { s: 32.9, z: -0.17, r: 47.4, estimated: false }  # 에이전트
  trust: { s: 26.7, z: -0.09, r: 48.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 75.9, z: 0.75, r: 61.2, estimated: false }  # 긴문맥
  instruction: { s: 63.1, z: 0.35, r: 55.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LongCat 2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# LongCat 2.0

LongCat · Open · Large(1600B) · 컨텍스트 1M · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.75 · 출력 $2.95 · 혼합 $0.4555/1M · 42.0 t/s · TTFT 2.8s · 1M ctx` · 가성비 74.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.6 | +0.71 | 실측 | [[aa-omniscience]] 30.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 60.4 | +0.69 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 55.8 | +0.39 | 실측 | [[scicode]] 35.0%×1.0 |
| 에이전트 | 47.4 | -0.17 | 실측 | [[gdpval]] 27.0%×1.0, [[tau3-banking]] 13.0%×1.0 |
| 신뢰성 | 48.7 | -0.09 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.2 | +0.75 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 55.3 | +0.35 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
