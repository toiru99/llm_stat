---
type: Model
title: GLM-5.3-Flash
creator: Z AI
license: Open
intelligence_index: 57.0
price_blended_usd_1m: 0.0982
output_speed_tps: 50.0
context_window: 1000000
status: current
size_class: Large
params_b: 320
is_reasoning: true
radar:
  knowledge: { s: 60.0, z: 0.88, r: 63.2, estimated: false }  # 전문 지식
  reasoning: { s: 71.5, z: 1.73, r: 75.9, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.14, r: 67.0, estimated: false }  # 코딩
  agentic: { s: 93.1, z: 2.14, r: 82.1, estimated: false }  # 에이전트
  trust: { s: 81.4, z: 2.21, r: 83.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.29, r: 69.3, estimated: false }  # 긴문맥
  instruction: { s: 77.6, z: 0.94, r: 64.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.3-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# GLM-5.3-Flash

Z AI · Open · Large(320B) · 컨텍스트 1M · 종합지능 **57.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.15 · 출력 $0.5 · 혼합 $0.0982/1M · 50.0 t/s · TTFT 1.47s · 1M ctx` · 가성비 580.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.2 | +0.88 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 75.9 | +1.73 | 실측 | [[critpt]] 15.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 67.0 | +1.14 | 실측 | [[scicode]] 46.0%×1.0 |
| 에이전트 | 82.1 | +2.14 | 실측 | [[gdpval]] 63.0%×1.0, [[tau3-banking]] 47.0%×1.0 |
| 신뢰성 | 83.1 | +2.21 | 실측 | [[aa-omniscience]] 72.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.3 | +1.29 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 64.1 | +0.94 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
