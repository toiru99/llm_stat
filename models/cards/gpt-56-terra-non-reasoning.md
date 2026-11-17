---
type: Model
title: GPT-5.6 Terra (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: 92.54009558986957
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 48.9, z: 0.09, r: 51.3, estimated: false }  # 전문 지식
  reasoning: { s: 31.6, z: -0.19, r: 47.2, estimated: false }  # 추론
  coding: { s: 62.9, z: 0.79, r: 61.8, estimated: false }  # 코딩
  agentic: { s: 48.4, z: 0.13, r: 52.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 69.8, z: -0.07, r: 48.9, estimated: false }  # 멀티모달
  long_context: { s: 66.2, z: 0.38, r: 55.7, estimated: false }  # 긴문맥
  instruction: { s: 64.0, z: 0.43, r: 56.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-5.6 Terra (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 92.54009558986957 t/s · TTFT 1.8741220001326349s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.3 | +0.09 | 실측 | [[gpqa-diamond]] 74.64646464646461%×0.4, [[humanitys-last-exam]] 11.3994439295644%×0.3 |
| 추론 | 47.2 | -0.19 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 74.64646464646461%×1.0, [[humanitys-last-exam]] 11.3994439295644%×1.0 |
| 코딩 | 61.8 | +0.79 | 실측 | [[scicode]] 45.1388888888889%×1.0 |
| 에이전트 | 52.0 | +0.13 | 실측 | [[gdpval]] 1105.7%×1.0, [[tau3-banking]] 15.6701030927835%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 48.9 | -0.07 | 실측 | [[mmmu-pro]] 66.7052023121387%×1.0 |
| 긴문맥 | 55.7 | +0.38 | 실측 | [[aa-lcr]] 58.6666666666667%×1.0 |
| 지시 따르기 | 56.5 | +0.43 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
