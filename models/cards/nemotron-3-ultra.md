---
type: Model
title: Nemotron 3 Ultra
creator: NVIDIA
license: Open
intelligence_index: 38.0
price_blended_usd_1m: None
output_speed_tps: 209.0
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 51.0, z: 0.5, r: 57.5, estimated: false }  # 전문 지식
  reasoning: { s: 50.3, z: 0.87, r: 63.1, estimated: false }  # 추론
  coding: { s: 62.6, z: 0.69, r: 60.3, estimated: false }  # 코딩
  agentic: { s: 58.3, z: 0.85, r: 62.8, estimated: false }  # 에이전트
  trust: { s: 82.4, z: 2.58, r: 88.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.2, z: 1.17, r: 67.5, estimated: false }  # 긴문맥
  instruction: { s: 97.2, z: 1.85, r: 77.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Ultra
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-21
timestamp: 2026-07-21T00:00:00Z
---

# Nemotron 3 Ultra

NVIDIA · Open · Unknown · 컨텍스트 262k · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 코딩, 전문 지식

## 실용 지표
`입력 $0.68 · 출력 $2.67 · 혼합 $None/1M · 209.0 t/s · TTFT 1.23s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.5 | +0.5 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 27.0%×0.3 |
| 추론 | 63.1 | +0.87 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 27.0%×1.0 |
| 코딩 | 60.3 | +0.69 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 62.8 | +0.85 | 실측 | [[gdpval]] 33.0%×1.0, [[tau2-bench]] 83.0%×1.0, [[tau3-banking]] 14.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 88.6 | +2.58 | 실측 | [[aa-omniscience]] 71.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.5 | +1.17 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 77.8 | +1.85 | 실측 | [[ifbench]] 81.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
