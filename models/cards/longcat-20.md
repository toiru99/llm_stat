---
type: Model
title: LongCat 2.0
creator: LongCat
license: Open
intelligence_index: 19.0
price_blended_usd_1m: 0.4555
output_speed_tps: 71.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.6, z: 0.53, r: 58.0, estimated: false }  # 전문 지식
  reasoning: { s: 47.7, z: 0.47, r: 57.1, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.35, r: 55.3, estimated: false }  # 코딩
  agentic: { s: 36.0, z: 0.04, r: 50.6, estimated: false }  # 에이전트
  trust: { s: 23.7, z: -0.16, r: 47.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 73.0, z: 0.6, r: 59.1, estimated: false }  # 긴문맥
  instruction: { s: 69.6, z: 0.65, r: 59.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LongCat 2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# LongCat 2.0

LongCat · Open · Large · 컨텍스트 1M · 종합지능 **19.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $2.95 · 혼합 $0.4555/1M · 71.0 t/s · TTFT 2.56s · 1M ctx` · 가성비 41.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.0 | +0.53 | 실측 | [[aa-omniscience]] 30.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 57.1 | +0.47 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 55.3 | +0.35 | 실측 | [[scicode]] 36.0%×1.0 |
| 에이전트 | 50.6 | +0.04 | 실측 | [[gdpval]] 869.0%×1.0, [[tau3-banking]] 13.0%×1.0 |
| 신뢰성 | 47.6 | -0.16 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.1 | +0.6 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 59.7 | +0.65 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
