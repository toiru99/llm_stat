---
type: Model
title: Llama 3.1 405B
creator: Meta
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 3.25
output_speed_tps: None
context_window: 128000
status: current
size_class: Large
params_b: 405
is_reasoning: false
radar:
  knowledge: { s: 33.4, z: -0.37, r: 44.4, estimated: false }  # 전문 지식
  reasoning: { s: 18.6, z: -0.8, r: 38.0, estimated: false }  # 추론
  coding: { s: 36.9, z: -0.43, r: 43.6, estimated: false }  # 코딩
  agentic: { s: 14.9, z: -0.84, r: 37.4, estimated: false }  # 에이전트
  trust: { s: 55.2, z: 1.25, r: 68.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 31.6, z: -0.53, r: 42.0, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.62, r: 40.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.1 405B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-04
timestamp: 2026-08-04T00:00:00Z
---

# Llama 3.1 405B

Meta · Open · Large(405B) · 컨텍스트 128k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $2.5 · 출력 $10.0 · 혼합 $3.25/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 2.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.4 | -0.37 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.0 | -0.8 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 43.6 | -0.43 | 실측 | [[scicode]] 30.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 37.4 | -0.84 | 실측 | [[tau2-bench]] 19.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 68.7 | +1.25 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.0 | -0.53 | 실측 | [[aa-lcr]] 24.0%×1.0 |
| 지시 따르기 | 40.6 | -0.62 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
