---
type: Model
title: Phi-4
creator: Microsoft
license: Open
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 16000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 25.9, z: -0.71, r: 39.4, estimated: false }  # 전문 지식
  reasoning: { s: 20.6, z: -0.69, r: 39.7, estimated: false }  # 추론
  coding: { s: 30.9, z: -0.65, r: 40.2, estimated: false }  # 코딩
  agentic: { s: 3.0, z: -1.29, r: 30.6, estimated: false }  # 에이전트
  trust: { s: 21.2, z: -0.31, r: 45.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.45, r: 28.3, estimated: false }  # 긴문맥
  instruction: { s: 16.9, z: -1.48, r: 27.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Phi-4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-21
timestamp: 2026-07-21T00:00:00Z
---

# Phi-4

Microsoft · Open · Unknown · 컨텍스트 16k · 종합지능 **5.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.13 · 출력 $0.5 · 혼합 $None/1M · None t/s · TTFT Nones · 16k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.4 | -0.71 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 57.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.7 | -0.69 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 40.2 | -0.65 | 실측 | [[scicode]] 26.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 30.6 | -1.29 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 45.3 | -0.31 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.3 | -1.45 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 27.8 | -1.48 | 실측 | [[ifbench]] 24.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
