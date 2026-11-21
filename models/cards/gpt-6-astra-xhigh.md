---
type: Model
title: GPT-6 Astra (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 55.3057468569681
price_blended_usd_1m: 7.7
output_speed_tps: 44.6128127383904
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.5, z: 1.99, r: 79.8, estimated: false }  # 전문 지식
  reasoning: { s: 87.0, z: 2.54, r: 88.1, estimated: false }  # 추론
  coding: { s: 80.2, z: 1.36, r: 70.4, estimated: false }  # 코딩
  agentic: { s: 85.4, z: 1.4, r: 71.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 95.7, z: 1.24, r: 68.6, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: 81.2, z: 1.14, r: 67.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# GPT-6 Astra (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **55.3057468569681** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 44.6128127383904 t/s · TTFT 83.2509757081154s · 1M ctx` · 가성비 7.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.8 | +1.99 | 실측 | [[gpqa-diamond]] 96.2626262626263%×0.4, [[humanitys-last-exam]] 54.587581093605195%×0.3 |
| 추론 | 88.1 | +2.54 | 실측 | [[critpt]] 31.4285714285714%×1.0, [[gpqa-diamond]] 96.2626262626263%×1.0, [[humanitys-last-exam]] 54.587581093605195%×1.0 |
| 코딩 | 70.4 | +1.36 | 실측 | [[scicode]] 55.671296296296305%×1.0 |
| 에이전트 | 71.0 | +1.4 | 실측 | [[gdpval]] 1571.87%×1.0, [[tau3-banking]] 43.0927835051546%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 68.6 | +1.24 | 실측 | [[mmmu-pro]] 86.242774566474%×1.0 |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 67.2 | +1.14 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
