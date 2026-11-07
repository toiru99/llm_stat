---
type: Model
title: Nemotron 3 Nano
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: 0.065
output_speed_tps: None
context_window: 1000000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 51.0, z: 0.06, r: 50.9, estimated: false }  # 전문 지식
  reasoning: { s: 46.7, z: 0.05, r: 50.7, estimated: false }  # 추론
  coding: { s: 33.7, z: -0.12, r: 48.2, estimated: false }  # 코딩
  agentic: { s: 15.7, z: -0.64, r: 40.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 42.7, z: -0.3, r: 45.6, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.26, r: 68.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Nano
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-07
timestamp: 2026-11-07T00:00:00Z
---

# Nemotron 3 Nano

NVIDIA · Open · Small · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.05 · 출력 $0.2 · 혼합 $0.065/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.9 | +0.06 | 실측 | [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 50.7 | +0.05 | 실측 | [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 48.2 | -0.12 | 실측 | [[scicode]] 31.0%×1.0, [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 40.4 | -0.64 | 실측 | [[gdpval]] 262.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.6 | -0.3 | 실측 | [[aa-lcr]] 38.0%×1.0 |
| 지시 따르기 | 68.9 | +1.26 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
