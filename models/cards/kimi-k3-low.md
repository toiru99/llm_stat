---
type: Model
title: Kimi K3 (low)
creator: Kimi
license: Open
intelligence_index: 34.0
price_blended_usd_1m: 2.31
output_speed_tps: 38.0
context_window: 1050000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.7, z: 1.23, r: 68.5, estimated: false }  # 전문 지식
  reasoning: { s: 45.1, z: 0.45, r: 56.7, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.44, r: 71.7, estimated: false }  # 코딩
  agentic: { s: 82.4, z: 1.71, r: 75.7, estimated: false }  # 에이전트
  trust: { s: 21.6, z: -0.19, r: 47.2, estimated: false }  # 신뢰성
  multimodal: { s: 86.3, z: 0.8, r: 62.0, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.16, r: 67.5, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.76, r: 61.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# Kimi K3 (low)

Kimi · Open · Large · 컨텍스트 1M · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 38.0 t/s · TTFT 4.33s · 1M ctx` · 가성비 14.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.5 | +1.23 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 25.0%×0.3 |
| 추론 | 56.7 | +0.45 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 25.0%×1.0 |
| 코딩 | 71.7 | +1.44 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 75.7 | +1.71 | 실측 | [[tau3-banking]] 42.0%×1.0 |
| 신뢰성 | 47.2 | -0.19 | 실측 | [[aa-omniscience]] 23.0%×1.0 |
| 멀티모달 | 62.0 | +0.8 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 67.5 | +1.16 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 61.4 | +0.76 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
