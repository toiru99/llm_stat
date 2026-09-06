---
type: Model
title: Gemini 3.6 Flash
creator: Google
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: 0.63
output_speed_tps: 216.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.8, z: 1.82, r: 77.4, estimated: false }  # 전문 지식
  reasoning: { s: 66.6, z: 1.52, r: 72.8, estimated: false }  # 추론
  coding: { s: 79.6, z: 1.65, r: 74.8, estimated: false }  # 코딩
  agentic: { s: 62.2, z: 0.95, r: 64.2, estimated: false }  # 에이전트
  trust: { s: 43.3, z: 0.89, r: 63.3, estimated: false }  # 신뢰성
  multimodal: { s: 94.4, z: 1.2, r: 68.0, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.26, r: 68.8, estimated: false }  # 긴문맥
  instruction: { s: 76.4, z: 0.99, r: 64.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.6 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Gemini 3.6 Flash

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **40.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.63/1M · 216.0 t/s · TTFT 14.95s · 1M ctx` · 가성비 63.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 77.4 | +1.82 | 실측 | [[aa-omniscience]] 50.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 72.8 | +1.52 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 74.8 | +1.65 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 64.2 | +0.95 | 실측 | [[gdpval]] 42.0%×1.0, [[tau3-banking]] 30.0%×1.0 |
| 신뢰성 | 63.3 | +0.89 | 실측 | [[aa-omniscience]] 44.0%×1.0 |
| 멀티모달 | 68.0 | +1.2 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 68.8 | +1.26 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 64.8 | +0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
