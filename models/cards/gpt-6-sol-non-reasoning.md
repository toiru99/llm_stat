---
type: Model
title: GPT-6 Sol (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 104.39605713163
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 23.7, z: -1.12, r: 33.2, estimated: false }  # 전문 지식
  reasoning: { s: 17.4, z: -0.88, r: 36.8, estimated: false }  # 추론
  coding: { s: 66.5, z: 0.86, r: 62.9, estimated: false }  # 코딩
  agentic: { s: 73.0, z: 0.91, r: 63.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.5, z: 0.16, r: 52.4, estimated: false }  # 멀티모달
  long_context: { s: 72.2, z: 0.44, r: 56.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-6 Sol (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 104.39605713163 t/s · TTFT 1.49859086432503s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 33.2 | -1.12 | 실측 | [[humanitys-last-exam]] 18.3967%×0.3 |
| 추론 | 36.8 | -0.88 | 실측 | [[critpt]] 4%×1.0, [[humanitys-last-exam]] 18.3967%×1.0 |
| 코딩 | 62.9 | +0.86 | 실측 | [[scicode]] 47.338%×1.0 |
| 에이전트 | 63.7 | +0.91 | 실측 | [[gdpval]] 1253.99 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.4 | +0.16 | 실측 | [[mmmu-pro]] 70.3468%×1.0 |
| 긴문맥 | 56.6 | +0.44 | 실측 | [[aa-lcr]] 64%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
