---
type: Model
title: Hermes 4 405B
creator: Nous Research
license: Open
intelligence_index: None
price_blended_usd_1m: 1.2
output_speed_tps: 40.0
context_window: 128000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 49.0, z: -0.02, r: 49.7, estimated: false }  # 전문 지식
  reasoning: { s: 45.0, z: -0.03, r: 49.5, estimated: false }  # 추론
  coding: { s: 16.7, z: -0.69, r: 39.7, estimated: false }  # 코딩
  agentic: { s: 16.7, z: -0.6, r: 41.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 24.7, z: -0.83, r: 37.6, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -0.97, r: 35.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hermes 4 405B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Hermes 4 405B

Nous Research · Open · Large · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $1.0 · 출력 $3.0 · 혼합 $1.2/1M · 40.0 t/s · TTFT 2.38s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.7 | -0.02 | 실측 | [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 49.5 | -0.03 | 실측 | [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 39.7 | -0.69 | 실측 | [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 41.0 | -0.6 | 실측 | [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.6 | -0.83 | 실측 | [[aa-lcr]] 22.0%×1.0 |
| 지시 따르기 | 35.5 | -0.97 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
