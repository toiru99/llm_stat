---
type: Model
title: GLM-5.3-Flash
creator: Z AI
license: Open
intelligence_index: 46.0
price_blended_usd_1m: 0.0982
output_speed_tps: 48.0
context_window: 1000000
status: current
size_class: Large
params_b: 320
is_reasoning: true
radar:
  knowledge: { s: 58.6, z: 0.85, r: 62.8, estimated: false }  # 전문 지식
  reasoning: { s: 69.4, z: 1.65, r: 74.8, estimated: false }  # 추론
  coding: { s: 77.6, z: 1.6, r: 74.0, estimated: false }  # 코딩
  agentic: { s: 92.0, z: 2.09, r: 81.3, estimated: false }  # 에이전트
  trust: { s: 72.2, z: 2.26, r: 83.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.25, r: 68.8, estimated: false }  # 긴문맥
  instruction: { s: 80.1, z: 1.15, r: 67.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.3-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# GLM-5.3-Flash

Z AI · Open · Large(320B) · 컨텍스트 1M · 종합지능 **46.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.15 · 출력 $0.5 · 혼합 $0.0982/1M · 48.0 t/s · TTFT 1.64s · 1M ctx` · 가성비 468.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.8 | +0.85 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 74.8 | +1.65 | 실측 | [[critpt]] 15.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 74.0 | +1.6 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 81.3 | +2.09 | 실측 | [[gdpval]] 59.0%×1.0, [[tau3-banking]] 47.0%×1.0 |
| 신뢰성 | 83.8 | +2.26 | 실측 | [[aa-omniscience]] 72.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.8 | +1.25 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 67.3 | +1.15 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
