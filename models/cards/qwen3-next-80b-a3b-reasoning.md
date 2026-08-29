---
type: Model
title: Qwen3 Next 80B A3B (Reasoning)
creator: Alibaba
license: Open
intelligence_index: 17.0
price_blended_usd_1m: 0.255
output_speed_tps: 198.0
context_window: 262000
status: current
size_class: Medium
params_b: 80
is_reasoning: true
radar:
  knowledge: { s: 39.4, z: -0.06, r: 49.0, estimated: false }  # 전문 지식
  reasoning: { s: 33.3, z: -0.06, r: 49.1, estimated: false }  # 추론
  coding: { s: 48.4, z: 0.03, r: 50.5, estimated: false }  # 코딩
  agentic: { s: 17.3, z: -0.76, r: 38.5, estimated: false }  # 에이전트
  trust: { s: 11.3, z: -0.6, r: 41.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 74.7, z: 0.78, r: 61.7, estimated: false }  # 긴문맥
  instruction: { s: 69.0, z: 0.7, r: 60.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Next 80B A3B (Reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Qwen3 Next 80B A3B (Reasoning)

Alibaba · Open · Medium(80B) · 컨텍스트 262k · 종합지능 **17.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.15 · 출력 $1.2 · 혼합 $0.255/1M · 198.0 t/s · TTFT 2.23s · 262k ctx` · 가성비 66.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.0 | -0.06 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 49.1 | -0.06 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 50.5 | +0.03 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 10.0%×0.5 |
| 에이전트 | 38.5 | -0.76 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 42.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 10.0%×1.0 |
| 신뢰성 | 41.0 | -0.6 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.7 | +0.78 | 실측 | [[aa-lcr]] 62.0%×1.0 |
| 지시 따르기 | 60.5 | +0.7 | 실측 | [[ifbench]] 61.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
