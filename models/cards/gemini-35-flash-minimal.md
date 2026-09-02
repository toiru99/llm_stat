---
type: Model
title: Gemini 3.5 Flash (minimal)
creator: Google
license: Proprietary
intelligence_index: 36.0
price_blended_usd_1m: 1.305
output_speed_tps: 182.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 65.0, z: 1.23, r: 68.4, estimated: false }  # 전문 지식
  reasoning: { s: 42.9, z: 0.42, r: 56.3, estimated: false }  # 추론
  coding: { s: 75.9, z: 1.24, r: 68.6, estimated: false }  # 코딩
  agentic: { s: 64.6, z: 1.07, r: 66.1, estimated: false }  # 에이전트
  trust: { s: 24.7, z: 0.02, r: 50.3, estimated: false }  # 신뢰성
  multimodal: { s: 92.9, z: 1.07, r: 66.0, estimated: false }  # 멀티모달
  long_context: { s: 69.9, z: 0.61, r: 59.2, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.14, r: 47.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash (minimal)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Gemini 3.5 Flash (minimal)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **36.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $1.5 · 출력 $9.0 · 혼합 $1.305/1M · 182.0 t/s · TTFT 1.02s · 1M ctx` · 가성비 27.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.4 | +1.23 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 56.3 | +0.42 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 68.6 | +1.24 | 실측 | [[scicode]] 49.0%×1.0, [[terminal-bench]] 46.0%×0.5 |
| 에이전트 | 66.1 | +1.07 | 실측 | [[tau2-bench]] 59.0%×1.0, [[terminal-bench]] 46.0%×1.0 |
| 신뢰성 | 50.3 | +0.02 | 실측 | [[aa-omniscience]] 26.0%×1.0 |
| 멀티모달 | 66.0 | +1.07 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 59.2 | +0.61 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 47.8 | -0.14 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
