---
type: Model
title: GPT-6 Sol (low)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 110.0
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.7, z: 0.32, r: 54.8, estimated: false }  # 전문 지식
  reasoning: { s: 56.7, z: 0.49, r: 57.4, estimated: false }  # 추론
  coding: { s: 71.7, z: 1.16, r: 67.4, estimated: false }  # 코딩
  agentic: { s: 64.4, z: 1.04, r: 65.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 89.0, z: 0.84, r: 62.7, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.09, r: 66.4, estimated: false }  # 긴문맥
  instruction: { s: 52.1, z: -0.03, r: 49.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# GPT-6 Sol (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 110.0 t/s · TTFT 1.59s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.8 | +0.32 | 실측 | [[humanitys-last-exam]] 35.0%×0.3 |
| 추론 | 57.4 | +0.49 | 실측 | [[humanitys-last-exam]] 35.0%×1.0 |
| 코딩 | 67.4 | +1.16 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 65.6 | +1.04 | 실측 | [[gdpval]] 1202.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.7 | +0.84 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 66.4 | +1.09 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 49.6 | -0.03 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
