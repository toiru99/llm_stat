---
type: Model
title: Inkling
creator: Thinking Machines
license: Open
intelligence_index: 42.0
price_blended_usd_1m: 0.724
output_speed_tps: 56.0
context_window: 1000000
status: current
size_class: Large
params_b: 975
is_reasoning: true
radar:
  knowledge: { s: 69.1, z: 1.32, r: 69.7, estimated: false }  # 전문 지식
  reasoning: { s: 54.5, z: 0.92, r: 63.8, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.15, r: 67.2, estimated: false }  # 코딩
  agentic: { s: 56.0, z: 0.73, r: 60.9, estimated: false }  # 에이전트
  trust: { s: 34.9, z: 0.29, r: 54.4, estimated: false }  # 신뢰성
  multimodal: { s: 82.9, z: 0.5, r: 57.5, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: 74.1, z: 0.8, r: 62.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# Inkling

Thinking Machines · Open · Large(975B) · 컨텍스트 1M · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.0 · 출력 $4.05 · 혼합 $0.724/1M · 56.0 t/s · TTFT 2.63s · 1M ctx` · 가성비 58.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.7 | +1.32 | 실측 | [[aa-omniscience]] 42.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 32.0%×0.3 |
| 추론 | 63.8 | +0.92 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 32.0%×1.0 |
| 코딩 | 67.2 | +1.15 | 실측 | [[scicode]] 46.0%×1.0 |
| 에이전트 | 60.9 | +0.73 | 실측 | [[gdpval]] 37.0%×1.0, [[tau3-banking]] 29.0%×1.0 |
| 신뢰성 | 54.4 | +0.29 | 실측 | [[aa-omniscience]] 32.0%×1.0 |
| 멀티모달 | 57.5 | +0.5 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 62.0 | +0.8 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
