---
type: Model
title: Nemotron 3 Ultra
creator: NVIDIA
license: Open
intelligence_index: 38.0
price_blended_usd_1m: 0.5775
output_speed_tps: 144.0
context_window: 262000
status: current
size_class: Large
params_b: 550
is_reasoning: true
radar:
  knowledge: { s: 49.7, z: 0.45, r: 56.7, estimated: false }  # 전문 지식
  reasoning: { s: 48.8, z: 0.7, r: 60.4, estimated: false }  # 추론
  coding: { s: 61.2, z: 0.59, r: 58.9, estimated: false }  # 코딩
  agentic: { s: 53.5, z: 0.62, r: 59.3, estimated: false }  # 에이전트
  trust: { s: 70.1, z: 2.15, r: 82.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.08, r: 66.1, estimated: false }  # 긴문맥
  instruction: { s: 97.2, z: 1.85, r: 77.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Ultra
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Nemotron 3 Ultra

NVIDIA · Open · Large(550B) · 컨텍스트 262k · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 코딩, 전문 지식

## 실용 지표
`입력 $0.68 · 출력 $2.67 · 혼합 $0.5775/1M · 144.0 t/s · TTFT 2.82s · 262k ctx` · 가성비 65.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.7 | +0.45 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 60.4 | +0.7 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 58.9 | +0.59 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 59.3 | +0.62 | 실측 | [[gdpval]] 33.0%×1.0, [[tau2-bench]] 83.0%×1.0, [[tau3-banking]] 14.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 82.2 | +2.15 | 실측 | [[aa-omniscience]] 70.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.1 | +1.08 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 77.7 | +1.85 | 실측 | [[ifbench]] 81.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
