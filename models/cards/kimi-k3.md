---
type: Model
title: Kimi K3
creator: Kimi
license: Proprietary
intelligence_index: 57.0
price_blended_usd_1m: 2.31
output_speed_tps: 62.0
context_window: 1050000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.2, z: 2.01, r: 80.2, estimated: false }  # 전문 지식
  reasoning: { s: 84.9, z: 2.69, r: 90.3, estimated: false }  # 추론
  coding: { s: 98.3, z: 2.19, r: 82.9, estimated: false }  # 코딩
  agentic: { s: 96.0, z: 2.32, r: 84.8, estimated: false }  # 에이전트
  trust: { s: 56.5, z: 1.35, r: 70.3, estimated: false }  # 신뢰성
  multimodal: { s: 95.7, z: 1.15, r: 67.2, estimated: false }  # 멀티모달
  long_context: { s: 98.7, z: 1.48, r: 72.2, estimated: false }  # 긴문맥
  instruction: { s: 74.0, z: 0.89, r: 63.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-17
timestamp: 2026-07-17T00:00:00Z
---

# Kimi K3

Kimi · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **57.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 62.0 t/s · TTFT 1.99s · 1M ctx` · 가성비 24.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.2 | +2.01 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 44.0%×0.3 |
| 추론 | 90.3 | +2.69 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 44.0%×1.0 |
| 코딩 | 82.9 | +2.19 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 84.8 | +2.32 | 실측 | [[gdpval]] 58.0%×1.0, [[tau3-banking]] 33.0%×1.0 |
| 신뢰성 | 70.3 | +1.35 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | 67.2 | +1.15 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 72.2 | +1.48 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 63.4 | +0.89 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
