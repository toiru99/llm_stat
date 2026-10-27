---
type: Model
title: Llama Nemotron Super 49B v1.5 (non-reasoning)
creator: NVIDIA
license: Open
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 22.7, z: -0.95, r: 35.8, estimated: false }  # 전문 지식
  reasoning: { s: 16.4, z: -0.94, r: 35.9, estimated: false }  # 추론
  coding: { s: 6.1, z: -1.08, r: 33.8, estimated: false }  # 코딩
  agentic: { s: 6.1, z: -0.99, r: 35.1, estimated: false }  # 에이전트
  trust: { s: 32.0, z: 0.21, r: 53.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 28.1, z: -0.75, r: 38.8, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -1.06, r: 34.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama Nemotron Super 49B v1.5 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Llama Nemotron Super 49B v1.5 (non-reasoning)

NVIDIA · Open · Medium · 컨텍스트 128k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.8 | -0.95 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 48.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.9 | -0.94 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 48.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 33.8 | -1.08 | 실측 | [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 35.1 | -0.99 | 실측 | [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 53.2 | +0.21 | 실측 | [[aa-omniscience]] 33.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.8 | -0.75 | 실측 | [[aa-lcr]] 25.0%×1.0 |
| 지시 따르기 | 34.0 | -1.06 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
