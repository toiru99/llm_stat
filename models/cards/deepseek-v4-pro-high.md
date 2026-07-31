---
type: Model
title: DeepSeek V4 Pro (high)
creator: DeepSeek
license: Open
intelligence_index: 43.0
price_blended_usd_1m: None
output_speed_tps: 59.0
context_window: 1000000
status: current
size_class: Large
params_b: 1600
is_reasoning: true
radar:
  knowledge: { s: 74.1, z: 1.55, r: 73.2, estimated: false }  # 전문 지식
  reasoning: { s: 63.7, z: 1.47, r: 72.1, estimated: false }  # 추론
  coding: { s: 72.3, z: 1.06, r: 65.8, estimated: false }  # 코딩
  agentic: { s: 72.0, z: 1.39, r: 70.8, estimated: false }  # 에이전트
  trust: { s: 11.5, z: -0.79, r: 38.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.07, r: 66.0, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.24, r: 68.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-31
timestamp: 2026-07-31T00:00:00Z
---

# DeepSeek V4 Pro (high)

DeepSeek · Open · Large(1600B) · 컨텍스트 1M · 종합지능 **43.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.43 · 출력 $0.87 · 혼합 $None/1M · 59.0 t/s · TTFT 1.57s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.2 | +1.55 | 실측 | [[aa-omniscience]] 42.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 72.1 | +1.47 | 실측 | [[critpt]] 10.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 65.8 | +1.06 | 실측 | [[scicode]] 46.0%×1.0, [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 70.8 | +1.39 | 실측 | [[gdpval]] 40.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 24.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 38.2 | -0.79 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.0 | +1.07 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 68.6 | +1.24 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
