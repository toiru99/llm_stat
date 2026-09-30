---
type: Model
title: GLM-5.3-Flash
creator: Z AI
license: Open
intelligence_index: 42.0
price_blended_usd_1m: 0.0982
output_speed_tps: 45.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 58.2, z: 0.74, r: 61.1, estimated: false }  # 전문 지식
  reasoning: { s: 68.7, z: 1.48, r: 72.2, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.34, r: 70.2, estimated: false }  # 코딩
  agentic: { s: 89.4, z: 1.96, r: 79.4, estimated: false }  # 에이전트
  trust: { s: 72.2, z: 2.15, r: 82.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.17, r: 67.6, estimated: false }  # 긴문맥
  instruction: { s: 80.0, z: 1.08, r: 66.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.3-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# GLM-5.3-Flash

Z AI · Open · Large · 컨텍스트 1M · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.15 · 출력 $0.5 · 혼합 $0.0982/1M · 45.0 t/s · TTFT 3.31s · 1M ctx` · 가성비 427.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.1 | +0.74 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 72.2 | +1.48 | 실측 | [[critpt]] 15.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 70.2 | +1.34 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 79.4 | +1.96 | 실측 | [[gdpval]] 57.0%×1.0, [[itbench]] 51.0%×1.0, [[tau3-banking]] 47.0%×1.0 |
| 신뢰성 | 82.2 | +2.15 | 실측 | [[aa-omniscience]] 72.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.6 | +1.17 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 66.2 | +1.08 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
