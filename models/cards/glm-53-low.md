---
type: Model
title: GLM-5.3 (low)
creator: Z AI
license: Open
intelligence_index: 23.1079373025379
price_blended_usd_1m: 0.902
output_speed_tps: 56.9407322324776
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.5, z: 0.06, r: 50.8, estimated: false }  # 전문 지식
  reasoning: { s: 44.6, z: 0.45, r: 56.7, estimated: false }  # 추론
  coding: { s: 57.7, z: 0.6, r: 59.0, estimated: false }  # 코딩
  agentic: { s: 76.5, z: 1.09, r: 66.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.0, z: 0.84, r: 62.6, estimated: false }  # 긴문맥
  instruction: { s: 55.1, z: 0.05, r: 50.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.3 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# GLM-5.3 (low)

Z AI · Open · Large · 컨텍스트 1M · 종합지능 **23.1079373025379**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.902/1M · 56.9407322324776 t/s · TTFT 2.91624021441164s · 1M ctx` · 가성비 25.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.8 | +0.06 | 실측 | [[humanitys-last-exam]] 36.5616311399444%×0.3 |
| 추론 | 56.7 | +0.45 | 실측 | [[critpt]] 14.5714285714286%×1.0, [[humanitys-last-exam]] 36.5616311399444%×1.0 |
| 코딩 | 59.0 | +0.6 | 실측 | [[scicode]] 42.0138888888889%×1.0 |
| 에이전트 | 66.4 | +1.09 | 실측 | [[gdpval]] 1332.3%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.6 | +0.84 | 실측 | [[aa-lcr]] 72.6666666666667%×1.0 |
| 지시 따르기 | 50.8 | +0.05 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
