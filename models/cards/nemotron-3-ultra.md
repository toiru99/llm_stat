---
type: Model
title: Nemotron 3 Ultra
creator: NVIDIA
license: Open
intelligence_index: 38.0
price_blended_usd_1m: 0.535
output_speed_tps: 123.0
context_window: 262000
status: current
size_class: Large
params_b: 550
is_reasoning: true
radar:
  knowledge: { s: 51.0, z: 0.51, r: 57.7, estimated: false }  # 전문 지식
  reasoning: { s: 50.0, z: 0.79, r: 61.8, estimated: false }  # 추론
  coding: { s: 62.6, z: 0.63, r: 59.5, estimated: false }  # 코딩
  agentic: { s: 54.0, z: 0.67, r: 60.1, estimated: false }  # 에이전트
  trust: { s: 70.1, z: 2.17, r: 82.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.11, r: 66.7, estimated: false }  # 긴문맥
  instruction: { s: 97.2, z: 1.89, r: 78.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Ultra
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Nemotron 3 Ultra

NVIDIA · Open · Large(550B) · 컨텍스트 262k · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 코딩, 전문 지식

## 실용 지표
`입력 $0.6 · 출력 $2.75 · 혼합 $0.535/1M · 123.0 t/s · TTFT 2.42s · 262k ctx` · 가성비 71.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.7 | +0.51 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 61.8 | +0.79 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 59.5 | +0.63 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 60.1 | +0.67 | 실측 | [[gdpval]] 33.0%×1.0, [[tau2-bench]] 83.0%×1.0, [[tau3-banking]] 14.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 82.6 | +2.17 | 실측 | [[aa-omniscience]] 70.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.7 | +1.11 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 78.3 | +1.89 | 실측 | [[ifbench]] 81.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
