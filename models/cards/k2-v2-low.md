---
type: Model
title: K2-V2 (low)
creator: MBZUAI Institute of Foundation Models
license: Open
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 512000
status: current
size_class: Medium
params_b: 70
is_reasoning: true
radar:
  knowledge: { s: 28.0, z: -0.61, r: 40.9, estimated: false }  # 전문 지식
  reasoning: { s: 19.4, z: -0.75, r: 38.7, estimated: false }  # 추론
  coding: { s: 27.0, z: -0.81, r: 37.8, estimated: false }  # 코딩
  agentic: { s: 14.4, z: -0.85, r: 37.2, estimated: false }  # 에이전트
  trust: { s: 27.1, z: -0.03, r: 49.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 25.0, z: -0.7, r: 39.5, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.48, r: 42.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2-V2 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-19
timestamp: 2026-07-19T00:00:00Z
---

# K2-V2 (low)

MBZUAI Institute of Foundation Models · Open · Medium(70B) · 컨텍스트 512k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 512k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.9 | -0.61 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 54.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.7 | -0.75 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 54.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 37.8 | -0.81 | 실측 | [[scicode]] 22.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 37.2 | -0.85 | 실측 | [[tau2-bench]] 21.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 49.5 | -0.03 | 실측 | [[aa-omniscience]] 24.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.5 | -0.7 | 실측 | [[aa-lcr]] 19.0%×1.0 |
| 지시 따르기 | 42.8 | -0.48 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
