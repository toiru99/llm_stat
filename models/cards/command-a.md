---
type: Model
title: Command A+
creator: Cohere
license: Open
intelligence_index: 6.24120025576958
price_blended_usd_1m: 0
output_speed_tps: 190.050018734376
context_window: 192000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.2, z: 0.14, r: 52.0, estimated: false }  # 전문 지식
  reasoning: { s: 30.8, z: -0.24, r: 46.4, estimated: false }  # 추론
  coding: { s: 47.3, z: 0.25, r: 53.7, estimated: false }  # 코딩
  agentic: { s: 42.8, z: -0.07, r: 48.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 65.0, z: -0.33, r: 45.1, estimated: false }  # 멀티모달
  long_context: { s: 59.4, z: 0.17, r: 52.6, estimated: false }  # 긴문맥
  instruction: { s: 86.8, z: 1.38, r: 70.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Command A+
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Command A+

Cohere · Open · Large · 컨텍스트 192k · 종합지능 **6.24120025576958**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 190.050018734376 t/s · TTFT 0.93036703881247s · 192k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.0 | +0.14 | 실측 | [[gpqa-diamond]] 76.06060606060609%×0.4, [[humanitys-last-exam]] 11.9555143651529%×0.3 |
| 추론 | 46.4 | -0.24 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 76.06060606060609%×1.0, [[humanitys-last-exam]] 11.9555143651529%×1.0 |
| 코딩 | 53.7 | +0.25 | 실측 | [[scicode]] 38.5416666666667%×1.0, [[terminal-bench]] 25.0%×0.5 |
| 에이전트 | 48.9 | -0.07 | 실측 | [[gdpval]] 521.53%×1.0, [[tau2-bench]] 80.7017543859649%×1.0, [[tau3-banking]] 5.97938144329897%×1.0, [[terminal-bench]] 25.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 45.1 | -0.33 | 실측 | [[mmmu-pro]] 63.2369942196532%×1.0 |
| 긴문맥 | 52.6 | +0.17 | 실측 | [[aa-lcr]] 52.66666666666669%×1.0 |
| 지시 따르기 | 70.7 | +1.38 | 실측 | [[ifbench]] 73.9455782312925%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
