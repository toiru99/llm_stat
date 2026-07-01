---
type: Model
title: NVIDIA Nemotron 3 Nano
creator: NVIDIA
license: Open
intelligence_index: 14.0
price_blended_usd_1m: 0.07
output_speed_tps: 85.0
context_window: 1000000
radar:
  knowledge: { s: 37.2, z: -0.7, r: 39.5, estimated: false }  # 전문 지식
  reasoning: { s: 32.9, z: -0.6, r: 41.0, estimated: false }  # 추론
  coding: { s: 40.7, z: -0.89, r: 36.7, estimated: false }  # 코딩
  agentic: { s: 15.9, z: -1.41, r: 28.9, estimated: false }  # 에이전트
  trust: { s: 16.2, z: -0.66, r: 40.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 45.9, z: -0.92, r: 36.2, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 0.64, r: 59.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — NVIDIA Nemotron 3 Nano
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# NVIDIA Nemotron 3 Nano

NVIDIA · Open · 컨텍스트 1M · 종합지능 **14.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.06 · 출력 $0.22 · 혼합 $0.07/1M · 85.0 t/s · TTFT 2.92s · 1M ctx` · 가성비 200.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.5 | -0.7 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 41.0 | -0.6 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 36.7 | -0.89 | 실측 | [[scicode]] 30.0%×1.0, [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 28.9 | -1.41 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 41.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 40.2 | -0.66 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.2 | -0.92 | 실측 | [[aa-lcr]] 34.0%×1.0 |
| 지시 따르기 | 59.5 | +0.64 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
