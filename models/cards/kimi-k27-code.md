---
type: Model
title: Kimi K2.7 Code
creator: Kimi
license: Open
intelligence_index: 43.0
price_blended_usd_1m: 0.723
output_speed_tps: 42.0
context_window: 256000
status: current
size_class: Large
params_b: 1000
is_reasoning: true
radar:
  knowledge: { s: 69.4, z: 1.37, r: 70.6, estimated: false }  # 전문 지식
  reasoning: { s: 63.2, z: 1.4, r: 71.0, estimated: false }  # 추론
  coding: { s: 74.9, z: 1.15, r: 67.2, estimated: false }  # 코딩
  agentic: { s: 62.6, z: 1.07, r: 66.0, estimated: false }  # 에이전트
  trust: { s: 18.6, z: -0.35, r: 44.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.4, z: 1.25, r: 68.7, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.75, r: 61.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.7 Code
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-10
timestamp: 2026-08-10T00:00:00Z
---

# Kimi K2.7 Code

Kimi · Open · Large(1000B) · 컨텍스트 256k · 종합지능 **43.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.95 · 출력 $4.0 · 혼합 $0.723/1M · 42.0 t/s · TTFT 3.08s · 256k ctx` · 가성비 59.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.6 | +1.37 | 실측 | [[aa-omniscience]] 40.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 35.0%×0.3 |
| 추론 | 71.0 | +1.4 | 실측 | [[critpt]] 10.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 35.0%×1.0 |
| 코딩 | 67.2 | +1.15 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 45.0%×0.5 |
| 에이전트 | 66.0 | +1.07 | 실측 | [[gdpval]] 35.0%×1.0, [[tau2-bench]] 90.0%×1.0, [[tau3-banking]] 20.0%×1.0, [[terminal-bench]] 45.0%×1.0 |
| 신뢰성 | 44.7 | -0.35 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.7 | +1.25 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 61.3 | +0.75 | 실측 | [[ifbench]] 63.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
