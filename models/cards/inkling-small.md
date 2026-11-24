---
type: Model
title: Inkling Small
creator: Thinking Machines
license: Open
intelligence_index: 12.9101620926084
price_blended_usd_1m: 0.222
output_speed_tps: 76.6360408558367
context_window: 1000000
status: past
size_class: Large
params_b: 266
is_reasoning: true
radar:
  knowledge: { s: 71.5, z: 1.2, r: 68.1, estimated: false }  # 전문 지식
  reasoning: { s: 53.1, z: 0.89, r: 63.4, estimated: false }  # 추론
  coding: { s: 70.3, z: 0.99, r: 64.8, estimated: false }  # 코딩
  agentic: { s: 52.0, z: 0.17, r: 52.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.4, z: 0.41, r: 56.1, estimated: false }  # 멀티모달
  long_context: { s: 85.3, z: 0.84, r: 62.7, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling Small
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Inkling Small

Thinking Machines · Open · Large(266B) · 컨텍스트 1M · 종합지능 **12.9101620926084** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 76.6360408558367 t/s · TTFT 4.06709786474001s · 1M ctx` · 가성비 58.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 68.1 | +1.2 | 실측 | [[gpqa-diamond]] 89.4949%×0.4, [[humanitys-last-exam]] 33.3179%×0.3 |
| 추론 | 63.4 | +0.89 | 실측 | [[critpt]] 8.28571%×1.0, [[gpqa-diamond]] 89.4949%×1.0, [[humanitys-last-exam]] 33.3179%×1.0 |
| 코딩 | 64.8 | +0.99 | 실측 | [[scicode]] 49.6528%×1.0 |
| 에이전트 | 52.6 | +0.17 | 실측 | [[gdpval]] 1132.8 Elo×1.0, [[tau3-banking]] 18.7629%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.1 | +0.41 | 실측 | [[mmmu-pro]] 74.0462%×1.0 |
| 긴문맥 | 62.7 | +0.84 | 실측 | [[aa-lcr]] 75.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
