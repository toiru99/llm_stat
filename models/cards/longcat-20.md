---
type: Model
title: LongCat 2.0
creator: LongCat
license: Open
intelligence_index: None
price_blended_usd_1m: 0.4555
output_speed_tps: 77.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 68.8, z: 0.85, r: 62.8, estimated: false }  # 전문 지식
  reasoning: { s: 67.0, z: 0.96, r: 64.5, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.38, r: 55.6, estimated: false }  # 코딩
  agentic: { s: 36.2, z: 0.07, r: 51.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 73.0, z: 0.62, r: 59.4, estimated: false }  # 긴문맥
  instruction: { s: 70.7, z: 0.75, r: 61.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LongCat 2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# LongCat 2.0

LongCat · Open · Large · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.75 · 출력 $2.95 · 혼합 $0.4555/1M · 77.0 t/s · TTFT 2.64s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.8 | +0.85 | 실측 | [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 64.5 | +0.96 | 실측 | [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 55.6 | +0.38 | 실측 | [[scicode]] 36.0%×1.0 |
| 에이전트 | 51.1 | +0.07 | 실측 | [[gdpval]] 877.0%×1.0, [[tau3-banking]] 13.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.4 | +0.62 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 61.3 | +0.75 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
