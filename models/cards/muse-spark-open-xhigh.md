---
type: Model
title: Muse Spark Open (xhigh)
creator: Meta
license: Open
intelligence_index: 39.0
price_blended_usd_1m: 0.78
output_speed_tps: 204.0
context_window: 1050000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 68.5, z: 1.17, r: 67.6, estimated: false }  # 전문 지식
  reasoning: { s: 69.7, z: 1.47, r: 72.0, estimated: false }  # 추론
  coding: { s: 85.0, z: 1.59, r: 73.9, estimated: false }  # 코딩
  agentic: { s: 75.0, z: 1.39, r: 70.8, estimated: false }  # 에이전트
  trust: { s: 76.3, z: 2.22, r: 83.3, estimated: false }  # 신뢰성
  multimodal: { s: 90.4, z: 0.91, r: 63.7, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.04, r: 65.7, estimated: false }  # 긴문맥
  instruction: { s: 70.3, z: 0.67, r: 60.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark Open (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Muse Spark Open (xhigh)

Meta · Open · Large · 컨텍스트 1M · 종합지능 **39.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · 204.0 t/s · TTFT 0.77s · 1M ctx` · 가성비 50.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.6 | +1.17 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 44.0%×0.3 |
| 추론 | 72.0 | +1.47 | 실측 | [[critpt]] 15.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 44.0%×1.0 |
| 코딩 | 73.9 | +1.59 | 실측 | [[scicode]] 58.0%×1.0 |
| 에이전트 | 70.8 | +1.39 | 실측 | [[gdpval]] 1401.0%×1.0 |
| 신뢰성 | 83.3 | +2.22 | 실측 | [[aa-omniscience]] 76.0%×1.0 |
| 멀티모달 | 63.7 | +0.91 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 65.7 | +1.04 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 60.1 | +0.67 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
