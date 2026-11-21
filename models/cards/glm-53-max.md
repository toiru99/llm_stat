---
type: Model
title: GLM-5.3 (max)
creator: Z AI
license: Open
intelligence_index: 31.653381843882
price_blended_usd_1m: 0.902
output_speed_tps: 73.3371439476293
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.3, z: 1.49, r: 72.4, estimated: false }  # 전문 지식
  reasoning: { s: 68.2, z: 1.61, r: 74.1, estimated: false }  # 추론
  coding: { s: 85.7, z: 1.55, r: 73.2, estimated: false }  # 코딩
  agentic: { s: 94.3, z: 1.71, r: 75.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 1.07, r: 66.1, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.05, r: 65.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.3 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# GLM-5.3 (max)

Z AI · Open · Large · 컨텍스트 1M · 종합지능 **31.653381843882**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.902/1M · 73.3371439476293 t/s · TTFT 3.04659252474682s · 1M ctx` · 가성비 35.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.4 | +1.49 | 실측 | [[gpqa-diamond]] 91.7171717171717%×0.4, [[humanitys-last-exam]] 42.2613531047266%×0.3 |
| 추론 | 74.1 | +1.61 | 실측 | [[critpt]] 19.1428571428571%×1.0, [[gpqa-diamond]] 91.7171717171717%×1.0, [[humanitys-last-exam]] 42.2613531047266%×1.0 |
| 코딩 | 73.2 | +1.55 | 실측 | [[scicode]] 59.0277777777778%×1.0 |
| 에이전트 | 75.6 | +1.71 | 실측 | [[gdpval]] 1654.78%×1.0, [[tau3-banking]] 50.3092783505155%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.1 | +1.07 | 실측 | [[aa-lcr]] 79.6666666666667%×1.0 |
| 지시 따르기 | 65.7 | +1.05 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
