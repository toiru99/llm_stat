---
type: Model
title: Llama 3.1 405B
creator: Meta
license: Open
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.6, z: -0.46, r: 43.1, estimated: false }  # 전문 지식
  reasoning: { s: 17.9, z: -0.84, r: 37.4, estimated: false }  # 추론
  coding: { s: 10.6, z: -0.88, r: 36.7, estimated: false }  # 코딩
  agentic: { s: 14.9, z: -0.91, r: 36.3, estimated: false }  # 에이전트
  trust: { s: 47.4, z: 0.97, r: 64.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 28.1, z: -0.71, r: 39.3, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.68, r: 39.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.1 405B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# Llama 3.1 405B

Meta · Open · Large · 컨텍스트 128k · 종합지능 **7.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.1 | -0.46 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.4 | -0.84 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 36.7 | -0.88 | 실측 | [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 36.3 | -0.91 | 실측 | [[tau2-bench]] 19.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 64.6 | +0.97 | 실측 | [[aa-omniscience]] 48.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.3 | -0.71 | 실측 | [[aa-lcr]] 25.0%×1.0 |
| 지시 따르기 | 39.9 | -0.68 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
