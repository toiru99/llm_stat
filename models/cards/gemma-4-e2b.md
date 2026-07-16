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
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 16.5, z: -1.16, r: 32.6, estimated: false }  # 전문 지식
  reasoning: { s: 15.7, z: -0.95, r: 35.8, estimated: false }  # 추론
  coding: { s: 24.8, z: -0.9, r: 36.5, estimated: false }  # 코딩
  agentic: { s: 12.9, z: -0.91, r: 36.4, estimated: false }  # 에이전트
  trust: { s: 77.6, z: 2.36, r: 85.3, estimated: false }  # 신뢰성
  multimodal: { s: 43.5, z: -1.34, r: 29.9, estimated: false }  # 멀티모달
  long_context: { s: 19.7, z: -0.85, r: 37.2, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.65, r: 40.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 E2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-16
timestamp: 2026-07-16T00:00:00Z
---

# Gemma 4 E2B

Google · Open · Unknown · 컨텍스트 128k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.6 | -1.16 | 실측 | [[aa-omniscience]] 7.0%×1.0, [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 35.8 | -0.95 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 36.5 | -0.9 | 실측 | [[scicode]] 21.0%×1.0, [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 36.4 | -0.91 | 실측 | [[tau2-bench]] 21.0%×1.0, [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | 85.3 | +2.36 | 실측 | [[aa-omniscience]] 67.0%×1.0 |
| 멀티모달 | 29.9 | -1.34 | 실측 | [[mmmu-pro]] 45.0%×1.0 |
| 긴문맥 | 37.2 | -0.85 | 실측 | [[aa-lcr]] 15.0%×1.0 |
| 지시 따르기 | 40.3 | -0.65 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
