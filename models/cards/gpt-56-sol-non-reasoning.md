---
type: Model
title: GPT-5.6 Sol (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.08
output_speed_tps: 105.90303569665457
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 54.9, z: 0.38, r: 55.6, estimated: false }  # 전문 지식
  reasoning: { s: 38.6, z: 0.16, r: 52.4, estimated: false }  # 추론
  coding: { s: 67.0, z: 0.93, r: 63.9, estimated: false }  # 코딩
  agentic: { s: 55.4, z: 0.37, r: 55.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 76.8, z: 0.28, r: 54.2, estimated: false }  # 멀티모달
  long_context: { s: 70.3, z: 0.5, r: 57.6, estimated: false }  # 긴문맥
  instruction: { s: 72.2, z: 0.78, r: 61.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-5.6 Sol (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 105.90303569665457 t/s · TTFT 2.097609055442145s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.6 | +0.38 | 실측 | [[gpqa-diamond]] 78.989898989899%×0.4, [[humanitys-last-exam]] 16.682113067655198%×0.3 |
| 추론 | 52.4 | +0.16 | 실측 | [[critpt]] 5.14285714285714%×1.0, [[gpqa-diamond]] 78.989898989899%×1.0, [[humanitys-last-exam]] 16.682113067655198%×1.0 |
| 코딩 | 63.9 | +0.93 | 실측 | [[scicode]] 47.685185185185205%×1.0 |
| 에이전트 | 55.6 | +0.37 | 실측 | [[gdpval]] 1249.52%×1.0, [[tau3-banking]] 19.5876288659794%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 54.2 | +0.28 | 실측 | [[mmmu-pro]] 71.90751445086701%×1.0 |
| 긴문맥 | 57.6 | +0.5 | 실측 | [[aa-lcr]] 62.33333333333329%×1.0 |
| 지시 따르기 | 61.6 | +0.78 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
