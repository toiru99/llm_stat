---
type: Model
title: Kimi K3 (low)
creator: Kimi
license: Open
intelligence_index: 47.0
price_blended_usd_1m: None
output_speed_tps: 34.0
context_window: 1050000
status: current
size_class: Large
params_b: 2780
is_reasoning: true
radar:
  knowledge: { s: 70.7, z: 1.38, r: 70.8, estimated: false }  # 전문 지식
  reasoning: { s: 47.2, z: 0.64, r: 59.6, estimated: false }  # 추론
  coding: { s: 85.0, z: 1.58, r: 73.7, estimated: false }  # 코딩
  agentic: { s: 78.7, z: 1.64, r: 74.6, estimated: false }  # 에이전트
  trust: { s: 28.7, z: 0.03, r: 50.5, estimated: false }  # 신뢰성
  multimodal: { s: 90.0, z: 0.88, r: 63.3, estimated: false }  # 멀티모달
  long_context: { s: 90.8, z: 1.22, r: 68.3, estimated: false }  # 긴문맥
  instruction: { s: 73.5, z: 0.84, r: 62.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# Kimi K3 (low)

Kimi · Open · Large(2780B) · 컨텍스트 1M · 종합지능 **47.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $None/1M · 34.0 t/s · TTFT 3.45s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.8 | +1.38 | 실측 | [[aa-omniscience]] 44.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 59.6 | +0.64 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 73.7 | +1.58 | 실측 | [[scicode]] 51.0%×1.0 |
| 에이전트 | 74.6 | +1.64 | 실측 | [[gdpval]] 39.0%×1.0, [[tau3-banking]] 34.0%×1.0 |
| 신뢰성 | 50.5 | +0.03 | 실측 | [[aa-omniscience]] 26.0%×1.0 |
| 멀티모달 | 63.3 | +0.88 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 68.3 | +1.22 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 62.6 | +0.84 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
