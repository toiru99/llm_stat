---
type: Model
title: GPT-6 Sol (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 108.660704172844
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 58.8, z: 0.55, r: 58.3, estimated: false }  # 전문 지식
  reasoning: { s: 65.0, z: 1.45, r: 71.8, estimated: false }  # 추론
  coding: { s: 78.9, z: 1.32, r: 69.8, estimated: false }  # 코딩
  agentic: { s: 79.5, z: 1.2, r: 68.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 90.0, z: 0.95, r: 64.2, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 67.7, z: 0.58, r: 58.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# GPT-6 Sol (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 108.660704172844 t/s · TTFT 5.45660188065557s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.3 | +0.55 | 실측 | [[humanitys-last-exam]] 44.114921223355005%×0.3 |
| 추론 | 71.8 | +1.45 | 실측 | [[critpt]] 25.428571428571402%×1.0, [[humanitys-last-exam]] 44.114921223355005%×1.0 |
| 코딩 | 69.8 | +1.32 | 실측 | [[scicode]] 54.86111111111111%×1.0 |
| 에이전트 | 68.0 | +1.2 | 실측 | [[gdpval]] 1402.17%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 64.2 | +0.95 | 실측 | [[mmmu-pro]] 81.9653179190751%×1.0 |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 83.6666666666667%×1.0 |
| 지시 따르기 | 58.7 | +0.58 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
