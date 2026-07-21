---
type: Model
title: Nex-N2-Pro
creator: Nex AGI
license: Open
intelligence_index: 41.0
price_blended_usd_1m: None
output_speed_tps: 143.0
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.0, z: 1.18, r: 67.7, estimated: false }  # 전문 지식
  reasoning: { s: 60.6, z: 1.41, r: 71.1, estimated: false }  # 추론
  coding: { s: 70.0, z: 1.0, r: 64.9, estimated: false }  # 코딩
  agentic: { s: 64.9, z: 1.11, r: 66.6, estimated: false }  # 에이전트
  trust: { s: 4.7, z: -1.09, r: 33.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 76.1, z: 0.97, r: 64.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nex-N2-Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-21
timestamp: 2026-07-21T00:00:00Z
---

# Nex-N2-Pro

Nex AGI · Open · Unknown · 컨텍스트 262k · 종합지능 **41.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 긴문맥
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.5 · 출력 $2.5 · 혼합 $None/1M · 143.0 t/s · TTFT 1.7s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.7 | +1.18 | 실측 | [[aa-omniscience]] 34.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 32.0%×0.3 |
| 추론 | 71.1 | +1.41 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 32.0%×1.0 |
| 코딩 | 64.9 | +1.0 | 실측 | [[scicode]] 42.0%×1.0 |
| 에이전트 | 66.6 | +1.11 | 실측 | [[gdpval]] 38.0%×1.0, [[tau2-bench]] 82.0%×1.0, [[tau3-banking]] 17.0%×1.0 |
| 신뢰성 | 33.7 | -1.09 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 64.6 | +0.97 | 실측 | [[ifbench]] 66.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
