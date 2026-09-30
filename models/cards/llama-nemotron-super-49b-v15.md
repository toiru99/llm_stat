---
type: Model
title: Llama Nemotron Super 49B v1.5
creator: NVIDIA
license: Open
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 34.5, z: -0.36, r: 44.5, estimated: false }  # 전문 지식
  reasoning: { s: 28.5, z: -0.35, r: 44.7, estimated: false }  # 추론
  coding: { s: 7.6, z: -0.97, r: 35.4, estimated: false }  # 코딩
  agentic: { s: 17.9, z: -0.78, r: 38.3, estimated: false }  # 에이전트
  trust: { s: 20.6, z: -0.26, r: 46.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 4.6, z: -1.42, r: 28.6, estimated: true }  # 긴문맥
  instruction: { s: 35.2, z: -0.77, r: 38.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama Nemotron Super 49B v1.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Llama Nemotron Super 49B v1.5

NVIDIA · Open · Unknown · 컨텍스트 128k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.5 | -0.36 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 44.7 | -0.35 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 35.4 | -0.97 | 실측 | [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 38.3 | -0.78 | 실측 | [[tau2-bench]] 28.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 46.1 | -0.26 | 실측 | [[aa-omniscience]] 22.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.6 | -1.42 | 추정 | (추정) |
| 지시 따르기 | 38.4 | -0.77 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
