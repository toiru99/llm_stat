---
type: Model
title: HyperNova 60B 2605
creator: Multiverse Computing
license: Open
intelligence_index: 18.0
price_blended_usd_1m: 0.05
output_speed_tps: 334.0
context_window: 131000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 35.1, z: -0.25, r: 46.3, estimated: false }  # 전문 지식
  reasoning: { s: 35.0, z: 0.09, r: 51.3, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.1, r: 51.5, estimated: false }  # 코딩
  agentic: { s: 31.6, z: -0.17, r: 47.4, estimated: false }  # 에이전트
  trust: { s: 20.0, z: -0.36, r: 44.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 42.1, z: -0.18, r: 47.3, estimated: false }  # 긴문맥
  instruction: { s: 76.1, z: 0.98, r: 64.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — HyperNova 60B 2605
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# HyperNova 60B 2605

Multiverse Computing · Open · Unknown · 컨텍스트 131k · 종합지능 **18.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.04 · 출력 $0.14 · 혼합 $0.05/1M · 334.0 t/s · TTFT 0.95s · 131k ctx` · 가성비 360.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.3 | -0.25 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 51.3 | +0.09 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 51.5 | +0.1 | 실측 | [[scicode]] 33.0%×1.0, [[terminal-bench]] 23.0%×0.5 |
| 에이전트 | 47.4 | -0.17 | 실측 | [[gdpval]] 8.0%×1.0, [[tau2-bench]] 63.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 23.0%×1.0 |
| 신뢰성 | 44.6 | -0.36 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.3 | -0.18 | 실측 | [[aa-lcr]] 32.0%×1.0 |
| 지시 따르기 | 64.7 | +0.98 | 실측 | [[ifbench]] 66.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
