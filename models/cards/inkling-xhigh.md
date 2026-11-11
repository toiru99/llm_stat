---
type: Model
title: Inkling (xhigh)
creator: Thinking Machines
license: Open
intelligence_index: 12.0
price_blended_usd_1m: 0.724
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.2, z: 1.07, r: 66.1, estimated: false }  # 전문 지식
  reasoning: { s: 51.7, z: 0.42, r: 56.3, estimated: false }  # 추론
  coding: { s: 66.0, z: 0.95, r: 64.2, estimated: false }  # 코딩
  agentic: { s: 57.2, z: 0.76, r: 61.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.4, z: 0.35, r: 55.2, estimated: false }  # 멀티모달
  long_context: { s: 87.1, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 83.2, z: 1.31, r: 69.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Inkling (xhigh)

Thinking Machines · Open · Large · 컨텍스트 1M · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $1.0 · 출력 $4.05 · 혼합 $0.724/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 16.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.1 | +1.07 | 실측 | [[gpqa-diamond]] 87.2%×0.4, [[humanitys-last-exam]] 31.9%×0.3 |
| 추론 | 56.3 | +0.42 | 실측 | [[critpt]] 18.0%×1.0, [[gpqa-diamond]] 87.2%×1.0, [[humanitys-last-exam]] 31.9%×1.0 |
| 코딩 | 64.2 | +0.95 | 실측 | [[scicode]] 47.0%×1.0 |
| 에이전트 | 61.4 | +0.76 | 실측 | [[gdpval]] 1080.0%×1.0, [[tau3-banking]] 29.1%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.2 | +0.35 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 77.3%×1.0 |
| 지시 따르기 | 69.6 | +1.31 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
