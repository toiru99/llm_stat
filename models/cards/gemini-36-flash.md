---
type: Model
title: Gemini 3.6 Flash
creator: Google
license: Proprietary
intelligence_index: 50.0
price_blended_usd_1m: None
output_speed_tps: 235.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.8, z: 2.01, r: 80.1, estimated: false }  # 전문 지식
  reasoning: { s: 68.1, z: 1.7, r: 75.5, estimated: false }  # 추론
  coding: { s: 88.3, z: 1.73, r: 76.0, estimated: false }  # 코딩
  agentic: { s: 71.7, z: 1.37, r: 70.5, estimated: false }  # 에이전트
  trust: { s: 51.7, z: 1.11, r: 66.7, estimated: false }  # 신뢰성
  multimodal: { s: 97.1, z: 1.23, r: 68.5, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.27, r: 69.0, estimated: false }  # 긴문맥
  instruction: { s: 80.9, z: 1.15, r: 67.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.6 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# Gemini 3.6 Flash

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $1.5 · 출력 $7.5 · 혼합 $None/1M · 235.0 t/s · TTFT 14.86s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.1 | +2.01 | 실측 | [[aa-omniscience]] 50.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 38.0%×0.3 |
| 추론 | 75.5 | +1.7 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 38.0%×1.0 |
| 코딩 | 76.0 | +1.73 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 70.5 | +1.37 | 실측 | [[gdpval]] 46.0%×1.0, [[tau3-banking]] 25.0%×1.0 |
| 신뢰성 | 66.7 | +1.11 | 실측 | [[aa-omniscience]] 46.0%×1.0 |
| 멀티모달 | 68.5 | +1.23 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 69.0 | +1.27 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 67.2 | +1.15 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
