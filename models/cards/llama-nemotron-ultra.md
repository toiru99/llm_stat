---
type: Model
title: Llama Nemotron Ultra
creator: NVIDIA
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 0.72
output_speed_tps: 52.0
context_window: 128000
radar:
  knowledge: { s: 38.6, z: -0.57, r: 41.4, estimated: false }  # 전문 지식
  reasoning: { s: 29.4, z: -0.71, r: 39.3, estimated: false }  # 추론
  coding: { s: 39.9, z: -0.84, r: 37.4, estimated: false }  # 코딩
  agentic: { s: 7.1, z: -1.74, r: 23.8, estimated: false }  # 에이전트
  trust: { s: 17.5, z: -0.57, r: 41.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 9.5, z: -2.19, r: 17.1, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -1.27, r: 31.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama Nemotron Ultra
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-26
timestamp: 2026-06-26T00:00:00Z
---

# Llama Nemotron Ultra

NVIDIA · Open · 컨텍스트 128k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 신뢰성
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.6 · 출력 $1.8 · 혼합 $0.72/1M · 52.0 t/s · TTFT 2.44s · 128k ctx` · 가성비 12.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.4 | -0.57 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 39.3 | -0.71 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 37.4 | -0.84 | 실측 | [[scicode]] 35.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 23.8 | -1.74 | 실측 | [[tau2-bench]] 11.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 41.4 | -0.57 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 17.1 | -2.19 | 실측 | [[aa-lcr]] 7.0%×1.0 |
| 지시 따르기 | 31.0 | -1.27 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
