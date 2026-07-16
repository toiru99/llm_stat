---
type: Model
title: Nanbeige4.1-3B
creator: Nanbeige
license: Open
intelligence_index: 11.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 32.9, z: -0.37, r: 44.5, estimated: false }  # 전문 지식
  reasoning: { s: 35.5, z: 0.1, r: 51.6, estimated: false }  # 추론
  coding: { s: 30.0, z: -0.68, r: 39.7, estimated: false }  # 코딩
  agentic: { s: 5.6, z: -1.19, r: 32.1, estimated: false }  # 에이전트
  trust: { s: 49.4, z: 1.02, r: 65.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.43, r: 28.5, estimated: false }  # 긴문맥
  instruction: { s: 32.4, z: -0.82, r: 37.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nanbeige4.1-3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-16
timestamp: 2026-07-16T00:00:00Z
---

# Nanbeige4.1-3B

Nanbeige · Open · Unknown · 컨텍스트 256k · 종합지능 **11.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.5 | -0.37 | 실측 | [[aa-omniscience]] 10.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 51.6 | +0.1 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 39.7 | -0.68 | 실측 | [[scicode]] 27.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 32.1 | -1.19 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 22.0%×1.0, [[tau3-banking]] 0.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 65.3 | +1.02 | 실측 | [[aa-omniscience]] 43.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.5 | -1.43 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 37.7 | -0.82 | 실측 | [[ifbench]] 35.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
