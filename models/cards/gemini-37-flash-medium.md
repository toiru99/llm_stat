---
type: Model
title: Gemini 3.7 Flash (medium)
creator: Google
license: Proprietary
intelligence_index: 53.0
price_blended_usd_1m: 0.5775
output_speed_tps: 342.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.8, z: 2.02, r: 80.3, estimated: false }  # 전문 지식
  reasoning: { s: 65.0, z: 1.42, r: 71.2, estimated: false }  # 추론
  coding: { s: 96.7, z: 1.96, r: 79.3, estimated: false }  # 코딩
  agentic: { s: 71.6, z: 1.32, r: 69.8, estimated: false }  # 에이전트
  trust: { s: 37.2, z: 0.35, r: 55.3, estimated: false }  # 신뢰성
  multimodal: { s: 100.0, z: 1.33, r: 69.9, estimated: false }  # 멀티모달
  long_context: { s: 97.6, z: 1.4, r: 71.0, estimated: false }  # 긴문맥
  instruction: { s: 83.8, z: 1.2, r: 68.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.7 Flash (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Gemini 3.7 Flash (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **53.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 342.0 t/s · TTFT 5.88s · 1M ctx` · 가성비 91.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.3 | +2.02 | 실측 | [[aa-omniscience]] 54.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 71.2 | +1.42 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 79.3 | +1.96 | 실측 | [[scicode]] 58.0%×1.0 |
| 에이전트 | 69.8 | +1.32 | 실측 | [[gdpval]] 50.0%×1.0, [[tau3-banking]] 35.0%×1.0 |
| 신뢰성 | 55.3 | +0.35 | 실측 | [[aa-omniscience]] 34.0%×1.0 |
| 멀티모달 | 69.9 | +1.33 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 71.0 | +1.4 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 68.0 | +1.2 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
