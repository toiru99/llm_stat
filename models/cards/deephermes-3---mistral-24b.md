---
type: Model
title: DeepHermes 3 - Mistral 24B
creator: Nous Research
license: Open
intelligence_index: 6.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 20.7, z: -0.99, r: 35.2, estimated: false }  # 전문 지식
  reasoning: { s: 18.8, z: -0.79, r: 38.2, estimated: false }  # 추론
  coding: { s: 10.6, z: -0.85, r: 37.3, estimated: true }  # 코딩
  agentic: { s: 15.4, z: -0.86, r: 37.1, estimated: true }  # 에이전트
  trust: { s: 22.8, z: -0.13, r: 48.0, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 13.5, z: -1.13, r: 33.0, estimated: true }  # 긴문맥
  instruction: { s: 27.3, z: -1.09, r: 33.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepHermes 3 - Mistral 24B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# DeepHermes 3 - Mistral 24B

Nous Research · Open · Small · 컨텍스트 32k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.2 | -0.99 | 실측 | [[gpqa-diamond]] 38.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.2 | -0.79 | 실측 | [[gpqa-diamond]] 38.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 37.3 | -0.85 | 추정 | (추정) |
| 에이전트 | 37.1 | -0.86 | 추정 | (추정) |
| 신뢰성 | 48.0 | -0.13 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.0 | -1.13 | 추정 | (추정) |
| 지시 따르기 | 33.7 | -1.09 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
