---
type: Model
title: GLM-5.3 (max)
creator: Z AI
license: Open
intelligence_index: 32.0
price_blended_usd_1m: 0.902
output_speed_tps: 76.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.8, z: 1.52, r: 72.7, estimated: false }  # 전문 지식
  reasoning: { s: 70.3, z: 1.11, r: 66.7, estimated: false }  # 추론
  coding: { s: 86.7, z: 1.66, r: 74.9, estimated: false }  # 코딩
  agentic: { s: 89.6, z: 1.9, r: 78.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.13, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: 71.7, z: 0.8, r: 62.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.3 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# GLM-5.3 (max)

Z AI · Open · Large · 컨텍스트 1M · 종합지능 **32.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.902/1M · 76.0 t/s · TTFT 1.76s · 1M ctx` · 가성비 35.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.7 | +1.52 | 실측 | [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 66.7 | +1.11 | 실측 | [[critpt]] 34.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 74.9 | +1.66 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 78.5 | +1.9 | 실측 | [[gdpval]] 1657.0%×1.0, [[itbench]] 46.0%×1.0, [[tau3-banking]] 50.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.0 | +1.13 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 62.0 | +0.8 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
