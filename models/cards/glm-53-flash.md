---
type: Model
title: GLM-5.3-Flash
creator: Z AI
license: Open
intelligence_index: 28.0
price_blended_usd_1m: 0.101
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.5, z: 1.41, r: 71.2, estimated: false }  # 전문 지식
  reasoning: { s: 59.7, z: 0.8, r: 62.0, estimated: false }  # 추론
  coding: { s: 73.5, z: 1.19, r: 67.9, estimated: false }  # 코딩
  agentic: { s: 90.4, z: 1.88, r: 78.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.11, r: 66.6, estimated: false }  # 긴문맥
  instruction: { s: 70.1, z: 0.73, r: 61.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.3-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# GLM-5.3-Flash

Z AI · Open · Large · 컨텍스트 1M · 종합지능 **28.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.15 · 출력 $0.5 · 혼합 $0.101/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 277.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.2 | +1.41 | 실측 | [[gpqa-diamond]] 91.2%×0.4, [[humanitys-last-exam]] 39.9%×0.3 |
| 추론 | 62.0 | +0.8 | 실측 | [[critpt]] 24.5%×1.0, [[gpqa-diamond]] 91.2%×1.0, [[humanitys-last-exam]] 39.9%×1.0 |
| 코딩 | 67.9 | +1.19 | 실측 | [[scicode]] 51.6%×1.0 |
| 에이전트 | 78.1 | +1.88 | 실측 | [[gdpval]] 1649.0%×1.0, [[itbench]] 51.2%×1.0, [[tau3-banking]] 47.2%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.6 | +1.11 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 61.0 | +0.73 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
