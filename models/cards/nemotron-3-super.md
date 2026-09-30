---
type: Model
title: Nemotron 3 Super
creator: NVIDIA
license: Open
intelligence_index: 13.0
price_blended_usd_1m: 0.255
output_speed_tps: 164.0
context_window: 1000000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.1, z: 0.18, r: 52.6, estimated: false }  # 전문 지식
  reasoning: { s: 41.4, z: 0.23, r: 53.5, estimated: false }  # 추론
  coding: { s: 46.9, z: 0.38, r: 55.7, estimated: false }  # 코딩
  agentic: { s: 22.4, z: -0.61, r: 40.8, estimated: false }  # 에이전트
  trust: { s: 11.3, z: -0.7, r: 39.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 74.2, z: 0.69, r: 60.4, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.21, r: 68.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Super
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Nemotron 3 Super

NVIDIA · Open · Medium · 컨텍스트 1M · 종합지능 **13.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.255/1M · 164.0 t/s · TTFT 1.3s · 1M ctx` · 가성비 51.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.6 | +0.18 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 21.0%×0.3 |
| 추론 | 53.5 | +0.23 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 21.0%×1.0 |
| 코딩 | 55.7 | +0.38 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 40.8 | -0.61 | 실측 | [[apex-agents]] 2.0%×1.0, [[gdpval]] 0.0%×1.0, [[itbench]] 1.0%×1.0, [[tau2-bench]] 68.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | 39.6 | -0.7 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.4 | +0.69 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 68.1 | +1.21 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
