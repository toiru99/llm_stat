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
  knowledge: { s: 54.6, z: 0.61, r: 59.2, estimated: false }  # 전문 지식
  reasoning: { s: 47.8, z: 0.58, r: 58.6, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.46, r: 56.9, estimated: false }  # 코딩
  agentic: { s: 26.2, z: -0.45, r: 43.3, estimated: false }  # 에이전트
  trust: { s: 23.7, z: -0.09, r: 48.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 73.0, z: 0.68, r: 60.3, estimated: false }  # 긴문맥
  instruction: { s: 72.7, z: 0.8, r: 62.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LongCat 2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
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
| 전문 지식 | 59.2 | +0.61 | 실측 | [[aa-omniscience]] 30.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 58.6 | +0.58 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 56.9 | +0.46 | 실측 | [[scicode]] 36.0%×1.0 |
| 에이전트 | 43.3 | -0.45 | 실측 | [[gdpval]] 18.0%×1.0, [[tau3-banking]] 13.0%×1.0 |
| 신뢰성 | 48.6 | -0.09 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.3 | +0.68 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 62.0 | +0.8 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
