---
type: Model
title: Kimi K3 (max)
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: 46.60255723241567
context_window: 1048576
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.2, z: 1.7, r: 75.4, estimated: false }  # 전문 지식
  reasoning: { s: 75.0, z: 1.96, r: 79.5, estimated: false }  # 추론
  coding: { s: 86.5, z: 1.59, r: 73.9, estimated: false }  # 코딩
  agentic: { s: 87.6, z: 1.49, r: 72.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 88.3, z: 0.87, r: 63.1, estimated: false }  # 멀티모달
  long_context: { s: 100.0, z: 1.39, r: 70.8, estimated: false }  # 긴문맥
  instruction: { s: 84.0, z: 1.27, r: 69.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Kimi K3 (max)

Kimi · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 46.60255723241567 t/s · TTFT 5.219570462074193s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.4 | +1.7 | 실측 | [[gpqa-diamond]] 93.53535353535351%×0.4, [[humanitys-last-exam]] 46.8952734012975%×0.3 |
| 추론 | 79.5 | +1.96 | 실측 | [[critpt]] 23.4285714285714%×1.0, [[gpqa-diamond]] 93.53535353535351%×1.0, [[humanitys-last-exam]] 46.8952734012975%×1.0 |
| 코딩 | 73.9 | +1.59 | 실측 | [[scicode]] 59.4907407407407%×1.0 |
| 에이전트 | 72.4 | +1.49 | 실측 | [[gdpval]] 1542.33%×1.0, [[tau3-banking]] 45.979381443299%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 63.1 | +0.87 | 실측 | [[mmmu-pro]] 80.52023121387279%×1.0 |
| 긴문맥 | 70.8 | +1.39 | 실측 | [[aa-lcr]] 88.6666666666667%×1.0 |
| 지시 따르기 | 69.0 | +1.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
