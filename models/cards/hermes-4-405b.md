---
type: Model
title: Hermes 4 405B
creator: Nous Research
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 1.2
output_speed_tps: 40.0
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 49.1, z: 0.43, r: 56.4, estimated: false }  # 전문 지식
  reasoning: { s: 30.8, z: -0.14, r: 47.9, estimated: false }  # 추론
  coding: { s: 33.3, z: -0.54, r: 41.9, estimated: false }  # 코딩
  agentic: { s: 19.4, z: -0.65, r: 40.2, estimated: false }  # 에이전트
  trust: { s: 4.7, z: -1.09, r: 33.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 27.6, z: -0.61, r: 40.8, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -0.94, r: 35.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hermes 4 405B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-13
timestamp: 2026-07-13T00:00:00Z
---

# Hermes 4 405B

Nous Research · Open · Unknown · 컨텍스트 128k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $1.0 · 출력 $3.0 · 혼합 $1.2/1M · 40.0 t/s · TTFT 2.38s · 128k ctx` · 가성비 7.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.4 | +0.43 | 실측 | [[aa-omniscience]] 30.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 47.9 | -0.14 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 41.9 | -0.54 | 실측 | [[scicode]] 25.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 40.2 | -0.65 | 실측 | [[tau2-bench]] 22.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 33.7 | -1.09 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.8 | -0.61 | 실측 | [[aa-lcr]] 21.0%×1.0 |
| 지시 따르기 | 35.9 | -0.94 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
