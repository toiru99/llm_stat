---
type: Model
title: Inkling (xhigh)
creator: Thinking Machines
license: Open
intelligence_index: 12.4781698715401
price_blended_usd_1m: 0.724
output_speed_tps: 104.97239851072031
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.2, z: 1.07, r: 66.0, estimated: false }  # 전문 지식
  reasoning: { s: 48.9, z: 0.67, r: 60.1, estimated: false }  # 추론
  coding: { s: 65.9, z: 0.89, r: 63.4, estimated: false }  # 코딩
  agentic: { s: 60.9, z: 0.57, r: 58.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.9, z: 0.39, r: 55.8, estimated: false }  # 멀티모달
  long_context: { s: 87.2, z: 1.01, r: 65.1, estimated: false }  # 긴문맥
  instruction: { s: 90.7, z: 1.55, r: 73.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Inkling (xhigh)

Thinking Machines · Open · Large · 컨텍스트 1M · 종합지능 **12.4781698715401**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $1.0 · 출력 $4.05 · 혼합 $0.724/1M · 104.97239851072031 t/s · TTFT 1.6233111243281295s · 1M ctx` · 가성비 17.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.0 | +1.07 | 실측 | [[gpqa-diamond]] 87.1717171717172%×0.4, [[humanitys-last-exam]] 31.881371640407803%×0.3 |
| 추론 | 60.1 | +0.67 | 실측 | [[critpt]] 5.42857142857143%×1.0, [[gpqa-diamond]] 87.1717171717172%×1.0, [[humanitys-last-exam]] 31.881371640407803%×1.0 |
| 코딩 | 63.4 | +0.89 | 실측 | [[scicode]] 46.9907407407407%×1.0 |
| 에이전트 | 58.5 | +0.57 | 실측 | [[gdpval]] 1080.29%×1.0, [[tau3-banking]] 29.0721649484536%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.8 | +0.39 | 실측 | [[mmmu-pro]] 73.4682080924856%×1.0 |
| 긴문맥 | 65.1 | +1.01 | 실측 | [[aa-lcr]] 77.3333333333333%×1.0 |
| 지시 따르기 | 73.2 | +1.55 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
