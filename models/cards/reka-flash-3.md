---
type: Model
title: Reka Flash 3
creator: Reka AI
license: Open
intelligence_index: 4.0
price_blended_usd_1m: 0.26
output_speed_tps: None
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 25.2, z: -0.74, r: 39.0, estimated: false }  # 전문 지식
  reasoning: { s: 19.6, z: -0.73, r: 39.0, estimated: false }  # 추론
  coding: { s: 30.0, z: -0.68, r: 39.8, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.41, r: 28.9, estimated: false }  # 에이전트
  trust: { s: 10.6, z: -0.81, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.43, r: 28.5, estimated: false }  # 긴문맥
  instruction: { s: 25.4, z: -1.11, r: 33.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Reka Flash 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# Reka Flash 3

Reka AI · Open · Unknown · 컨텍스트 128k · 종합지능 **4.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.2 · 출력 $0.8 · 혼합 $0.26/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 15.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.0 | -0.74 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 53.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 39.0 | -0.73 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 53.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 39.8 | -0.68 | 실측 | [[scicode]] 27.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 28.9 | -1.41 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 37.8 | -0.81 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.5 | -1.43 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 33.3 | -1.11 | 실측 | [[ifbench]] 30.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
