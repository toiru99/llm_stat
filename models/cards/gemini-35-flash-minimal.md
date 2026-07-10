---
type: Model
title: Gemini 3.5 Flash (minimal)
creator: Google
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 1.31
output_speed_tps: 170.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 69.1, z: 1.4, r: 71.0, estimated: false }  # 전문 지식
  reasoning: { s: 44.1, z: 0.57, r: 58.6, estimated: false }  # 추론
  coding: { s: 77.7, z: 1.35, r: 70.3, estimated: false }  # 코딩
  agentic: { s: 64.6, z: 1.12, r: 66.7, estimated: false }  # 에이전트
  trust: { s: 30.6, z: 0.14, r: 52.1, estimated: false }  # 신뢰성
  multimodal: { s: 94.2, z: 1.09, r: 66.3, estimated: false }  # 멀티모달
  long_context: { s: 69.7, z: 0.64, r: 59.6, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.12, r: 48.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash (minimal)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Gemini 3.5 Flash (minimal)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $1.5 · 출력 $9.0 · 혼합 $1.31/1M · 170.0 t/s · TTFT 1.0s · 1M ctx` · 가성비 26.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.0 | +1.4 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 58.6 | +0.57 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 70.3 | +1.35 | 실측 | [[scicode]] 49.0%×1.0, [[terminal-bench]] 46.0%×0.5 |
| 에이전트 | 66.7 | +1.12 | 실측 | [[tau2-bench]] 59.0%×1.0, [[terminal-bench]] 46.0%×1.0 |
| 신뢰성 | 52.1 | +0.14 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | 66.3 | +1.09 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 59.6 | +0.64 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 48.2 | -0.12 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
