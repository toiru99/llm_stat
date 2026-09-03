---
type: Model
title: Magistral Medium 1.2
creator: Mistral
license: Proprietary
intelligence_index: 18.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 38.9, z: -0.09, r: 48.7, estimated: false }  # 전문 지식
  reasoning: { s: 30.3, z: -0.22, r: 46.7, estimated: false }  # 추론
  coding: { s: 48.5, z: 0.06, r: 50.9, estimated: false }  # 코딩
  agentic: { s: 20.9, z: -0.64, r: 40.4, estimated: false }  # 에이전트
  trust: { s: 39.2, z: 0.69, r: 60.3, estimated: false }  # 신뢰성
  multimodal: { s: 63.4, z: -0.35, r: 44.7, estimated: false }  # 멀티모달
  long_context: { s: 63.9, z: 0.42, r: 56.2, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.39, r: 44.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Magistral Medium 1.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Magistral Medium 1.2

Mistral · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **18.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.7 | -0.09 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 74.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 46.7 | -0.22 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 74.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 50.9 | +0.06 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 13.0%×0.5 |
| 에이전트 | 40.4 | -0.64 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 52.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 13.0%×1.0 |
| 신뢰성 | 60.3 | +0.69 | 실측 | [[aa-omniscience]] 40.0%×1.0 |
| 멀티모달 | 44.7 | -0.35 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 56.2 | +0.42 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 44.2 | -0.39 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
