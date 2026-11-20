---
type: Model
title: GPT-5.6 Terra (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: 74.4368844011431
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 48.9, z: 0.08, r: 51.1, estimated: false }  # 전문 지식
  reasoning: { s: 31.6, z: -0.2, r: 47.0, estimated: false }  # 추론
  coding: { s: 62.9, z: 0.78, r: 61.6, estimated: false }  # 코딩
  agentic: { s: 48.4, z: 0.12, r: 51.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 69.6, z: -0.09, r: 48.6, estimated: false }  # 멀티모달
  long_context: { s: 66.2, z: 0.37, r: 55.6, estimated: false }  # 긴문맥
  instruction: { s: 64.0, z: 0.42, r: 56.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# GPT-5.6 Terra (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 74.4368844011431 t/s · TTFT 1.47130771787369s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.1 | +0.08 | 실측 | [[gpqa-diamond]] 74.64646464646461%×0.4, [[humanitys-last-exam]] 11.3994439295644%×0.3 |
| 추론 | 47.0 | -0.2 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 74.64646464646461%×1.0, [[humanitys-last-exam]] 11.3994439295644%×1.0 |
| 코딩 | 61.6 | +0.78 | 실측 | [[scicode]] 45.1388888888889%×1.0 |
| 에이전트 | 51.8 | +0.12 | 실측 | [[gdpval]] 1105.7%×1.0, [[tau3-banking]] 15.6701030927835%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 48.6 | -0.09 | 실측 | [[mmmu-pro]] 66.7052023121387%×1.0 |
| 긴문맥 | 55.6 | +0.37 | 실측 | [[aa-lcr]] 58.6666666666667%×1.0 |
| 지시 따르기 | 56.3 | +0.42 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
