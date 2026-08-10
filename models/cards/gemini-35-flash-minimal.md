---
type: Model
title: Gemini 3.5 Flash (minimal)
creator: Google
license: Proprietary
intelligence_index: 36.0
price_blended_usd_1m: 1.305
output_speed_tps: 167.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 66.6, z: 1.24, r: 68.6, estimated: false }  # 전문 지식
  reasoning: { s: 44.2, z: 0.46, r: 57.0, estimated: false }  # 추론
  coding: { s: 77.7, z: 1.26, r: 68.9, estimated: false }  # 코딩
  agentic: { s: 64.6, z: 1.15, r: 67.2, estimated: false }  # 에이전트
  trust: { s: 27.9, z: 0.07, r: 51.1, estimated: false }  # 신뢰성
  multimodal: { s: 92.9, z: 1.01, r: 65.2, estimated: false }  # 멀티모달
  long_context: { s: 69.9, z: 0.63, r: 59.4, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.18, r: 47.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash (minimal)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-10
timestamp: 2026-08-10T00:00:00Z
---

# Gemini 3.5 Flash (minimal)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **36.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $1.5 · 출력 $9.0 · 혼합 $1.305/1M · 167.0 t/s · TTFT 0.95s · 1M ctx` · 가성비 27.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.6 | +1.24 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 57.0 | +0.46 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 68.9 | +1.26 | 실측 | [[scicode]] 49.0%×1.0, [[terminal-bench]] 46.0%×0.5 |
| 에이전트 | 67.2 | +1.15 | 실측 | [[tau2-bench]] 59.0%×1.0, [[terminal-bench]] 46.0%×1.0 |
| 신뢰성 | 51.1 | +0.07 | 실측 | [[aa-omniscience]] 26.0%×1.0 |
| 멀티모달 | 65.2 | +1.01 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 59.4 | +0.63 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 47.3 | -0.18 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
