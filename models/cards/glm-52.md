---
type: Model
title: GLM-5.2
creator: Z AI
license: Open
intelligence_index: 35.0
price_blended_usd_1m: 1.2762
output_speed_tps: 114.0
context_window: 1000000
status: current
size_class: Large
params_b: 753
is_reasoning: false
radar:
  knowledge: { s: 36.9, z: -0.18, r: 47.3, estimated: false }  # 전문 지식
  reasoning: { s: 32.1, z: -0.14, r: 48.0, estimated: false }  # 추론
  coding: { s: 60.0, z: 0.53, r: 57.9, estimated: false }  # 코딩
  agentic: { s: 50.2, z: 0.58, r: 58.7, estimated: false }  # 에이전트
  trust: { s: 74.4, z: 2.21, r: 83.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 54.2, z: 0.15, r: 52.3, estimated: false }  # 긴문맥
  instruction: { s: 56.1, z: 0.1, r: 51.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-10
timestamp: 2026-08-10T00:00:00Z
---

# GLM-5.2

Z AI · Open · Large(753B) · 컨텍스트 1M · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $1.35 · 출력 $4.25 · 혼합 $1.2762/1M · 114.0 t/s · TTFT 1.81s · 1M ctx` · 가성비 27.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.3 | -0.18 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 48.0 | -0.14 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 57.9 | +0.53 | 실측 | [[scicode]] 36.0%×1.0 |
| 에이전트 | 58.7 | +0.58 | 실측 | [[gdpval]] 45.0%×1.0, [[tau3-banking]] 17.0%×1.0 |
| 신뢰성 | 83.1 | +2.21 | 실측 | [[aa-omniscience]] 66.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.3 | +0.15 | 실측 | [[aa-lcr]] 45.0%×1.0 |
| 지시 따르기 | 51.5 | +0.1 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
