---
type: Model
title: GLM-5.3 (low)
creator: Z AI
license: Open
intelligence_index: 23.0
price_blended_usd_1m: 0.902
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.5, z: 0.07, r: 51.0, estimated: false }  # 전문 지식
  reasoning: { s: 38.3, z: -0.24, r: 46.3, estimated: false }  # 추론
  coding: { s: 57.7, z: 0.66, r: 60.0, estimated: false }  # 코딩
  agentic: { s: 71.4, z: 1.23, r: 68.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.0, z: 0.86, r: 62.9, estimated: false }  # 긴문맥
  instruction: { s: 47.3, z: -0.25, r: 46.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.3 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# GLM-5.3 (low)

Z AI · Open · Large · 컨텍스트 1M · 종합지능 **23.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.902/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 25.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.0 | +0.07 | 실측 | [[humanitys-last-exam]] 36.6%×0.3 |
| 추론 | 46.3 | -0.24 | 실측 | [[critpt]] 21.5%×1.0, [[humanitys-last-exam]] 36.6%×1.0 |
| 코딩 | 60.0 | +0.66 | 실측 | [[scicode]] 42.0%×1.0 |
| 에이전트 | 68.5 | +1.23 | 실측 | [[gdpval]] 1333.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.9 | +0.86 | 실측 | [[aa-lcr]] 72.7%×1.0 |
| 지시 따르기 | 46.3 | -0.25 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
