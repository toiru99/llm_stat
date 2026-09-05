---
type: Model
title: GLM-5.2 (Non-reasoning)
creator: Z AI
license: Open
intelligence_index: 26.0
price_blended_usd_1m: 0.902
output_speed_tps: 110.0
context_window: 1000000
status: current
size_class: Large
params_b: 753
is_reasoning: false
radar:
  knowledge: { s: 36.4, z: -0.22, r: 46.8, estimated: false }  # 전문 지식
  reasoning: { s: 31.2, z: -0.19, r: 47.2, estimated: false }  # 추론
  coding: { s: 33.6, z: 0.06, r: 50.9, estimated: true }  # 코딩
  agentic: { s: 48.9, z: 0.44, r: 56.5, estimated: false }  # 에이전트
  trust: { s: 66.0, z: 1.96, r: 79.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.2, z: -0.06, r: 49.1, estimated: false }  # 긴문맥
  instruction: { s: 45.6, z: -0.29, r: 45.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.2 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# GLM-5.2 (Non-reasoning)

Z AI · Open · Large(753B) · 컨텍스트 1M · 종합지능 **26.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.902/1M · 110.0 t/s · TTFT 2.03s · 1M ctx` · 가성비 28.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.8 | -0.22 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 47.2 | -0.19 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 50.9 | +0.06 | 추정 | (추정) |
| 에이전트 | 56.5 | +0.44 | 실측 | [[gdpval]] 41.0%×1.0, [[tau3-banking]] 17.0%×1.0 |
| 신뢰성 | 79.5 | +1.96 | 실측 | [[aa-omniscience]] 66.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.1 | -0.06 | 실측 | [[aa-lcr]] 42.0%×1.0 |
| 지시 따르기 | 45.6 | -0.29 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
