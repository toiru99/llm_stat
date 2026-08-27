---
type: Model
title: Qwen3 Next 80B A3B
creator: Alibaba
license: Open
intelligence_index: 17.0
price_blended_usd_1m: 0.255
output_speed_tps: 194.0
context_window: 262000
status: current
size_class: Medium
params_b: 80
is_reasoning: true
radar:
  knowledge: { s: 38.7, z: -0.13, r: 48.1, estimated: false }  # 전문 지식
  reasoning: { s: 33.3, z: -0.13, r: 48.1, estimated: false }  # 추론
  coding: { s: 48.4, z: -0.02, r: 49.7, estimated: false }  # 코딩
  agentic: { s: 17.3, z: -0.77, r: 38.5, estimated: false }  # 에이전트
  trust: { s: 12.8, z: -0.67, r: 39.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 74.7, z: 0.71, r: 60.7, estimated: false }  # 긴문맥
  instruction: { s: 69.0, z: 0.59, r: 58.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Next 80B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Qwen3 Next 80B A3B

Alibaba · Open · Medium(80B) · 컨텍스트 262k · 종합지능 **17.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.15 · 출력 $1.2 · 혼합 $0.255/1M · 194.0 t/s · TTFT 2.26s · 262k ctx` · 가성비 66.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.1 | -0.13 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 48.1 | -0.13 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 49.7 | -0.02 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 10.0%×0.5 |
| 에이전트 | 38.5 | -0.77 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 42.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 10.0%×1.0 |
| 신뢰성 | 39.9 | -0.67 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.7 | +0.71 | 실측 | [[aa-lcr]] 62.0%×1.0 |
| 지시 따르기 | 58.9 | +0.59 | 실측 | [[ifbench]] 61.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
