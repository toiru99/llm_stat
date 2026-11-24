---
type: Model
title: GPT-6 Sol (max)
creator: OpenAI
license: Proprietary
intelligence_index: 44.1555010304265
price_blended_usd_1m: 1.54
output_speed_tps: 123.689146945245
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.0, z: 0.84, r: 62.5, estimated: false }  # 전문 지식
  reasoning: { s: 75.2, z: 1.99, r: 79.8, estimated: false }  # 추론
  coding: { s: 83.4, z: 1.43, r: 71.4, estimated: false }  # 코딩
  agentic: { s: 84.5, z: 1.32, r: 69.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 91.3, z: 1.02, r: 65.2, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-6 Sol (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **44.1555010304265** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 123.689146945245 t/s · TTFT 38.8378249155721s · 1M ctx` · 가성비 28.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 62.5 | +0.84 | 실측 | [[humanitys-last-exam]] 47.9147%×0.3 |
| 추론 | 79.8 | +1.99 | 실측 | [[critpt]] 30.8571%×1.0, [[humanitys-last-exam]] 47.9147%×1.0 |
| 코딩 | 71.4 | +1.43 | 실측 | [[scicode]] 57.6389%×1.0 |
| 에이전트 | 69.8 | +1.32 | 실측 | [[gdpval]] 1513.68 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.2 | +1.02 | 실측 | [[mmmu-pro]] 82.948%×1.0 |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 83.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
