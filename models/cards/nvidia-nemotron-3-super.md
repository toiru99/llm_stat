---
type: Model
title: NVIDIA Nemotron 3 Super
creator: NVIDIA
license: Open
intelligence_index: 25.0
price_blended_usd_1m: 0.28
output_speed_tps: 211.0
context_window: 1000000
radar:
  knowledge: { s: 48.2, z: -0.14, r: 47.9, estimated: false }  # 전문 지식
  reasoning: { s: 42.5, z: -0.1, r: 48.6, estimated: false }  # 추론
  coding: { s: 55.3, z: -0.17, r: 47.4, estimated: false }  # 코딩
  agentic: { s: 24.0, z: -1.11, r: 33.4, estimated: false }  # 에이전트
  trust: { s: 11.2, z: -0.79, r: 38.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 81.1, z: 0.37, r: 55.6, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 0.67, r: 60.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — NVIDIA Nemotron 3 Super
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-23
timestamp: 2026-06-23T00:00:00Z
---

# NVIDIA Nemotron 3 Super

NVIDIA · Open · 컨텍스트 1M · 종합지능 **25.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $0.75 · 혼합 $0.28/1M · 211.0 t/s · TTFT 1.42s · 1M ctx` · 가성비 89.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.9 | -0.14 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 48.6 | -0.1 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 47.4 | -0.17 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 33.4 | -1.11 | 실측 | [[apex-agents]] 2.0%×1.0, [[gdpval]] 8.0%×1.0, [[itbench]] 1.0%×1.0, [[tau2-bench]] 68.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | 38.1 | -0.79 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 55.6 | +0.37 | 실측 | [[aa-lcr]] 60.0%×1.0 |
| 지시 따르기 | 60.1 | +0.67 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
