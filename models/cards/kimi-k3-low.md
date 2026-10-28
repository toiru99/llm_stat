---
type: Model
title: Kimi K3 (low)
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: 57.0
context_window: 1050000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.3, z: 0.75, r: 61.2, estimated: false }  # 전문 지식
  reasoning: { s: 44.8, z: -0.04, r: 49.3, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.33, r: 69.9, estimated: false }  # 코딩
  agentic: { s: 71.6, z: 1.29, r: 69.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.3, z: 0.71, r: 60.6, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.09, r: 66.4, estimated: false }  # 긴문맥
  instruction: { s: 52.2, z: -0.02, r: 49.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Kimi K3 (low)

Kimi · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 57.0 t/s · TTFT 2.82s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.2 | +0.75 | 실측 | [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 25.0%×0.3 |
| 추론 | 49.3 | -0.04 | 실측 | [[critpt]] 6.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 25.0%×1.0 |
| 코딩 | 69.9 | +1.33 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 69.3 | +1.29 | 실측 | [[gdpval]] 1136.0%×1.0, [[tau3-banking]] 42.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.6 | +0.71 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 66.4 | +1.09 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 49.6 | -0.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
