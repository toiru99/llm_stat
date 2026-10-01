---
type: Model
title: Nemotron 3 Super
creator: NVIDIA
license: Open
intelligence_index: 13.0
price_blended_usd_1m: 0.255
output_speed_tps: 163.0
context_window: 1000000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.1, z: 0.17, r: 52.5, estimated: false }  # 전문 지식
  reasoning: { s: 41.4, z: 0.22, r: 53.3, estimated: false }  # 추론
  coding: { s: 46.9, z: 0.36, r: 55.4, estimated: false }  # 코딩
  agentic: { s: 22.4, z: -0.62, r: 40.6, estimated: false }  # 에이전트
  trust: { s: 11.3, z: -0.71, r: 39.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 74.2, z: 0.68, r: 60.3, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.2, r: 67.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Super
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# Nemotron 3 Super

NVIDIA · Open · Medium · 컨텍스트 1M · 종합지능 **13.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.255/1M · 163.0 t/s · TTFT 1.33s · 1M ctx` · 가성비 51.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.5 | +0.17 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 21.0%×0.3 |
| 추론 | 53.3 | +0.22 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 21.0%×1.0 |
| 코딩 | 55.4 | +0.36 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 40.6 | -0.62 | 실측 | [[apex-agents]] 2.0%×1.0, [[gdpval]] 0.0%×1.0, [[itbench]] 1.0%×1.0, [[tau2-bench]] 68.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | 39.3 | -0.71 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.3 | +0.68 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 67.9 | +1.2 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
