---
type: Model
title: DBRX
creator: Databricks
license: Open
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32800
status: past
size_class: Medium
params_b: 132
is_reasoning: false
radar:
  knowledge: { s: 20.6, z: -0.98, r: 35.3, estimated: false }  # 전문 지식
  reasoning: { s: 19.5, z: -0.76, r: 38.6, estimated: false }  # 추론
  coding: { s: 20.0, z: -1.13, r: 33.0, estimated: false }  # 코딩
  agentic: { s: 18.5, z: -0.69, r: 39.6, estimated: true }  # 에이전트
  trust: { s: 28.9, z: 0.01, r: 50.1, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 6.8, z: -1.27, r: 30.9, estimated: true }  # 긴문맥
  instruction: { s: 27.6, z: -1.06, r: 34.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DBRX
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# DBRX

Databricks · Open · Medium(132B) · 컨텍스트 32k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.3 | -0.98 | 실측 | [[gpqa-diamond]] 33.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 38.6 | -0.76 | 실측 | [[gpqa-diamond]] 33.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 33.0 | -1.13 | 실측 | [[scicode]] 12.0%×1.0 |
| 에이전트 | 39.6 | -0.69 | 추정 | (추정) |
| 신뢰성 | 50.1 | +0.01 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.9 | -1.27 | 추정 | (추정) |
| 지시 따르기 | 34.1 | -1.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
