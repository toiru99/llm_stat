---
type: Model
title: Kimi K2.7 Code
creator: Kimi
license: Open
intelligence_index: 42.0
price_blended_usd_1m: 0.723
output_speed_tps: 42.0
context_window: 256000
status: current
size_class: Large
params_b: 1000
is_reasoning: true
radar:
  knowledge: { s: 70.5, z: 1.38, r: 70.7, estimated: false }  # 전문 지식
  reasoning: { s: 62.7, z: 1.42, r: 71.3, estimated: false }  # 추론
  coding: { s: 74.9, z: 1.16, r: 67.4, estimated: false }  # 코딩
  agentic: { s: 65.5, z: 1.13, r: 66.9, estimated: false }  # 에이전트
  trust: { s: 21.8, z: -0.31, r: 45.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.8, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.77, r: 61.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.7 Code
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-05
timestamp: 2026-08-05T00:00:00Z
---

# Kimi K2.7 Code

Kimi · Open · Large(1000B) · 컨텍스트 256k · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.95 · 출력 $4.0 · 혼합 $0.723/1M · 42.0 t/s · TTFT 2.88s · 256k ctx` · 가성비 58.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.7 | +1.38 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 71.3 | +1.42 | 실측 | [[critpt]] 10.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 67.4 | +1.16 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 45.0%×0.5 |
| 에이전트 | 66.9 | +1.13 | 실측 | [[gdpval]] 34.0%×1.0, [[tau2-bench]] 90.0%×1.0, [[tau3-banking]] 18.0%×1.0, [[terminal-bench]] 45.0%×1.0 |
| 신뢰성 | 45.4 | -0.31 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 61.6 | +0.77 | 실측 | [[ifbench]] 63.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
