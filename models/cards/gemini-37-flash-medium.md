---
type: Model
title: Gemini 3.7 Flash (medium)
creator: Google
license: Proprietary
intelligence_index: 53.0
price_blended_usd_1m: 0.5775
output_speed_tps: 320.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 84.0, z: 2.15, r: 82.3, estimated: false }  # 전문 지식
  reasoning: { s: 65.0, z: 1.54, r: 73.2, estimated: false }  # 추론
  coding: { s: 96.7, z: 2.06, r: 80.8, estimated: false }  # 코딩
  agentic: { s: 72.2, z: 1.39, r: 70.8, estimated: false }  # 에이전트
  trust: { s: 33.0, z: 0.42, r: 56.3, estimated: false }  # 신뢰성
  multimodal: { s: 100.0, z: 1.42, r: 71.3, estimated: false }  # 멀티모달
  long_context: { s: 97.6, z: 1.48, r: 72.2, estimated: false }  # 긴문맥
  instruction: { s: 83.6, z: 1.32, r: 69.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.7 Flash (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Gemini 3.7 Flash (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **53.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 320.0 t/s · TTFT 5.96s · 1M ctx` · 가성비 91.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 82.3 | +2.15 | 실측 | [[aa-omniscience]] 54.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 73.2 | +1.54 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 80.8 | +2.06 | 실측 | [[scicode]] 58.0%×1.0 |
| 에이전트 | 70.8 | +1.39 | 실측 | [[gdpval]] 50.0%×1.0, [[tau3-banking]] 35.0%×1.0 |
| 신뢰성 | 56.3 | +0.42 | 실측 | [[aa-omniscience]] 34.0%×1.0 |
| 멀티모달 | 71.3 | +1.42 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 72.2 | +1.48 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 69.7 | +1.32 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
