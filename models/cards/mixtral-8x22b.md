---
type: Model
title: Mixtral 8x22B
creator: Mistral
license: Open
intelligence_index: 6.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 65400
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 17.4, z: -1.16, r: 32.6, estimated: false }  # 전문 지식
  reasoning: { s: 15.9, z: -0.94, r: 35.9, estimated: false }  # 추론
  coding: { s: 0.8, z: -1.22, r: 31.7, estimated: true }  # 코딩
  agentic: { s: 2.3, z: -1.39, r: 29.1, estimated: true }  # 에이전트
  trust: { s: 30.4, z: 0.18, r: 52.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 2.3, z: -1.49, r: 27.6, estimated: true }  # 긴문맥
  instruction: { s: 28.7, z: -1.06, r: 34.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mixtral 8x22B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-03
timestamp: 2026-10-03T00:00:00Z
---

# Mixtral 8x22B

Mistral · Open · Medium · 컨텍스트 65k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 65k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.6 | -1.16 | 실측 | [[gpqa-diamond]] 33.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.9 | -0.94 | 실측 | [[gpqa-diamond]] 33.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 31.7 | -1.22 | 추정 | (추정) |
| 에이전트 | 29.1 | -1.39 | 추정 | (추정) |
| 신뢰성 | 52.7 | +0.18 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.6 | -1.49 | 추정 | (추정) |
| 지시 따르기 | 34.1 | -1.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
