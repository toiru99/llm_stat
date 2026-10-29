---
type: Model
title: Nemotron 3 Nano (non-reasoning)
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: 0.065
output_speed_tps: 256.0
context_window: 1000000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 22.8, z: -1.17, r: 32.4, estimated: false }  # 전문 지식
  reasoning: { s: 20.8, z: -1.13, r: 33.1, estimated: false }  # 추론
  coding: { s: 18.2, z: -0.63, r: 40.5, estimated: false }  # 코딩
  agentic: { s: 18.4, z: -0.54, r: 41.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 12.4, z: -1.2, r: 32.0, estimated: false }  # 긴문맥
  instruction: { s: 35.2, z: -0.73, r: 39.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Nano (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Nemotron 3 Nano (non-reasoning)

NVIDIA · Open · Small · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $0.05 · 출력 $0.2 · 혼합 $0.065/1M · 256.0 t/s · TTFT 0.53s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.4 | -1.17 | 실측 | [[gpqa-diamond]] 40.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 33.1 | -1.13 | 실측 | [[gpqa-diamond]] 40.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 40.5 | -0.63 | 실측 | [[terminal-bench]] 12.0%×0.5 |
| 에이전트 | 41.9 | -0.54 | 실측 | [[gdpval]] 349.0%×1.0, [[terminal-bench]] 12.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.0 | -1.2 | 실측 | [[aa-lcr]] 11.0%×1.0 |
| 지시 따르기 | 39.0 | -0.73 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
