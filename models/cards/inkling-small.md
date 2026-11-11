---
type: Model
title: Inkling Small
creator: Thinking Machines
license: Open
intelligence_index: 13.0
price_blended_usd_1m: 0.222
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.5, z: 1.19, r: 67.8, estimated: false }  # 전문 지식
  reasoning: { s: 53.4, z: 0.5, r: 57.6, estimated: false }  # 추론
  coding: { s: 70.4, z: 1.1, r: 66.5, estimated: false }  # 코딩
  agentic: { s: 48.5, z: 0.47, r: 57.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.7, z: 0.42, r: 56.3, estimated: false }  # 멀티모달
  long_context: { s: 85.3, z: 0.97, r: 64.5, estimated: false }  # 긴문맥
  instruction: { s: 80.9, z: 1.21, r: 68.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling Small
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Inkling Small

Thinking Machines · Open · Large · 컨텍스트 1M · 종합지능 **13.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 58.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.8 | +1.19 | 실측 | [[gpqa-diamond]] 89.5%×0.4, [[humanitys-last-exam]] 33.3%×0.3 |
| 추론 | 57.6 | +0.5 | 실측 | [[critpt]] 18.5%×1.0, [[gpqa-diamond]] 89.5%×1.0, [[humanitys-last-exam]] 33.3%×1.0 |
| 코딩 | 66.5 | +1.1 | 실측 | [[scicode]] 49.7%×1.0 |
| 에이전트 | 57.0 | +0.47 | 실측 | [[gdpval]] 1133.0%×1.0, [[tau3-banking]] 18.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.3 | +0.42 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 64.5 | +0.97 | 실측 | [[aa-lcr]] 75.7%×1.0 |
| 지시 따르기 | 68.1 | +1.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
