---
type: Model
title: GLM-5.3 (low)
creator: Z AI
license: Open
intelligence_index: 34.0
price_blended_usd_1m: 0.902
output_speed_tps: 75.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.9, z: 0.48, r: 57.1, estimated: false }  # 전문 지식
  reasoning: { s: 53.4, z: 0.76, r: 61.4, estimated: false }  # 추론
  coding: { s: 58.3, z: 0.73, r: 61.0, estimated: false }  # 코딩
  agentic: { s: 60.3, z: 0.81, r: 62.2, estimated: false }  # 에이전트
  trust: { s: 35.1, z: 0.38, r: 55.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.0, z: 0.91, r: 63.6, estimated: false }  # 긴문맥
  instruction: { s: 73.0, z: 0.77, r: 61.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.3 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# GLM-5.3 (low)

Z AI · Open · Large · 컨텍스트 1M · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.902/1M · 75.0 t/s · TTFT 3.22s · 1M ctx` · 가성비 37.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.1 | +0.48 | 실측 | [[aa-omniscience]] 34.0%×1.0, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 61.4 | +0.76 | 실측 | [[critpt]] 15.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 61.0 | +0.73 | 실측 | [[scicode]] 42.0%×1.0 |
| 에이전트 | 62.2 | +0.81 | 실측 | [[gdpval]] 41.0%×1.0 |
| 신뢰성 | 55.7 | +0.38 | 실측 | [[aa-omniscience]] 36.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.6 | +0.91 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 61.6 | +0.77 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
