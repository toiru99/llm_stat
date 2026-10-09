---
type: Model
title: Gemini 3.6 Flash (high)
creator: Google
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 0.63
output_speed_tps: 189.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.4, z: 1.66, r: 74.9, estimated: false }  # 전문 지식
  reasoning: { s: 65.9, z: 1.33, r: 69.9, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.36, r: 70.4, estimated: false }  # 코딩
  agentic: { s: 58.1, z: 0.73, r: 60.9, estimated: false }  # 에이전트
  trust: { s: 43.3, z: 0.76, r: 61.5, estimated: false }  # 신뢰성
  multimodal: { s: 93.2, z: 1.08, r: 66.3, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.15, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 85.1, z: 1.28, r: 69.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.6 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# Gemini 3.6 Flash (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **34.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.63/1M · 189.0 t/s · TTFT 14.47s · 1M ctx` · 가성비 54.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.9 | +1.66 | 실측 | [[aa-omniscience]] 50.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 69.9 | +1.33 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 70.4 | +1.36 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 60.9 | +0.73 | 실측 | [[gdpval]] 39.0%×1.0, [[tau3-banking]] 30.0%×1.0 |
| 신뢰성 | 61.5 | +0.76 | 실측 | [[aa-omniscience]] 44.0%×1.0 |
| 멀티모달 | 66.3 | +1.08 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 67.2 | +1.15 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 69.2 | +1.28 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
