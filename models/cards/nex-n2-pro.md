---
type: Model
title: Nex-N2-Pro
creator: Nex AGI
license: Open
intelligence_index: 28.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.0, z: 0.96, r: 64.5, estimated: false }  # 전문 지식
  reasoning: { s: 58.3, z: 1.07, r: 66.0, estimated: false }  # 추론
  coding: { s: 60.0, z: 0.87, r: 63.0, estimated: false }  # 코딩
  agentic: { s: 54.3, z: 0.64, r: 59.6, estimated: false }  # 에이전트
  trust: { s: 3.1, z: -1.06, r: 34.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.27, r: 69.0, estimated: false }  # 긴문맥
  instruction: { s: 76.1, z: 0.94, r: 64.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nex-N2-Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Nex-N2-Pro

Nex AGI · Open · Large · 컨텍스트 262k · 종합지능 **28.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 추론
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.5 | +0.96 | 실측 | [[aa-omniscience]] 35.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 66.0 | +1.07 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 63.0 | +0.87 | 실측 | [[scicode]] 43.0%×1.0 |
| 에이전트 | 59.6 | +0.64 | 실측 | [[gdpval]] 30.0%×1.0, [[tau2-bench]] 82.0%×1.0, [[tau3-banking]] 18.0%×1.0 |
| 신뢰성 | 34.1 | -1.06 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.0 | +1.27 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 64.1 | +0.94 | 실측 | [[ifbench]] 66.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
