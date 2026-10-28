---
type: Model
title: Inkling (xhigh)
creator: Thinking Machines
license: Open
intelligence_index: 12.0
price_blended_usd_1m: 0.724
output_speed_tps: 194.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.3, z: 1.05, r: 65.8, estimated: false }  # 전문 지식
  reasoning: { s: 55.4, z: 0.43, r: 56.5, estimated: false }  # 추론
  coding: { s: 66.7, z: 0.99, r: 64.9, estimated: false }  # 코딩
  agentic: { s: 57.4, z: 0.8, r: 62.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.5, z: 0.37, r: 55.5, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.03, r: 65.4, estimated: false }  # 긴문맥
  instruction: { s: 83.4, z: 1.28, r: 69.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Inkling (xhigh)

Thinking Machines · Open · Large · 컨텍스트 1M · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $1.0 · 출력 $4.05 · 혼합 $0.724/1M · 194.0 t/s · TTFT 1.75s · 1M ctx` · 가성비 16.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.8 | +1.05 | 실측 | [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 32.0%×0.3 |
| 추론 | 56.5 | +0.43 | 실측 | [[critpt]] 18.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 32.0%×1.0 |
| 코딩 | 64.9 | +0.99 | 실측 | [[scicode]] 47.0%×1.0 |
| 에이전트 | 62.0 | +0.8 | 실측 | [[gdpval]] 1081.0%×1.0, [[tau3-banking]] 29.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.5 | +0.37 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 65.4 | +1.03 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 69.2 | +1.28 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
