---
type: Model
title: Kimi K3 (low)
creator: Kimi
license: Open
intelligence_index: 39.0
price_blended_usd_1m: 2.31
output_speed_tps: 39.0
context_window: 1050000
status: current
size_class: Large
params_b: 2780
is_reasoning: true
radar:
  knowledge: { s: 67.9, z: 1.3, r: 69.5, estimated: false }  # 전문 지식
  reasoning: { s: 45.6, z: 0.51, r: 57.6, estimated: false }  # 추론
  coding: { s: 79.6, z: 1.67, r: 75.0, estimated: false }  # 코딩
  agentic: { s: 68.2, z: 1.17, r: 67.6, estimated: false }  # 에이전트
  trust: { s: 21.6, z: -0.13, r: 48.0, estimated: false }  # 신뢰성
  multimodal: { s: 87.5, z: 0.86, r: 62.9, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.22, r: 68.3, estimated: false }  # 긴문맥
  instruction: { s: 70.7, z: 0.76, r: 61.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Kimi K3 (low)

Kimi · Open · Large(2780B) · 컨텍스트 1M · 종합지능 **39.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 39.0 t/s · TTFT 4.69s · 1M ctx` · 가성비 16.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.5 | +1.3 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 25.0%×0.3 |
| 추론 | 57.6 | +0.51 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 25.0%×1.0 |
| 코딩 | 75.0 | +1.67 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 67.6 | +1.17 | 실측 | [[gdpval]] 35.0%×1.0, [[tau3-banking]] 42.0%×1.0 |
| 신뢰성 | 48.0 | -0.13 | 실측 | [[aa-omniscience]] 23.0%×1.0 |
| 멀티모달 | 62.9 | +0.86 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 68.3 | +1.22 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 61.4 | +0.76 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
