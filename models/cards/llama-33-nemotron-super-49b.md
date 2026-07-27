---
type: Model
title: Llama 3.3 Nemotron Super 49B
creator: NVIDIA
license: Open
intelligence_index: 12.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: 49
is_reasoning: false
radar:
  knowledge: { s: 32.8, z: -0.39, r: 44.1, estimated: false }  # 전문 지식
  reasoning: { s: 25.3, z: -0.46, r: 43.2, estimated: false }  # 추론
  coding: { s: 31.1, z: -0.66, r: 40.1, estimated: false }  # 코딩
  agentic: { s: 13.6, z: -0.88, r: 36.8, estimated: false }  # 에이전트
  trust: { s: 9.2, z: -0.89, r: 36.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 22.4, z: -0.8, r: 38.0, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.68, r: 39.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.3 Nemotron Super 49B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-27
timestamp: 2026-07-27T00:00:00Z
---

# Llama 3.3 Nemotron Super 49B

NVIDIA · Open · Medium(49B) · 컨텍스트 128k · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.1 | -0.39 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 64.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 43.2 | -0.46 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 64.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 40.1 | -0.66 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 36.8 | -0.88 | 실측 | [[tau2-bench]] 27.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 36.6 | -0.89 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.0 | -0.8 | 실측 | [[aa-lcr]] 17.0%×1.0 |
| 지시 따르기 | 39.8 | -0.68 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
