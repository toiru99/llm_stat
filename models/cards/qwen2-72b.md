---
type: Model
title: Qwen2 72B
creator: Alibaba
license: Open
intelligence_index: 6.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 20.1, z: -1.04, r: 34.4, estimated: false }  # 전문 지식
  reasoning: { s: 18.2, z: -0.83, r: 37.5, estimated: false }  # 추론
  coding: { s: 8.5, z: -0.96, r: 35.6, estimated: true }  # 코딩
  agentic: { s: 15.6, z: -0.89, r: 36.7, estimated: true }  # 에이전트
  trust: { s: 28.3, z: 0.08, r: 51.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 16.7, z: -1.06, r: 34.2, estimated: true }  # 긴문맥
  instruction: { s: 27.9, z: -1.1, r: 33.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2 72B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# Qwen2 72B

Alibaba · Open · Medium · 컨텍스트 131k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.4 | -1.04 | 실측 | [[gpqa-diamond]] 37.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.5 | -0.83 | 실측 | [[gpqa-diamond]] 37.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 35.6 | -0.96 | 추정 | (추정) |
| 에이전트 | 36.7 | -0.89 | 추정 | (추정) |
| 신뢰성 | 51.2 | +0.08 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.2 | -1.06 | 추정 | (추정) |
| 지시 따르기 | 33.5 | -1.1 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
