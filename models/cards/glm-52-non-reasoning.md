---
type: Model
title: GLM-5.2 (Non-reasoning)
creator: Z AI
license: Open
intelligence_index: 35.0
price_blended_usd_1m: 0.8845
output_speed_tps: 98.0
context_window: 1000000
status: current
size_class: Large
params_b: 753
is_reasoning: false
radar:
  knowledge: { s: 36.6, z: -0.2, r: 47.1, estimated: false }  # 전문 지식
  reasoning: { s: 31.4, z: -0.17, r: 47.5, estimated: false }  # 추론
  coding: { s: 58.1, z: 0.46, r: 56.9, estimated: false }  # 코딩
  agentic: { s: 48.7, z: 0.44, r: 56.6, estimated: false }  # 에이전트
  trust: { s: 66.0, z: 1.95, r: 79.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 54.2, z: 0.12, r: 51.8, estimated: false }  # 긴문맥
  instruction: { s: 47.0, z: -0.25, r: 46.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.2 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# GLM-5.2 (Non-reasoning)

Z AI · Open · Large(753B) · 컨텍스트 1M · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.8845/1M · 98.0 t/s · TTFT 2.03s · 1M ctx` · 가성비 39.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.1 | -0.2 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 47.5 | -0.17 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 56.9 | +0.46 | 실측 | [[scicode]] 36.0%×1.0 |
| 에이전트 | 56.6 | +0.44 | 실측 | [[gdpval]] 44.0%×1.0, [[tau3-banking]] 17.0%×1.0 |
| 신뢰성 | 79.3 | +1.95 | 실측 | [[aa-omniscience]] 66.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 51.8 | +0.12 | 실측 | [[aa-lcr]] 45.0%×1.0 |
| 지시 따르기 | 46.3 | -0.25 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
