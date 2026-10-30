---
type: Model
title: GPT-6 Sol (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 99.0
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.3, z: -0.93, r: 36.0, estimated: false }  # 전문 지식
  reasoning: { s: 28.3, z: -0.78, r: 38.2, estimated: false }  # 추론
  coding: { s: 66.7, z: 0.99, r: 64.9, estimated: false }  # 코딩
  agentic: { s: 67.2, z: 1.13, r: 67.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 75.3, z: 0.16, r: 52.4, estimated: false }  # 멀티모달
  long_context: { s: 71.9, z: 0.59, r: 58.9, estimated: false }  # 긴문맥
  instruction: { s: 44.5, z: -0.35, r: 44.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# GPT-6 Sol (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 99.0 t/s · TTFT 1.04s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.0 | -0.93 | 실측 | [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 38.2 | -0.78 | 실측 | [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 64.9 | +0.99 | 실측 | [[scicode]] 47.0%×1.0 |
| 에이전트 | 67.0 | +1.13 | 실측 | [[gdpval]] 1254.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.4 | +0.16 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 58.9 | +0.59 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 44.8 | -0.35 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
