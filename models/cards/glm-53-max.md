---
type: Model
title: GLM-5.3 (max)
creator: Z AI
license: Open
intelligence_index: 32.0
price_blended_usd_1m: 0.902
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.2, z: 1.51, r: 72.7, estimated: false }  # 전문 지식
  reasoning: { s: 64.9, z: 1.07, r: 66.0, estimated: false }  # 추론
  coding: { s: 85.7, z: 1.61, r: 74.2, estimated: false }  # 코딩
  agentic: { s: 89.6, z: 1.86, r: 77.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.1, r: 66.6, estimated: false }  # 긴문맥
  instruction: { s: 69.5, z: 0.72, r: 60.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.3 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# GLM-5.3 (max)

Z AI · Open · Large · 컨텍스트 1M · 종합지능 **32.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.902/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 35.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.7 | +1.51 | 실측 | [[gpqa-diamond]] 91.7%×0.4, [[humanitys-last-exam]] 42.3%×0.3 |
| 추론 | 66.0 | +1.07 | 실측 | [[critpt]] 33.5%×1.0, [[gpqa-diamond]] 91.7%×1.0, [[humanitys-last-exam]] 42.3%×1.0 |
| 코딩 | 74.2 | +1.61 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 77.9 | +1.86 | 실측 | [[gdpval]] 1657.0%×1.0, [[itbench]] 46.1%×1.0, [[tau3-banking]] 50.3%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.6 | +1.1 | 실측 | [[aa-lcr]] 79.7%×1.0 |
| 지시 따르기 | 60.8 | +0.72 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
