---
type: Model
title: Hermes 3 - Llama-3.1 70B
creator: Nous Research
license: Open
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: 34.0
context_window: 128000
status: past
size_class: Medium
params_b: 70.6
is_reasoning: false
radar:
  knowledge: { s: 22.9, z: -0.87, r: 37.0, estimated: false }  # 전문 지식
  reasoning: { s: 20.7, z: -0.69, r: 39.6, estimated: false }  # 추론
  coding: { s: 38.3, z: -0.36, r: 44.6, estimated: false }  # 코딩
  agentic: { s: 20.9, z: -0.6, r: 41.0, estimated: true }  # 에이전트
  trust: { s: 21.4, z: -0.32, r: 45.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 26.3, z: -0.69, r: 39.7, estimated: true }  # 긴문맥
  instruction: { s: 29.3, z: -0.98, r: 35.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hermes 3 - Llama-3.1 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-01
timestamp: 2026-08-01T00:00:00Z
---

# Hermes 3 - Llama-3.1 70B

Nous Research · Open · Medium(70.6B) · 컨텍스트 128k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.7 · 출력 $0.7 · 혼합 $None/1M · 34.0 t/s · TTFT 1.9s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.0 | -0.87 | 실측 | [[gpqa-diamond]] 40.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.6 | -0.69 | 실측 | [[gpqa-diamond]] 40.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 44.6 | -0.36 | 실측 | [[scicode]] 23.0%×1.0 |
| 에이전트 | 41.0 | -0.6 | 추정 | (추정) |
| 신뢰성 | 45.3 | -0.32 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.7 | -0.69 | 추정 | (추정) |
| 지시 따르기 | 35.2 | -0.98 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
