---
type: Model
title: gpt-oss-120b (low)
creator: OpenAI
license: Open
intelligence_index: 15.0
price_blended_usd_1m: None
output_speed_tps: 266.0
context_window: 131000
status: current
size_class: Medium
params_b: 117
is_reasoning: true
radar:
  knowledge: { s: 32.0, z: -0.44, r: 43.5, estimated: false }  # 전문 지식
  reasoning: { s: 25.2, z: -0.47, r: 43.0, estimated: false }  # 추론
  coding: { s: 42.5, z: -0.19, r: 47.2, estimated: false }  # 코딩
  agentic: { s: 15.5, z: -0.81, r: 37.8, estimated: false }  # 에이전트
  trust: { s: 24.1, z: -0.19, r: 47.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 57.9, z: 0.25, r: 53.7, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: 0.48, r: 57.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-120b (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# gpt-oss-120b (low)

OpenAI · Open · Medium(117B) · 컨텍스트 131k · 종합지능 **15.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.15 · 출력 $0.59 · 혼합 $None/1M · 266.0 t/s · TTFT 0.89s · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.5 | -0.44 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 43.0 | -0.47 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 47.2 | -0.19 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 37.8 | -0.81 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 45.0%×1.0, [[tau3-banking]] 3.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 47.2 | -0.19 | 실측 | [[aa-omniscience]] 22.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.7 | +0.25 | 실측 | [[aa-lcr]] 44.0%×1.0 |
| 지시 따르기 | 57.2 | +0.48 | 실측 | [[ifbench]] 58.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
