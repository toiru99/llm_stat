---
type: Model
title: Nemotron 3.5 Lightning
creator: NVIDIA
license: Open
intelligence_index: 16.0
price_blended_usd_1m: 0.067
output_speed_tps: 291.0
context_window: 1000000
status: current
size_class: Small
params_b: 31.6
is_reasoning: true
radar:
  knowledge: { s: 32.8, z: -0.39, r: 44.2, estimated: false }  # 전문 지식
  reasoning: { s: 30.6, z: -0.22, r: 46.7, estimated: false }  # 추론
  coding: { s: 36.7, z: 0.17, r: 52.5, estimated: false }  # 코딩
  agentic: { s: 19.0, z: -0.71, r: 39.4, estimated: false }  # 에이전트
  trust: { s: 61.9, z: 1.77, r: 76.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 67.4, z: 0.56, r: 58.5, estimated: false }  # 긴문맥
  instruction: { s: 37.4, z: -0.64, r: 40.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3.5 Lightning
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Nemotron 3.5 Lightning

NVIDIA · Open · Small(31.6B) · 컨텍스트 1M · 종합지능 **16.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $0.06 · 출력 $0.2 · 혼합 $0.067/1M · 291.0 t/s · TTFT 0.62s · 1M ctx` · 가성비 238.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.2 | -0.39 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 74.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 46.7 | -0.22 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 74.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 52.5 | +0.17 | 실측 | [[scicode]] 32.0%×1.0 |
| 에이전트 | 39.4 | -0.71 | 실측 | [[gdpval]] 13.0%×1.0, [[tau3-banking]] 9.0%×1.0 |
| 신뢰성 | 76.5 | +1.77 | 실측 | [[aa-omniscience]] 62.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.5 | +0.56 | 실측 | [[aa-lcr]] 60.0%×1.0 |
| 지시 따르기 | 40.5 | -0.64 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
