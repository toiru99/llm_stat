---
type: Model
title: HyperNova 60B 2605 (high)
creator: Multiverse Computing
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 53.3, z: 0.17, r: 52.6, estimated: false }  # 전문 지식
  reasoning: { s: 50.0, z: 0.19, r: 52.9, estimated: false }  # 추론
  coding: { s: 34.8, z: -0.08, r: 48.9, estimated: false }  # 코딩
  agentic: { s: 23.5, z: -0.37, r: 44.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 40.4, z: -0.35, r: 44.7, estimated: false }  # 긴문맥
  instruction: { s: 76.1, z: 0.98, r: 64.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — HyperNova 60B 2605 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# HyperNova 60B 2605 (high)

Multiverse Computing · Open · Medium · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.6 | +0.17 | 실측 | [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 52.9 | +0.19 | 실측 | [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 48.9 | -0.08 | 실측 | [[terminal-bench]] 23.0%×0.5 |
| 에이전트 | 44.5 | -0.37 | 실측 | [[gdpval]] 449.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 23.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.7 | -0.35 | 실측 | [[aa-lcr]] 36.0%×1.0 |
| 지시 따르기 | 64.7 | +0.98 | 실측 | [[ifbench]] 66.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
