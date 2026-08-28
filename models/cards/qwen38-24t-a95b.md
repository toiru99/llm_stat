---
type: Model
title: Qwen3.8 2.4T A95B
creator: Alibaba
license: Open
intelligence_index: 58.0
price_blended_usd_1m: 1.175
output_speed_tps: 24.0
context_window: 984000
status: current
size_class: Large
params_b: 2400
is_reasoning: true
radar:
  knowledge: { s: 64.7, z: 1.19, r: 67.9, estimated: false }  # 전문 지식
  reasoning: { s: 79.1, z: 2.26, r: 83.9, estimated: false }  # 추론
  coding: { s: 86.7, z: 1.64, r: 74.6, estimated: false }  # 코딩
  agentic: { s: 94.3, z: 2.25, r: 83.7, estimated: false }  # 에이전트
  trust: { s: 60.8, z: 1.74, r: 76.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.4, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 74.9, z: 0.95, r: 64.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 2.4T A95B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Qwen3.8 2.4T A95B

Alibaba · Open · Large(2400B) · 컨텍스트 984k · 종합지능 **58.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.175/1M · 24.0 t/s · TTFT 2.55s · 984k ctx` · 가성비 49.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.9 | +1.19 | 실측 | [[aa-omniscience]] 31.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 83.9 | +2.26 | 실측 | [[critpt]] 20.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 74.6 | +1.64 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 83.7 | +2.25 | 실측 | [[gdpval]] 61.0%×1.0, [[tau3-banking]] 49.0%×1.0 |
| 신뢰성 | 76.0 | +1.74 | 실측 | [[aa-omniscience]] 61.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 64.3 | +0.95 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
