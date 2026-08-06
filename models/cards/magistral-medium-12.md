---
type: Model
title: Magistral Medium 1.2
creator: Mistral
license: Proprietary
intelligence_index: 18.0
price_blended_usd_1m: 2.3
output_speed_tps: 110.0
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 40.6, z: -0.04, r: 49.4, estimated: false }  # 전문 지식
  reasoning: { s: 31.2, z: -0.18, r: 47.3, estimated: false }  # 추론
  coding: { s: 49.9, z: 0.11, r: 51.6, estimated: false }  # 코딩
  agentic: { s: 21.6, z: -0.57, r: 41.5, estimated: false }  # 에이전트
  trust: { s: 46.0, z: 0.79, r: 61.9, estimated: false }  # 신뢰성
  multimodal: { s: 64.3, z: -0.36, r: 44.6, estimated: false }  # 멀티모달
  long_context: { s: 67.1, z: 0.51, r: 57.7, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.4, r: 44.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Magistral Medium 1.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Magistral Medium 1.2

Mistral · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **18.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $2.0 · 출력 $5.0 · 혼합 $2.3/1M · 110.0 t/s · TTFT 2.21s · 128k ctx` · 가성비 7.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.4 | -0.04 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 74.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 47.3 | -0.18 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 74.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 51.6 | +0.11 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 13.0%×0.5 |
| 에이전트 | 41.5 | -0.57 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 52.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 13.0%×1.0 |
| 신뢰성 | 61.9 | +0.79 | 실측 | [[aa-omniscience]] 41.0%×1.0 |
| 멀티모달 | 44.6 | -0.36 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 57.7 | +0.51 | 실측 | [[aa-lcr]] 51.0%×1.0 |
| 지시 따르기 | 44.0 | -0.4 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
