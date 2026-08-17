---
type: Model
title: Kimi K3 (low)
creator: Kimi
license: Open
intelligence_index: 48.0
price_blended_usd_1m: 2.31
output_speed_tps: 39.0
context_window: 1050000
status: current
size_class: Large
params_b: 2780
is_reasoning: true
radar:
  knowledge: { s: 69.7, z: 1.35, r: 70.3, estimated: false }  # 전문 지식
  reasoning: { s: 47.0, z: 0.57, r: 58.5, estimated: false }  # 추론
  coding: { s: 85.0, z: 1.51, r: 72.6, estimated: false }  # 코딩
  agentic: { s: 69.5, z: 1.3, r: 69.5, estimated: false }  # 에이전트
  trust: { s: 24.4, z: -0.12, r: 48.2, estimated: false }  # 신뢰성
  multimodal: { s: 90.0, z: 0.85, r: 62.7, estimated: false }  # 멀티모달
  long_context: { s: 92.8, z: 1.28, r: 69.2, estimated: false }  # 긴문맥
  instruction: { s: 80.0, z: 1.05, r: 65.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-17
timestamp: 2026-08-17T00:00:00Z
---

# Kimi K3 (low)

Kimi · Open · Large(2780B) · 컨텍스트 1M · 종합지능 **48.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 39.0 t/s · TTFT 2.8s · 1M ctx` · 가성비 20.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.3 | +1.35 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 25.0%×0.3 |
| 추론 | 58.5 | +0.57 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 25.0%×1.0 |
| 코딩 | 72.6 | +1.51 | 실측 | [[scicode]] 51.0%×1.0 |
| 에이전트 | 69.5 | +1.3 | 실측 | [[gdpval]] 38.0%×1.0, [[tau3-banking]] 42.0%×1.0 |
| 신뢰성 | 48.2 | -0.12 | 실측 | [[aa-omniscience]] 23.0%×1.0 |
| 멀티모달 | 62.7 | +0.85 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 69.2 | +1.28 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 65.7 | +1.05 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
