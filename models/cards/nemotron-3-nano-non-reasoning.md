---
type: Model
title: Nemotron 3 Nano (Non-reasoning)
creator: NVIDIA
license: Open
intelligence_index: 2.0
price_blended_usd_1m: 0.065
output_speed_tps: 172.0
context_window: 1000000
status: current
size_class: Small
params_b: 31.6
is_reasoning: false
radar:
  knowledge: { s: 19.1, z: -1.05, r: 34.2, estimated: false }  # 전문 지식
  reasoning: { s: 13.9, z: -1.02, r: 34.7, estimated: false }  # 추론
  coding: { s: 18.2, z: -0.49, r: 42.7, estimated: false }  # 코딩
  agentic: { s: 14.5, z: -0.88, r: 36.8, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.82, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 12.4, z: -1.13, r: 33.0, estimated: false }  # 긴문맥
  instruction: { s: 35.2, z: -0.73, r: 39.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Nano (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Nemotron 3 Nano (Non-reasoning)

NVIDIA · Open · Small(31.6B) · 컨텍스트 1M · 종합지능 **2.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $0.05 · 출력 $0.2 · 혼합 $0.065/1M · 172.0 t/s · TTFT 0.89s · 1M ctx` · 가성비 30.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.2 | -1.05 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 40.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 34.7 | -1.02 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 40.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 42.7 | -0.49 | 실측 | [[terminal-bench]] 12.0%×0.5 |
| 에이전트 | 36.8 | -0.88 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 25.0%×1.0, [[terminal-bench]] 12.0%×1.0 |
| 신뢰성 | 37.8 | -0.82 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.0 | -1.13 | 실측 | [[aa-lcr]] 11.0%×1.0 |
| 지시 따르기 | 39.0 | -0.73 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
