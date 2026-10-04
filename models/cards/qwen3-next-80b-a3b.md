---
type: Model
title: Qwen3 Next 80B A3B
creator: Alibaba
license: Open
intelligence_index: 11.0
price_blended_usd_1m: 0.255
output_speed_tps: 178.0
context_window: 262000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 38.3, z: -0.2, r: 47.0, estimated: false }  # 전문 지식
  reasoning: { s: 32.2, z: -0.19, r: 47.1, estimated: false }  # 추론
  coding: { s: 15.2, z: -0.73, r: 39.1, estimated: false }  # 코딩
  agentic: { s: 17.3, z: -0.82, r: 37.7, estimated: false }  # 에이전트
  trust: { s: 11.3, z: -0.7, r: 39.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 71.9, z: 0.61, r: 59.2, estimated: false }  # 긴문맥
  instruction: { s: 69.0, z: 0.61, r: 59.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Next 80B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# Qwen3 Next 80B A3B

Alibaba · Open · Medium · 컨텍스트 262k · 종합지능 **11.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.15 · 출력 $1.2 · 혼합 $0.255/1M · 178.0 t/s · TTFT 2.3s · 262k ctx` · 가성비 43.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.0 | -0.2 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 47.1 | -0.19 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 39.1 | -0.73 | 실측 | [[terminal-bench]] 10.0%×0.5 |
| 에이전트 | 37.7 | -0.82 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 42.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 10.0%×1.0 |
| 신뢰성 | 39.4 | -0.7 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.2 | +0.61 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 59.2 | +0.61 | 실측 | [[ifbench]] 61.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
