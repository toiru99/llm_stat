---
type: Model
title: K2-V2 (high)
creator: MBZUAI Institute of Foundation Models
license: Open
intelligence_index: 14.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 512000
status: current
size_class: Medium
params_b: 70
is_reasoning: true
radar:
  knowledge: { s: 36.5, z: -0.21, r: 46.9, estimated: false }  # 전문 지식
  reasoning: { s: 28.9, z: -0.28, r: 45.8, estimated: false }  # 추론
  coding: { s: 37.3, z: -0.43, r: 43.5, estimated: false }  # 코딩
  agentic: { s: 21.7, z: -0.59, r: 41.1, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.8, r: 38.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 43.4, z: -0.18, r: 47.3, estimated: false }  # 긴문맥
  instruction: { s: 67.6, z: 0.64, r: 59.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2-V2 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# K2-V2 (high)

MBZUAI Institute of Foundation Models · Open · Medium(70B) · 컨텍스트 512k · 종합지능 **14.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 512k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.9 | -0.21 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 68.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 45.8 | -0.28 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 68.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 43.5 | -0.43 | 실측 | [[scicode]] 29.0%×1.0, [[terminal-bench]] 10.0%×0.5 |
| 에이전트 | 41.1 | -0.59 | 실측 | [[tau2-bench]] 28.0%×1.0, [[terminal-bench]] 10.0%×1.0 |
| 신뢰성 | 38.1 | -0.8 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.3 | -0.18 | 실측 | [[aa-lcr]] 36.0%×1.0 |
| 지시 따르기 | 59.6 | +0.64 | 실측 | [[ifbench]] 60.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
