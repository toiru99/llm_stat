---
type: Model
title: Nemotron 3 Super
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: 0.2025
output_speed_tps: None
context_window: 1000000
status: past
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.9, z: 0.53, r: 58.0, estimated: false }  # 전문 지식
  reasoning: { s: 54.0, z: 0.53, r: 58.0, estimated: false }  # 추론
  coding: { s: 46.7, z: 0.3, r: 54.6, estimated: false }  # 코딩
  agentic: { s: 18.7, z: -0.55, r: 41.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 74.1, z: 0.63, r: 59.5, estimated: false }  # 긴문맥
  instruction: { s: 83.4, z: 1.32, r: 69.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Super
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# Nemotron 3 Super

NVIDIA · Open · Medium · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.2025/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.0 | +0.53 | 실측 | [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 20.8%×0.3 |
| 추론 | 58.0 | +0.53 | 실측 | [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 20.8%×1.0 |
| 코딩 | 54.6 | +0.3 | 실측 | [[scicode]] 36.2%×1.0, [[terminal-bench]] 28.8%×0.5 |
| 에이전트 | 41.8 | -0.55 | 실측 | [[apex-agents]] 1.8%×1.0, [[gdpval]] 497.0%×1.0, [[itbench]] 1.1%×1.0, [[tau3-banking]] 10.3%×1.0, [[terminal-bench]] 28.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.5 | +0.63 | 실측 | [[aa-lcr]] 65.7%×1.0 |
| 지시 따르기 | 69.8 | +1.32 | 실측 | [[ifbench]] 71.5%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
