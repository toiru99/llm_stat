---
type: Model
title: Kimi K3 (low)
creator: Kimi
license: Open
intelligence_index: 30.0
price_blended_usd_1m: 2.31
output_speed_tps: 36.0
context_window: 1050000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.7, z: 1.16, r: 67.4, estimated: false }  # 전문 지식
  reasoning: { s: 45.1, z: 0.39, r: 55.9, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.38, r: 70.7, estimated: false }  # 코딩
  agentic: { s: 64.3, z: 0.97, r: 64.6, estimated: false }  # 에이전트
  trust: { s: 21.6, z: -0.23, r: 46.6, estimated: false }  # 신뢰성
  multimodal: { s: 86.3, z: 0.74, r: 61.2, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: 77.4, z: 0.96, r: 64.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# Kimi K3 (low)

Kimi · Open · Large · 컨텍스트 1M · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 36.0 t/s · TTFT 5.18s · 1M ctx` · 가성비 13.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.4 | +1.16 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 25.0%×0.3 |
| 추론 | 55.9 | +0.39 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 25.0%×1.0 |
| 코딩 | 70.7 | +1.38 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 64.6 | +0.97 | 실측 | [[gdpval]] 31.0%×1.0, [[tau3-banking]] 42.0%×1.0 |
| 신뢰성 | 46.6 | -0.23 | 실측 | [[aa-omniscience]] 23.0%×1.0 |
| 멀티모달 | 61.2 | +0.74 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 64.4 | +0.96 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
