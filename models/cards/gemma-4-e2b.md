---
type: Model
title: Gemma 4 E2B
creator: Google
license: Open
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: 5.1
is_reasoning: true
radar:
  knowledge: { s: 14.8, z: -1.24, r: 31.3, estimated: false }  # 전문 지식
  reasoning: { s: 13.3, z: -1.07, r: 33.9, estimated: false }  # 추론
  coding: { s: 24.8, z: -0.91, r: 36.3, estimated: false }  # 코딩
  agentic: { s: 10.2, z: -1.01, r: 34.9, estimated: false }  # 에이전트
  trust: { s: 75.9, z: 2.28, r: 84.2, estimated: false }  # 신뢰성
  multimodal: { s: 43.5, z: -1.36, r: 29.6, estimated: false }  # 멀티모달
  long_context: { s: 19.7, z: -0.87, r: 37.0, estimated: false }  # 긴문맥
  instruction: { s: 32.4, z: -0.85, r: 37.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 E2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-24
timestamp: 2026-07-24T00:00:00Z
---

# Gemma 4 E2B

Google · Open · Small(5.1B) · 컨텍스트 128k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.3 | -1.24 | 실측 | [[aa-omniscience]] 7.0%×1.0, [[gpqa-diamond]] 37.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 33.9 | -1.07 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 37.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 36.3 | -0.91 | 실측 | [[scicode]] 21.0%×1.0, [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 34.9 | -1.01 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 21.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | 84.2 | +2.28 | 실측 | [[aa-omniscience]] 67.0%×1.0 |
| 멀티모달 | 29.6 | -1.36 | 실측 | [[mmmu-pro]] 45.0%×1.0 |
| 긴문맥 | 37.0 | -0.87 | 실측 | [[aa-lcr]] 15.0%×1.0 |
| 지시 따르기 | 37.3 | -0.85 | 실측 | [[ifbench]] 35.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
