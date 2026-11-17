---
type: Model
title: Hermes 4 405B
creator: Nous Research
license: Open
intelligence_index: None
price_blended_usd_1m: 1.2
output_speed_tps: 37.167013643204896
context_window: 128000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 47.3, z: 0.01, r: 50.2, estimated: false }  # 전문 지식
  reasoning: { s: 29.0, z: -0.31, r: 45.3, estimated: false }  # 추론
  coding: { s: 17.2, z: -0.76, r: 38.5, estimated: false }  # 코딩
  agentic: { s: 19.8, z: -0.86, r: 37.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 25.2, z: -0.83, r: 37.5, estimated: false }  # 긴문맥
  instruction: { s: 28.9, z: -1.03, r: 34.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hermes 4 405B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Hermes 4 405B

Nous Research · Open · Large · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $1.0 · 출력 $3.0 · 혼합 $1.2/1M · 37.167013643204896 t/s · TTFT 5.109914056225096s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.2 | +0.01 | 실측 | [[gpqa-diamond]] 72.72727272727269%×0.4, [[humanitys-last-exam]] 10.8897126969416%×0.3 |
| 추론 | 45.3 | -0.31 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 72.72727272727269%×1.0, [[humanitys-last-exam]] 10.8897126969416%×1.0 |
| 코딩 | 38.5 | -0.76 | 실측 | [[terminal-bench]] 11.363636363636399%×0.5 |
| 에이전트 | 37.1 | -0.86 | 실측 | [[tau2-bench]] 22.2222222222222%×1.0, [[terminal-bench]] 11.363636363636399%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.5 | -0.83 | 실측 | [[aa-lcr]] 22.3333333333333%×1.0 |
| 지시 따르기 | 34.5 | -1.03 | 실측 | [[ifbench]] 32.7210884353742%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
