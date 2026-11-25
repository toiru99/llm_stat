---
type: Model
title: DBRX
creator: Databricks
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32768
status: past
size_class: Medium
params_b: 132
is_reasoning: false
radar:
  knowledge: { s: 16.5, z: -1.47, r: 27.9, estimated: false }  # 전문 지식
  reasoning: { s: 14.8, z: -1.01, r: 34.8, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: null, z: null, r: null, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DBRX
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# DBRX

Databricks · Open · Medium(132B) · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: —

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 27.9 | -1.47 | 실측 | [[gpqa-diamond]] 33.1313%×0.4, [[humanitys-last-exam]] 2.92%×0.3 |
| 추론 | 34.8 | -1.01 | 실측 | [[gpqa-diamond]] 33.1313%×1.0, [[humanitys-last-exam]] 2.92%×1.0 |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | — | — | 측정 안 됨 | — |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
