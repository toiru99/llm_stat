---
type: Model
title: Gemini 3.6 Flash
creator: Google
license: Proprietary
intelligence_index: 50.0
price_blended_usd_1m: None
output_speed_tps: 224.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.8, z: 2.0, r: 80.0, estimated: false }  # 전문 지식
  reasoning: { s: 68.1, z: 1.69, r: 75.3, estimated: false }  # 추론
  coding: { s: 88.3, z: 1.72, r: 75.8, estimated: false }  # 코딩
  agentic: { s: 70.6, z: 1.33, r: 69.9, estimated: false }  # 에이전트
  trust: { s: 51.7, z: 1.12, r: 66.8, estimated: false }  # 신뢰성
  multimodal: { s: 97.1, z: 1.23, r: 68.4, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 74.6, z: 0.89, r: 63.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.6 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-02
timestamp: 2026-08-02T00:00:00Z
---

# Gemini 3.6 Flash

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $1.5 · 출력 $7.5 · 혼합 $None/1M · 224.0 t/s · TTFT 15.55s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.0 | +2.0 | 실측 | [[aa-omniscience]] 50.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 38.0%×0.3 |
| 추론 | 75.3 | +1.69 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 38.0%×1.0 |
| 코딩 | 75.8 | +1.72 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 69.9 | +1.33 | 실측 | [[gdpval]] 46.0%×1.0, [[tau3-banking]] 25.0%×1.0 |
| 신뢰성 | 66.8 | +1.12 | 실측 | [[aa-omniscience]] 46.0%×1.0 |
| 멀티모달 | 68.4 | +1.23 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 63.3 | +0.89 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
