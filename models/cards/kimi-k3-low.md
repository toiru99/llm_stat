---
type: Model
title: Kimi K3 (low)
creator: Kimi
license: Open
intelligence_index: 17.4191985300887
price_blended_usd_1m: 2.31
output_speed_tps: 39.5185036246944
context_window: 1048576
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.2, z: 0.77, r: 61.5, estimated: false }  # 전문 지식
  reasoning: { s: 42.5, z: 0.34, r: 55.1, estimated: false }  # 추론
  coding: { s: 75.2, z: 1.19, r: 67.9, estimated: false }  # 코딩
  agentic: { s: 74.4, z: 1.02, r: 65.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.4, z: 0.71, r: 60.7, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 73.8, z: 0.84, r: 62.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Kimi K3 (low)

Kimi · Open · Large · 컨텍스트 1M · 종합지능 **17.4191985300887** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 39.5185036246944 t/s · TTFT 4.66976024534289s · 1M ctx` · 가성비 7.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.5 | +0.77 | 실측 | [[gpqa-diamond]] 84.24242424242419%×0.4, [[humanitys-last-exam]] 24.976830398517098%×0.3 |
| 추론 | 55.1 | +0.34 | 실측 | [[critpt]] 3.14285714285714%×1.0, [[gpqa-diamond]] 84.24242424242419%×1.0, [[humanitys-last-exam]] 24.976830398517098%×1.0 |
| 코딩 | 67.9 | +1.19 | 실측 | [[scicode]] 52.662037037037%×1.0 |
| 에이전트 | 65.3 | +1.02 | 실측 | [[gdpval]] 1135.72%×1.0, [[tau3-banking]] 41.6494845360825%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.7 | +0.71 | 실측 | [[mmmu-pro]] 78.4971098265896%×1.0 |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 79.3333333333333%×1.0 |
| 지시 따르기 | 62.5 | +0.84 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
