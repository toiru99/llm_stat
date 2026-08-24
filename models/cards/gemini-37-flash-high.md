---
type: Model
title: Gemini 3.7 Flash (high)
creator: Google
license: Proprietary
intelligence_index: 56.0
price_blended_usd_1m: 0.5775
output_speed_tps: 340.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.5, z: 2.24, r: 83.5, estimated: false }  # 전문 지식
  reasoning: { s: 76.9, z: 2.01, r: 80.1, estimated: false }  # 추론
  coding: { s: 95.0, z: 1.89, r: 78.4, estimated: false }  # 코딩
  agentic: { s: 71.2, z: 1.31, r: 69.7, estimated: false }  # 에이전트
  trust: { s: 38.4, z: 0.44, r: 56.6, estimated: false }  # 신뢰성
  multimodal: { s: 100.0, z: 1.33, r: 69.9, estimated: false }  # 멀티모달
  long_context: { s: 96.4, z: 1.37, r: 70.6, estimated: false }  # 긴문맥
  instruction: { s: 83.0, z: 1.16, r: 67.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.7 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# Gemini 3.7 Flash (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **56.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 340.0 t/s · TTFT 12.19s · 1M ctx` · 가성비 97.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 83.5 | +2.24 | 실측 | [[aa-omniscience]] 55.0%×1.0, [[gpqa-diamond]] 95.0%×0.4, [[humanitys-last-exam]] 48.0%×0.3 |
| 추론 | 80.1 | +2.01 | 실측 | [[critpt]] 14.0%×1.0, [[gpqa-diamond]] 95.0%×1.0, [[humanitys-last-exam]] 48.0%×1.0 |
| 코딩 | 78.4 | +1.89 | 실측 | [[scicode]] 57.0%×1.0 |
| 에이전트 | 69.7 | +1.31 | 실측 | [[gdpval]] 52.0%×1.0, [[tau3-banking]] 33.0%×1.0 |
| 신뢰성 | 56.6 | +0.44 | 실측 | [[aa-omniscience]] 35.0%×1.0 |
| 멀티모달 | 69.9 | +1.33 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 70.6 | +1.37 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 67.5 | +1.16 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
