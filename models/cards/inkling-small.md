---
type: Model
title: Inkling Small
creator: Thinking Machines
license: Open
intelligence_index: 13.0
price_blended_usd_1m: 0.222
output_speed_tps: 204.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 75.3, z: 1.14, r: 67.2, estimated: false }  # 전문 지식
  reasoning: { s: 57.2, z: 0.52, r: 57.8, estimated: false }  # 추론
  coding: { s: 71.7, z: 1.16, r: 67.4, estimated: false }  # 코딩
  agentic: { s: 49.0, z: 0.51, r: 57.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 80.8, z: 0.44, r: 56.5, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 1.0, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: 82.0, z: 1.23, r: 68.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling Small
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Inkling Small

Thinking Machines · Open · Large · 컨텍스트 1M · 종합지능 **13.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 204.0 t/s · TTFT 1.54s · 1M ctx` · 가성비 58.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.2 | +1.14 | 실측 | [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 57.8 | +0.52 | 실측 | [[critpt]] 19.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 67.4 | +1.16 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 57.6 | +0.51 | 실측 | [[gdpval]] 1133.0%×1.0, [[tau3-banking]] 19.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.5 | +0.44 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 64.9 | +1.0 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 68.4 | +1.23 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
