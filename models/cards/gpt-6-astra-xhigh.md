---
type: Model
title: GPT-6 Astra (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 55.3057468569681
price_blended_usd_1m: 7.7
output_speed_tps: 47.6506200977823
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.5, z: 2.03, r: 80.4, estimated: false }  # 전문 지식
  reasoning: { s: 87.0, z: 2.58, r: 88.7, estimated: false }  # 추론
  coding: { s: 80.2, z: 1.32, r: 69.8, estimated: false }  # 코딩
  agentic: { s: 85.4, z: 1.35, r: 70.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 95.7, z: 1.24, r: 68.6, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 0.99, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-6 Astra (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **55.3057468569681** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 47.6506200977823 t/s · TTFT 86.1491529194639s · 1M ctx` · 가성비 7.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 80.4 | +2.03 | 실측 | [[gpqa-diamond]] 96.2626%×0.4, [[humanitys-last-exam]] 54.5876%×0.3 |
| 추론 | 88.7 | +2.58 | 실측 | [[critpt]] 31.4286%×1.0, [[gpqa-diamond]] 96.2626%×1.0, [[humanitys-last-exam]] 54.5876%×1.0 |
| 코딩 | 69.8 | +1.32 | 실측 | [[scicode]] 55.6713%×1.0 |
| 에이전트 | 70.3 | +1.35 | 실측 | [[gdpval]] 1571.28 Elo×1.0, [[tau3-banking]] 43.0928%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 68.6 | +1.24 | 실측 | [[mmmu-pro]] 86.2428%×1.0 |
| 긴문맥 | 64.9 | +0.99 | 실측 | [[aa-lcr]] 80%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
