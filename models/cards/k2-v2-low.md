---
type: Model
title: K2-V2 (low)
creator: MBZUAI Institute of Foundation Models
license: Open
intelligence_index: 8.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 512000
status: current
size_class: Medium
params_b: 70
is_reasoning: true
radar:
  knowledge: { s: 26.9, z: -0.69, r: 39.7, estimated: false }  # 전문 지식
  reasoning: { s: 19.1, z: -0.81, r: 37.8, estimated: false }  # 추론
  coding: { s: 27.0, z: -0.89, r: 36.6, estimated: false }  # 코딩
  agentic: { s: 14.4, z: -0.88, r: 36.8, estimated: false }  # 에이전트
  trust: { s: 25.6, z: -0.14, r: 47.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 24.1, z: -0.81, r: 37.9, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.55, r: 41.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2-V2 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# K2-V2 (low)

MBZUAI Institute of Foundation Models · Open · Medium(70B) · 컨텍스트 512k · 종합지능 **8.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 512k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.7 | -0.69 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 54.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.8 | -0.81 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 54.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 36.6 | -0.89 | 실측 | [[scicode]] 22.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 36.8 | -0.88 | 실측 | [[tau2-bench]] 21.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 47.9 | -0.14 | 실측 | [[aa-omniscience]] 24.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.9 | -0.81 | 실측 | [[aa-lcr]] 20.0%×1.0 |
| 지시 따르기 | 41.7 | -0.55 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
