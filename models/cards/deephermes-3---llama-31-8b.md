---
type: Model
title: DeepHermes 3 - Llama-3.1 8B
creator: Nous Research
license: Open
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: 8
is_reasoning: false
radar:
  knowledge: { s: 13.5, z: -1.32, r: 30.2, estimated: false }  # 전문 지식
  reasoning: { s: 12.5, z: -1.09, r: 33.7, estimated: false }  # 추론
  coding: { s: 0.6, z: -1.1, r: 33.4, estimated: true }  # 코딩
  agentic: { s: 6.4, z: -1.19, r: 32.1, estimated: true }  # 에이전트
  trust: { s: 14.3, z: -0.48, r: 42.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 6.7, z: -1.3, r: 30.4, estimated: true }  # 긴문맥
  instruction: { s: 31.2, z: -0.9, r: 36.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepHermes 3 - Llama-3.1 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# DeepHermes 3 - Llama-3.1 8B

Nous Research · Open · Small(8B) · 컨텍스트 128k · 종합지능 **1.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.2 | -1.32 | 실측 | [[gpqa-diamond]] 27.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 33.7 | -1.09 | 실측 | [[gpqa-diamond]] 27.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 33.4 | -1.1 | 추정 | (추정) |
| 에이전트 | 32.1 | -1.19 | 추정 | (추정) |
| 신뢰성 | 42.7 | -0.48 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.4 | -1.3 | 추정 | (추정) |
| 지시 따르기 | 36.6 | -0.9 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
