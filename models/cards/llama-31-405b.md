---
type: Model
title: Llama 3.1 405B
creator: Meta
license: Open
intelligence_index: 8.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Large
params_b: 405
is_reasoning: false
radar:
  knowledge: { s: 32.8, z: -0.41, r: 43.9, estimated: false }  # 전문 지식
  reasoning: { s: 18.3, z: -0.85, r: 37.3, estimated: false }  # 추론
  coding: { s: 36.9, z: -0.49, r: 42.7, estimated: false }  # 코딩
  agentic: { s: 14.9, z: -0.86, r: 37.1, estimated: false }  # 에이전트
  trust: { s: 53.5, z: 1.04, r: 65.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 30.1, z: -0.62, r: 40.7, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.67, r: 40.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.1 405B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Llama 3.1 405B

Meta · Open · Large(405B) · 컨텍스트 128k · 종합지능 **8.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.9 | -0.41 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.3 | -0.85 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 42.7 | -0.49 | 실측 | [[scicode]] 30.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 37.1 | -0.86 | 실측 | [[tau2-bench]] 19.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 65.6 | +1.04 | 실측 | [[aa-omniscience]] 48.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.7 | -0.62 | 실측 | [[aa-lcr]] 25.0%×1.0 |
| 지시 따르기 | 40.0 | -0.67 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
