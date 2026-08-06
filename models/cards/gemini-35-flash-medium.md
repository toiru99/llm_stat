---
type: Model
title: Gemini 3.5 Flash (medium)
creator: Google
license: Proprietary
intelligence_index: 45.0
price_blended_usd_1m: 1.305
output_speed_tps: 178.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.2, z: 2.06, r: 80.9, estimated: false }  # 전문 지식
  reasoning: { s: 69.0, z: 1.71, r: 75.7, estimated: false }  # 추론
  coding: { s: 78.6, z: 1.29, r: 69.4, estimated: false }  # 코딩
  agentic: { s: 78.0, z: 1.69, r: 75.3, estimated: false }  # 에이전트
  trust: { s: 44.8, z: 0.74, r: 61.1, estimated: false }  # 신뢰성
  multimodal: { s: 98.6, z: 1.29, r: 69.3, estimated: false }  # 멀티모달
  long_context: { s: 93.4, z: 1.29, r: 69.4, estimated: false }  # 긴문맥
  instruction: { s: 88.7, z: 1.46, r: 71.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Gemini 3.5 Flash (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **45.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $1.5 · 출력 $9.0 · 혼합 $1.305/1M · 178.0 t/s · TTFT 17.33s · 1M ctx` · 가성비 34.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.9 | +2.06 | 실측 | [[aa-omniscience]] 51.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 75.7 | +1.71 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 69.4 | +1.29 | 실측 | [[scicode]] 53.0%×1.0, [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 75.3 | +1.69 | 실측 | [[tau2-bench]] 96.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | 61.1 | +0.74 | 실측 | [[aa-omniscience]] 40.0%×1.0 |
| 멀티모달 | 69.3 | +1.29 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 69.4 | +1.29 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 71.9 | +1.46 | 실측 | [[ifbench]] 75.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
