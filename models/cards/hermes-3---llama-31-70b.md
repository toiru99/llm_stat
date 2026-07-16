---
type: Model
title: Hermes 3 - Llama-3.1 70B
creator: Nous Research
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 0.7
output_speed_tps: 35.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 22.9, z: -0.85, r: 37.2, estimated: false }  # 전문 지식
  reasoning: { s: 20.7, z: -0.68, r: 39.8, estimated: false }  # 추론
  coding: { s: 38.3, z: -0.33, r: 45.0, estimated: false }  # 코딩
  agentic: { s: 22.9, z: -0.52, r: 42.3, estimated: true }  # 에이전트
  trust: { s: 20.2, z: -0.36, r: 44.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 28.7, z: -0.59, r: 41.2, estimated: true }  # 긴문맥
  instruction: { s: 31.5, z: -0.85, r: 37.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hermes 3 - Llama-3.1 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-16
timestamp: 2026-07-16T00:00:00Z
---

# Hermes 3 - Llama-3.1 70B

Nous Research · Open · Unknown · 컨텍스트 128k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.7 · 출력 $0.7 · 혼합 $0.7/1M · 35.0 t/s · TTFT 1.91s · 128k ctx` · 가성비 7.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.2 | -0.85 | 실측 | [[gpqa-diamond]] 40.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.8 | -0.68 | 실측 | [[gpqa-diamond]] 40.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 45.0 | -0.33 | 실측 | [[scicode]] 23.0%×1.0 |
| 에이전트 | 42.3 | -0.52 | 추정 | (추정) |
| 신뢰성 | 44.6 | -0.36 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 41.2 | -0.59 | 추정 | (추정) |
| 지시 따르기 | 37.2 | -0.85 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
