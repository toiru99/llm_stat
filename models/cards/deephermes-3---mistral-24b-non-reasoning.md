---
type: Model
title: DeepHermes 3 - Mistral 24B (non-reasoning)
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
  knowledge: { s: 20.7, z: -1.04, r: 34.5, estimated: false }  # 전문 지식
  reasoning: { s: 18.8, z: -0.84, r: 37.5, estimated: false }  # 추론
  coding: { s: 11.5, z: -0.89, r: 36.6, estimated: true }  # 코딩
  agentic: { s: 9.5, z: -0.87, r: 36.9, estimated: true }  # 에이전트
  trust: { s: 24.9, z: -0.11, r: 48.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 10.7, z: -1.27, r: 31.0, estimated: true }  # 긴문맥
  instruction: { s: 24.1, z: -1.3, r: 30.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepHermes 3 - Mistral 24B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# DeepHermes 3 - Mistral 24B (non-reasoning)

Nous Research · Open · Small · 컨텍스트 32k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.5 | -1.04 | 실측 | [[gpqa-diamond]] 38.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.5 | -0.84 | 실측 | [[gpqa-diamond]] 38.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 36.6 | -0.89 | 추정 | (추정) |
| 에이전트 | 36.9 | -0.87 | 추정 | (추정) |
| 신뢰성 | 48.4 | -0.11 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.0 | -1.27 | 추정 | (추정) |
| 지시 따르기 | 30.5 | -1.3 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
