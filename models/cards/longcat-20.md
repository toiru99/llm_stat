---
type: Model
title: LongCat 2.0
creator: LongCat
license: Open
intelligence_index: None
price_blended_usd_1m: 0.4555
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.1, z: 0.83, r: 62.5, estimated: false }  # 전문 지식
  reasoning: { s: 61.7, z: 0.9, r: 63.6, estimated: false }  # 추론
  coding: { s: 48.4, z: 0.36, r: 55.4, estimated: false }  # 코딩
  agentic: { s: 36.2, z: 0.05, r: 50.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 73.3, z: 0.61, r: 59.1, estimated: false }  # 긴문맥
  instruction: { s: 70.4, z: 0.76, r: 61.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LongCat 2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# LongCat 2.0

LongCat · Open · Large · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.75 · 출력 $2.95 · 혼합 $0.4555/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.5 | +0.83 | 실측 | [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 33.7%×0.3 |
| 추론 | 63.6 | +0.9 | 실측 | [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 33.7%×1.0 |
| 코딩 | 55.4 | +0.36 | 실측 | [[scicode]] 36.3%×1.0 |
| 에이전트 | 50.7 | +0.05 | 실측 | [[gdpval]] 877.0%×1.0, [[tau3-banking]] 13.2%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.1 | +0.61 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 61.3 | +0.76 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
