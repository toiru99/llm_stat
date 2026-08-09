---
type: Model
title: DeepHermes 3 - Mistral 24B
creator: Nous Research
license: Open
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: current
size_class: Small
params_b: 24
is_reasoning: false
radar:
  knowledge: { s: 21.4, z: -0.92, r: 36.1, estimated: false }  # 전문 지식
  reasoning: { s: 19.4, z: -0.76, r: 38.6, estimated: false }  # 추론
  coding: { s: 38.3, z: -0.37, r: 44.4, estimated: false }  # 코딩
  agentic: { s: 19.4, z: -0.65, r: 40.3, estimated: true }  # 에이전트
  trust: { s: 19.2, z: -0.32, r: 45.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 31.3, z: -0.54, r: 41.8, estimated: true }  # 긴문맥
  instruction: { s: 30.9, z: -0.94, r: 35.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepHermes 3 - Mistral 24B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-09
timestamp: 2026-08-09T00:00:00Z
---

# DeepHermes 3 - Mistral 24B

Nous Research · Open · Small(24B) · 컨텍스트 32k · 종합지능 **5.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.1 | -0.92 | 실측 | [[gpqa-diamond]] 38.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.6 | -0.76 | 실측 | [[gpqa-diamond]] 38.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 44.4 | -0.37 | 실측 | [[scicode]] 23.0%×1.0 |
| 에이전트 | 40.3 | -0.65 | 추정 | (추정) |
| 신뢰성 | 45.2 | -0.32 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 41.8 | -0.54 | 추정 | (추정) |
| 지시 따르기 | 35.9 | -0.94 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
