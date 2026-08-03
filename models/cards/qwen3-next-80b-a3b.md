---
type: Model
title: Qwen3 Next 80B A3B
creator: Alibaba
license: Open
intelligence_index: 17.0
price_blended_usd_1m: None
output_speed_tps: 203.0
context_window: 262000
status: current
size_class: Medium
params_b: 80
is_reasoning: true
radar:
  knowledge: { s: 37.9, z: -0.16, r: 47.6, estimated: false }  # 전문 지식
  reasoning: { s: 33.2, z: -0.06, r: 49.0, estimated: false }  # 추론
  coding: { s: 48.4, z: 0.06, r: 50.8, estimated: false }  # 코딩
  agentic: { s: 18.8, z: -0.68, r: 39.7, estimated: false }  # 에이전트
  trust: { s: 19.5, z: -0.4, r: 43.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.87, r: 63.1, estimated: false }  # 긴문맥
  instruction: { s: 69.0, z: 0.66, r: 59.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Next 80B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# Qwen3 Next 80B A3B

Alibaba · Open · Medium(80B) · 컨텍스트 262k · 종합지능 **17.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.5 · 출력 $6.0 · 혼합 $None/1M · 203.0 t/s · TTFT 2.28s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.6 | -0.16 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 49.0 | -0.06 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 50.8 | +0.06 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 10.0%×0.5 |
| 에이전트 | 39.7 | -0.68 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 42.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 10.0%×1.0 |
| 신뢰성 | 43.9 | -0.4 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.1 | +0.87 | 실측 | [[aa-lcr]] 60.0%×1.0 |
| 지시 따르기 | 59.8 | +0.66 | 실측 | [[ifbench]] 61.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
