---
type: Model
title: Llama 3.1 Nemotron Nano 4B v1.1
creator: NVIDIA
license: Open
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: 4.51
is_reasoning: true
radar:
  knowledge: { s: 24.4, z: -0.78, r: 38.3, estimated: false }  # 전문 지식
  reasoning: { s: 22.3, z: -0.6, r: 41.0, estimated: false }  # 추론
  coding: { s: 16.7, z: -1.25, r: 31.3, estimated: false }  # 코딩
  agentic: { s: 12.1, z: -0.94, r: 35.9, estimated: false }  # 에이전트
  trust: { s: 15.3, z: -0.59, r: 41.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.44, r: 28.3, estimated: false }  # 긴문맥
  instruction: { s: 19.7, z: -1.35, r: 29.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.1 Nemotron Nano 4B v1.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-19
timestamp: 2026-07-19T00:00:00Z
---

# Llama 3.1 Nemotron Nano 4B v1.1

NVIDIA · Open · Small(4.51B) · 컨텍스트 128k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.3 | -0.78 | 실측 | [[gpqa-diamond]] 41.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 41.0 | -0.6 | 실측 | [[gpqa-diamond]] 41.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 31.3 | -1.25 | 실측 | [[scicode]] 10.0%×1.0 |
| 에이전트 | 35.9 | -0.94 | 실측 | [[tau2-bench]] 12.0%×1.0 |
| 신뢰성 | 41.2 | -0.59 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.3 | -1.44 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 29.7 | -1.35 | 실측 | [[ifbench]] 26.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
