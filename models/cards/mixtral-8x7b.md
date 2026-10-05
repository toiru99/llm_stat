---
type: Model
title: Mixtral 8x7B
creator: Mistral
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 0.475
output_speed_tps: None
context_window: 32800
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 15.5, z: -1.25, r: 31.2, estimated: false }  # 전문 지식
  reasoning: { s: 14.4, z: -1.01, r: 34.9, estimated: false }  # 추론
  coding: { s: 7.6, z: -0.99, r: 35.2, estimated: true }  # 코딩
  agentic: { s: 18.0, z: -0.79, r: 38.1, estimated: true }  # 에이전트
  trust: { s: 15.8, z: -0.5, r: 42.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 15.2, z: -1.1, r: 33.4, estimated: true }  # 긴문맥
  instruction: { s: 30.5, z: -0.99, r: 35.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mixtral 8x7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# Mixtral 8x7B

Mistral · Open · Medium · 컨텍스트 32k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $0.45 · 출력 $0.7 · 혼합 $0.475/1M · None t/s · TTFT Nones · 32k ctx` · 가성비 10.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.2 | -1.25 | 실측 | [[gpqa-diamond]] 29.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 34.9 | -1.01 | 실측 | [[gpqa-diamond]] 29.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 35.2 | -0.99 | 추정 | (추정) |
| 에이전트 | 38.1 | -0.79 | 추정 | (추정) |
| 신뢰성 | 42.5 | -0.5 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.4 | -1.1 | 추정 | (추정) |
| 지시 따르기 | 35.2 | -0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
