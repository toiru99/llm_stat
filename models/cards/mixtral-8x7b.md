---
type: Model
title: Mixtral 8x7B
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.475
output_speed_tps: 26.0
context_window: 32800
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 15.5, z: -1.5, r: 27.5, estimated: false }  # 전문 지식
  reasoning: { s: 14.4, z: -1.42, r: 28.7, estimated: false }  # 추론
  coding: { s: 0.3, z: -1.23, r: 31.5, estimated: true }  # 코딩
  agentic: { s: 3.1, z: -1.07, r: 34.0, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 2.9, z: -1.48, r: 27.8, estimated: true }  # 긴문맥
  instruction: { s: 18.6, z: -1.43, r: 28.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mixtral 8x7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Mixtral 8x7B

Mistral · Open · Medium · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $0.45 · 출력 $0.7 · 혼합 $0.475/1M · 26.0 t/s · TTFT 1.04s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 27.5 | -1.5 | 실측 | [[gpqa-diamond]] 29.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 28.7 | -1.42 | 실측 | [[gpqa-diamond]] 29.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 31.5 | -1.23 | 추정 | (추정) |
| 에이전트 | 34.0 | -1.07 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.8 | -1.48 | 추정 | (추정) |
| 지시 따르기 | 28.5 | -1.43 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
