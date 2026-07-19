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
  knowledge: { s: 36.0, z: -0.22, r: 46.7, estimated: false }  # 전문 지식
  reasoning: { s: 28.8, z: -0.26, r: 46.2, estimated: false }  # 추론
  coding: { s: 37.3, z: -0.38, r: 44.3, estimated: false }  # 코딩
  agentic: { s: 21.7, z: -0.57, r: 41.5, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.92, r: 36.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 43.4, z: -0.16, r: 47.6, estimated: false }  # 긴문맥
  instruction: { s: 67.6, z: 0.63, r: 59.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2-V2 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-19
timestamp: 2026-07-19T00:00:00Z
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
| 전문 지식 | 46.7 | -0.22 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 68.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 46.2 | -0.26 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 68.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 44.3 | -0.38 | 실측 | [[scicode]] 29.0%×1.0, [[terminal-bench]] 10.0%×0.5 |
| 에이전트 | 41.5 | -0.57 | 실측 | [[tau2-bench]] 28.0%×1.0, [[terminal-bench]] 10.0%×1.0 |
| 신뢰성 | 36.2 | -0.92 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.6 | -0.16 | 실측 | [[aa-lcr]] 33.0%×1.0 |
| 지시 따르기 | 59.4 | +0.63 | 실측 | [[ifbench]] 60.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
