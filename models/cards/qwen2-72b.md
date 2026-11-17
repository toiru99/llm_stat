---
type: Model
title: Qwen2 72B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131072
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 19.5, z: -1.33, r: 30.0, estimated: false }  # 전문 지식
  reasoning: { s: 17.5, z: -0.88, r: 36.8, estimated: false }  # 추론
  coding: { s: 8.2, z: -1.07, r: 33.9, estimated: true }  # 코딩
  agentic: { s: 12.2, z: -1.12, r: 33.2, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 16.1, z: -1.1, r: 33.4, estimated: true }  # 긴문맥
  instruction: { s: 28.2, z: -1.07, r: 34.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2 72B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Qwen2 72B

Alibaba · Open · Medium · 컨텍스트 131k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.0 | -1.33 | 실측 | [[gpqa-diamond]] 37.0707070707071%×0.4, [[humanitys-last-exam]] 3.66%×0.3 |
| 추론 | 36.8 | -0.88 | 실측 | [[gpqa-diamond]] 37.0707070707071%×1.0, [[humanitys-last-exam]] 3.66%×1.0 |
| 코딩 | 33.9 | -1.07 | 추정 | (추정) |
| 에이전트 | 33.2 | -1.12 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.4 | -1.1 | 추정 | (추정) |
| 지시 따르기 | 34.0 | -1.07 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
