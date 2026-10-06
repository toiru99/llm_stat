---
type: Model
title: LongCat 2.0
creator: LongCat
license: Open
intelligence_index: 19.0
price_blended_usd_1m: 0.1842
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.6, z: 0.56, r: 58.4, estimated: false }  # 전문 지식
  reasoning: { s: 47.8, z: 0.51, r: 57.7, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.41, r: 56.1, estimated: false }  # 코딩
  agentic: { s: 26.7, z: -0.46, r: 43.0, estimated: false }  # 에이전트
  trust: { s: 23.7, z: -0.13, r: 48.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 73.0, z: 0.65, r: 59.7, estimated: false }  # 긴문맥
  instruction: { s: 72.7, z: 0.76, r: 61.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LongCat 2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# LongCat 2.0

LongCat · Open · Large · 컨텍스트 1M · 종합지능 **19.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.1842/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 103.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.4 | +0.56 | 실측 | [[aa-omniscience]] 30.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 57.7 | +0.51 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 56.1 | +0.41 | 실측 | [[scicode]] 36.0%×1.0 |
| 에이전트 | 43.0 | -0.46 | 실측 | [[gdpval]] 19.0%×1.0, [[tau3-banking]] 13.0%×1.0 |
| 신뢰성 | 48.0 | -0.13 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.7 | +0.65 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 61.4 | +0.76 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
