---
type: Model
title: GPT-6 Sol (low)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 92.813176217533
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.3, z: -0.02, r: 49.6, estimated: false }  # 전문 지식
  reasoning: { s: 45.9, z: 0.54, r: 58.0, estimated: false }  # 추론
  coding: { s: 71.2, z: 1.02, r: 65.3, estimated: false }  # 코딩
  agentic: { s: 70.6, z: 0.83, r: 62.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.6, z: 0.83, r: 62.4, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 0.97, r: 64.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GPT-6 Sol (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 92.813176217533 t/s · TTFT 1.97124366629723s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 49.6 | -0.02 | 실측 | [[humanitys-last-exam]] 34.9398%×0.3 |
| 추론 | 58.0 | +0.54 | 실측 | [[critpt]] 16.2857%×1.0, [[humanitys-last-exam]] 34.9398%×1.0 |
| 코딩 | 65.3 | +1.02 | 실측 | [[scicode]] 50.2315%×1.0 |
| 에이전트 | 62.4 | +0.83 | 실측 | [[gdpval]] 1199.62 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.4 | +0.83 | 실측 | [[mmmu-pro]] 80.1734%×1.0 |
| 긴문맥 | 64.6 | +0.97 | 실측 | [[aa-lcr]] 79.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
