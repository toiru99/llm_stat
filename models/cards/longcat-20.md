---
type: Model
title: LongCat 2.0
creator: LongCat
license: Open
intelligence_index: 33.0
price_blended_usd_1m: 0.4555
output_speed_tps: 42.0
context_window: 1000000
status: current
size_class: Large
params_b: 1600
is_reasoning: true
radar:
  knowledge: { s: 58.0, z: 0.78, r: 61.7, estimated: false }  # 전문 지식
  reasoning: { s: 50.0, z: 0.76, r: 61.4, estimated: false }  # 추론
  coding: { s: 58.3, z: 0.46, r: 56.8, estimated: false }  # 코딩
  agentic: { s: 34.6, z: -0.05, r: 49.3, estimated: false }  # 에이전트
  trust: { s: 27.6, z: -0.05, r: 49.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 76.3, z: 0.79, r: 61.8, estimated: false }  # 긴문맥
  instruction: { s: 63.1, z: 0.4, r: 56.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LongCat 2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# LongCat 2.0

LongCat · Open · Large(1600B) · 컨텍스트 1M · 종합지능 **33.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $2.95 · 혼합 $0.4555/1M · 42.0 t/s · TTFT 2.81s · 1M ctx` · 가성비 72.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.7 | +0.78 | 실측 | [[aa-omniscience]] 30.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 32.0%×0.3 |
| 추론 | 61.4 | +0.76 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 32.0%×1.0 |
| 코딩 | 56.8 | +0.46 | 실측 | [[scicode]] 35.0%×1.0 |
| 에이전트 | 49.3 | -0.05 | 실측 | [[gdpval]] 26.0%×1.0, [[tau3-banking]] 13.0%×1.0 |
| 신뢰성 | 49.2 | -0.05 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.8 | +0.79 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 56.1 | +0.4 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
