---
type: Model
title: Gemini 3.6 Flash (high)
creator: Google
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 0.63
output_speed_tps: 175.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.4, z: 1.65, r: 74.8, estimated: false }  # 전문 지식
  reasoning: { s: 65.5, z: 1.32, r: 69.7, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.35, r: 70.2, estimated: false }  # 코딩
  agentic: { s: 58.1, z: 0.71, r: 60.7, estimated: false }  # 에이전트
  trust: { s: 43.3, z: 0.76, r: 61.3, estimated: false }  # 신뢰성
  multimodal: { s: 93.2, z: 1.08, r: 66.3, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.14, r: 67.1, estimated: false }  # 긴문맥
  instruction: { s: 85.8, z: 1.3, r: 69.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.6 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-15
timestamp: 2026-10-15T00:00:00Z
---

# Gemini 3.6 Flash (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **34.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.63/1M · 175.0 t/s · TTFT 14.25s · 1M ctx` · 가성비 54.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.8 | +1.65 | 실측 | [[aa-omniscience]] 50.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 69.7 | +1.32 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 70.2 | +1.35 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 60.7 | +0.71 | 실측 | [[gdpval]] 39.0%×1.0, [[tau3-banking]] 30.0%×1.0 |
| 신뢰성 | 61.3 | +0.76 | 실측 | [[aa-omniscience]] 44.0%×1.0 |
| 멀티모달 | 66.3 | +1.08 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 67.1 | +1.14 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 69.5 | +1.3 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
