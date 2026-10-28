---
type: Model
title: GPT-6 Sol (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 113.0
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.7, z: 0.98, r: 64.7, estimated: false }  # 전문 지식
  reasoning: { s: 71.7, z: 1.17, r: 67.5, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.44, r: 71.6, estimated: false }  # 코딩
  agentic: { s: 75.2, z: 1.41, r: 71.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 91.8, z: 0.98, r: 64.7, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 76.8, z: 1.0, r: 65.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# GPT-6 Sol (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 113.0 t/s · TTFT 10.04s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.7 | +0.98 | 실측 | [[humanitys-last-exam]] 44.0%×0.3 |
| 추론 | 67.5 | +1.17 | 실측 | [[humanitys-last-exam]] 44.0%×1.0 |
| 코딩 | 71.6 | +1.44 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 71.2 | +1.41 | 실측 | [[gdpval]] 1404.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 64.7 | +0.98 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 65.1 | +1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
