---
type: Model
title: Nemotron 3 Super
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: 0.2025
output_speed_tps: 187.4238957355527
context_window: 1000000
status: past
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.9, z: 0.51, r: 57.7, estimated: false }  # 전문 지식
  reasoning: { s: 39.0, z: 0.17, r: 52.5, estimated: false }  # 추론
  coding: { s: 46.7, z: 0.23, r: 53.4, estimated: false }  # 코딩
  agentic: { s: 42.9, z: -0.07, r: 49.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 74.1, z: 0.61, r: 59.1, estimated: false }  # 긴문맥
  instruction: { s: 83.4, z: 1.23, r: 68.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Super
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Nemotron 3 Super

NVIDIA · Open · Medium · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.2025/1M · 187.4238957355527 t/s · TTFT 1.340727757835244s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.7 | +0.51 | 실측 | [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 20.7599629286376%×0.3 |
| 추론 | 52.5 | +0.17 | 실측 | [[critpt]] 3.14285714285714%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 20.7599629286376%×1.0 |
| 코딩 | 53.4 | +0.23 | 실측 | [[scicode]] 36.2268518518519%×1.0, [[terminal-bench]] 28.7878787878788%×0.5 |
| 에이전트 | 49.0 | -0.07 | 실측 | [[gdpval]] 497.16%×1.0, [[tau2-bench]] 67.83625730994149%×1.0, [[tau3-banking]] 10.3092783505155%×1.0, [[terminal-bench]] 28.7878787878788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.1 | +0.61 | 실측 | [[aa-lcr]] 65.6666666666667%×1.0 |
| 지시 따르기 | 68.5 | +1.23 | 실측 | [[ifbench]] 71.4965986394558%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
