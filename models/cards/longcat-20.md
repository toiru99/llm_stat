---
type: Model
title: LongCat 2.0
creator: LongCat
license: Open
intelligence_index: None
price_blended_usd_1m: 0.4555
output_speed_tps: 61.01505252259469
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.2, z: 0.83, r: 62.4, estimated: false }  # 전문 지식
  reasoning: { s: 43.5, z: 0.41, r: 56.1, estimated: false }  # 추론
  coding: { s: 48.4, z: 0.29, r: 54.4, estimated: false }  # 코딩
  agentic: { s: 40.9, z: -0.13, r: 48.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 73.3, z: 0.59, r: 58.9, estimated: false }  # 긴문맥
  instruction: { s: 68.2, z: 0.61, r: 59.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LongCat 2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# LongCat 2.0

LongCat · Open · Large · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.75 · 출력 $2.95 · 혼합 $0.4555/1M · 61.01505252259469 t/s · TTFT 3.2072754204967286s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.4 | +0.83 | 실측 | [[gpqa-diamond]] 77.97979797979801%×0.4, [[humanitys-last-exam]] 33.688600556070405%×0.3 |
| 추론 | 56.1 | +0.41 | 실측 | [[critpt]] 2.57142857142857%×1.0, [[gpqa-diamond]] 77.97979797979801%×1.0, [[humanitys-last-exam]] 33.688600556070405%×1.0 |
| 코딩 | 54.4 | +0.29 | 실측 | [[scicode]] 36.342592592592595%×1.0 |
| 에이전트 | 48.1 | -0.13 | 실측 | [[gdpval]] 876.13%×1.0, [[tau3-banking]] 13.1958762886598%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.9 | +0.59 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 59.1 | +0.61 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
