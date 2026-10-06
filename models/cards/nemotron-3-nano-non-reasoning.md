---
type: Model
title: Nemotron 3 Nano (non-reasoning)
creator: NVIDIA
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.065
output_speed_tps: 227.0
context_window: 1000000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 19.0, z: -1.09, r: 33.7, estimated: false }  # 전문 지식
  reasoning: { s: 13.9, z: -1.03, r: 34.6, estimated: false }  # 추론
  coding: { s: 18.2, z: -0.63, r: 40.6, estimated: false }  # 코딩
  agentic: { s: 14.5, z: -0.93, r: 36.0, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.9, r: 36.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 12.4, z: -1.19, r: 32.2, estimated: false }  # 긴문맥
  instruction: { s: 35.2, z: -0.8, r: 38.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Nano (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# Nemotron 3 Nano (non-reasoning)

NVIDIA · Open · Small · 컨텍스트 1M · 종합지능 **7.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $0.05 · 출력 $0.2 · 혼합 $0.065/1M · 227.0 t/s · TTFT 0.93s · 1M ctx` · 가성비 107.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.7 | -1.09 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 40.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 34.6 | -1.03 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 40.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 40.6 | -0.63 | 실측 | [[terminal-bench]] 12.0%×0.5 |
| 에이전트 | 36.0 | -0.93 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 25.0%×1.0, [[terminal-bench]] 12.0%×1.0 |
| 신뢰성 | 36.6 | -0.9 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.2 | -1.19 | 실측 | [[aa-lcr]] 11.0%×1.0 |
| 지시 따르기 | 38.1 | -0.8 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
