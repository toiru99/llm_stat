---
type: Model
title: Llama Nemotron Super 49B v1.5
creator: NVIDIA
license: Open
intelligence_index: 12.0
price_blended_usd_1m: 0.13
output_speed_tps: 50.0
context_window: 128000
radar:
  knowledge: { s: 35.9, z: -0.68, r: 39.7, estimated: false }  # 전문 지식
  reasoning: { s: 29.5, z: -0.7, r: 39.5, estimated: false }  # 추론
  coding: { s: 41.5, z: -0.76, r: 38.6, estimated: false }  # 코딩
  agentic: { s: 18.1, z: -1.3, r: 30.5, estimated: false }  # 에이전트
  trust: { s: 25.0, z: -0.3, r: 45.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 45.9, z: -0.88, r: 36.8, estimated: false }  # 긴문맥
  instruction: { s: 35.2, z: -1.31, r: 30.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama Nemotron Super 49B v1.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-29
timestamp: 2026-06-29T00:00:00Z
---

# Llama Nemotron Super 49B v1.5

NVIDIA · Open · 컨텍스트 128k · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.13/1M · 50.0 t/s · TTFT 1.27s · 128k ctx` · 가성비 92.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.7 | -0.68 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 39.5 | -0.7 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 38.6 | -0.76 | 실측 | [[scicode]] 35.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 30.5 | -1.3 | 실측 | [[tau2-bench]] 28.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 45.5 | -0.3 | 실측 | [[aa-omniscience]] 24.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.8 | -0.88 | 실측 | [[aa-lcr]] 34.0%×1.0 |
| 지시 따르기 | 30.3 | -1.31 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
