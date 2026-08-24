---
type: Model
title: K2-V2 (medium)
creator: MBZUAI Institute of Foundation Models
license: Open
intelligence_index: 12.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 512000
status: current
size_class: Medium
params_b: 70
is_reasoning: true
radar:
  knowledge: { s: 30.4, z: -0.52, r: 42.2, estimated: false }  # 전문 지식
  reasoning: { s: 21.5, z: -0.69, r: 39.6, estimated: false }  # 추론
  coding: { s: 31.8, z: -0.68, r: 39.7, estimated: false }  # 코딩
  agentic: { s: 18.7, z: -0.72, r: 39.2, estimated: false }  # 에이전트
  trust: { s: 18.6, z: -0.41, r: 43.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 33.7, z: -0.51, r: 42.3, estimated: false }  # 긴문맥
  instruction: { s: 60.6, z: 0.25, r: 53.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2-V2 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# K2-V2 (medium)

MBZUAI Institute of Foundation Models · Open · Medium(70B) · 컨텍스트 512k · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 512k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.2 | -0.52 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 60.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.6 | -0.69 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 60.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 39.7 | -0.68 | 실측 | [[scicode]] 25.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 39.2 | -0.72 | 실측 | [[tau2-bench]] 25.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 43.9 | -0.41 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.3 | -0.51 | 실측 | [[aa-lcr]] 28.0%×1.0 |
| 지시 따르기 | 53.8 | +0.25 | 실측 | [[ifbench]] 55.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
