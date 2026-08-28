---
type: Model
title: Nemotron 3 Nano (Non-reasoning)
creator: NVIDIA
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.065
output_speed_tps: 214.0
context_window: 1000000
status: current
size_class: Small
params_b: 31.6
is_reasoning: false
radar:
  knowledge: { s: 19.6, z: -1.05, r: 34.3, estimated: false }  # 전문 지식
  reasoning: { s: 14.2, z: -1.02, r: 34.6, estimated: false }  # 추론
  coding: { s: 31.6, z: -0.67, r: 40.0, estimated: false }  # 코딩
  agentic: { s: 14.5, z: -0.88, r: 36.9, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.8, r: 38.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 10.8, z: -1.18, r: 32.3, estimated: false }  # 긴문맥
  instruction: { s: 35.2, z: -0.72, r: 39.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Nano (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Nemotron 3 Nano (Non-reasoning)

NVIDIA · Open · Small(31.6B) · 컨텍스트 1M · 종합지능 **7.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $0.05 · 출력 $0.2 · 혼합 $0.065/1M · 214.0 t/s · TTFT 0.93s · 1M ctx` · 가성비 107.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.3 | -1.05 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 40.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 34.6 | -1.02 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 40.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 40.0 | -0.67 | 실측 | [[scicode]] 23.0%×1.0, [[terminal-bench]] 12.0%×0.5 |
| 에이전트 | 36.9 | -0.88 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 25.0%×1.0, [[terminal-bench]] 12.0%×1.0 |
| 신뢰성 | 38.0 | -0.8 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.3 | -1.18 | 실측 | [[aa-lcr]] 9.0%×1.0 |
| 지시 따르기 | 39.2 | -0.72 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
