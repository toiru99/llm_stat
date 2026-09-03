---
type: Model
title: Kimi K2.7 Code
creator: Kimi
license: Open
intelligence_index: 43.0
price_blended_usd_1m: 0.723
output_speed_tps: 39.0
context_window: 256000
status: current
size_class: Large
params_b: 1000
is_reasoning: true
radar:
  knowledge: { s: 67.6, z: 1.33, r: 69.9, estimated: false }  # 전문 지식
  reasoning: { s: 61.3, z: 1.31, r: 69.7, estimated: false }  # 추론
  coding: { s: 73.3, z: 1.1, r: 66.5, estimated: false }  # 코딩
  agentic: { s: 61.9, z: 0.95, r: 64.2, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.38, r: 44.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.4, z: 1.22, r: 68.3, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.79, r: 61.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.7 Code
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Kimi K2.7 Code

Kimi · Open · Large(1000B) · 컨텍스트 256k · 종합지능 **43.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.95 · 출력 $4.0 · 혼합 $0.723/1M · 39.0 t/s · TTFT 3.05s · 256k ctx` · 가성비 59.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.9 | +1.33 | 실측 | [[aa-omniscience]] 40.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 35.0%×0.3 |
| 추론 | 69.7 | +1.31 | 실측 | [[critpt]] 10.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 35.0%×1.0 |
| 코딩 | 66.5 | +1.1 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 45.0%×0.5 |
| 에이전트 | 64.2 | +0.95 | 실측 | [[gdpval]] 34.0%×1.0, [[tau2-bench]] 90.0%×1.0, [[tau3-banking]] 20.0%×1.0, [[terminal-bench]] 45.0%×1.0 |
| 신뢰성 | 44.2 | -0.38 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.3 | +1.22 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 61.8 | +0.79 | 실측 | [[ifbench]] 63.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
