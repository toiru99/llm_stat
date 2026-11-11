---
type: Model
title: DeepHermes 3 - Llama-3.1 8B (non-reasoning)
creator: Nous Research
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 13.2, z: -1.63, r: 25.6, estimated: false }  # 전문 지식
  reasoning: { s: 12.1, z: -1.52, r: 27.2, estimated: false }  # 추론
  coding: { s: 11.1, z: -0.89, r: 36.6, estimated: true }  # 코딩
  agentic: { s: 5.9, z: -0.98, r: 35.3, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 9.3, z: -1.31, r: 30.3, estimated: true }  # 긴문맥
  instruction: { s: 26.8, z: -1.12, r: 33.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepHermes 3 - Llama-3.1 8B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# DeepHermes 3 - Llama-3.1 8B (non-reasoning)

Nous Research · Open · Small · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 25.6 | -1.63 | 실측 | [[gpqa-diamond]] 27.0%×0.4, [[humanitys-last-exam]] 4.3%×0.3 |
| 추론 | 27.2 | -1.52 | 실측 | [[gpqa-diamond]] 27.0%×1.0, [[humanitys-last-exam]] 4.3%×1.0 |
| 코딩 | 36.6 | -0.89 | 추정 | (추정) |
| 에이전트 | 35.3 | -0.98 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.3 | -1.31 | 추정 | (추정) |
| 지시 따르기 | 33.2 | -1.12 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
