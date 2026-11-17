---
type: Model
title: Nemotron 3 Nano (non-reasoning)
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: 0.065
output_speed_tps: 158.5548929273888
context_window: 1000000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 22.0, z: -1.22, r: 31.7, estimated: false }  # 전문 지식
  reasoning: { s: 13.2, z: -1.1, r: 33.5, estimated: false }  # 추론
  coding: { s: 18.4, z: -0.73, r: 39.1, estimated: false }  # 코딩
  agentic: { s: 15.5, z: -1.01, r: 34.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 12.0, z: -1.23, r: 31.6, estimated: false }  # 긴문맥
  instruction: { s: 35.6, z: -0.75, r: 38.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Nano (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Nemotron 3 Nano (non-reasoning)

NVIDIA · Open · Small · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $0.05 · 출력 $0.2 · 혼합 $0.065/1M · 158.5548929273888 t/s · TTFT 0.8506111761974579s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.7 | -1.22 | 실측 | [[gpqa-diamond]] 39.8989898989899%×0.4, [[humanitys-last-exam]] 4.5875810936051895%×0.3 |
| 추론 | 33.5 | -1.1 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 39.8989898989899%×1.0, [[humanitys-last-exam]] 4.5875810936051895%×1.0 |
| 코딩 | 39.1 | -0.73 | 실측 | [[terminal-bench]] 12.1212121212121%×0.5 |
| 에이전트 | 34.9 | -1.01 | 실측 | [[gdpval]] -349.42%×1.0, [[tau2-bench]] 25.4385964912281%×1.0, [[terminal-bench]] 12.1212121212121%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.6 | -1.23 | 실측 | [[aa-lcr]] 10.6666666666667%×1.0 |
| 지시 따르기 | 38.7 | -0.75 | 실측 | [[ifbench]] 37.4829931972789%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
