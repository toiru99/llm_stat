---
type: Model
title: Nemotron 3 Super
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: 0.2095
output_speed_tps: 165.0
context_window: 1000000
status: past
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 60.8, z: 0.5, r: 57.5, estimated: false }  # 전문 지식
  reasoning: { s: 57.4, z: 0.53, r: 57.9, estimated: false }  # 추론
  coding: { s: 46.9, z: 0.33, r: 54.9, estimated: false }  # 코딩
  agentic: { s: 18.5, z: -0.54, r: 41.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 74.2, z: 0.66, r: 59.9, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.27, r: 69.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Super
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# Nemotron 3 Super

NVIDIA · Open · Medium · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.2095/1M · 165.0 t/s · TTFT 1.33s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.5 | +0.5 | 실측 | [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 21.0%×0.3 |
| 추론 | 57.9 | +0.53 | 실측 | [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 21.0%×1.0 |
| 코딩 | 54.9 | +0.33 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 41.9 | -0.54 | 실측 | [[apex-agents]] 2.0%×1.0, [[gdpval]] 497.0%×1.0, [[itbench]] 1.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.9 | +0.66 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 69.1 | +1.27 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
