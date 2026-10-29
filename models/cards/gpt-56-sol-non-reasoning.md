---
type: Model
title: GPT-5.6 Sol (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.08
output_speed_tps: 84.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 57.3, z: 0.34, r: 55.1, estimated: false }  # 전문 지식
  reasoning: { s: 53.4, z: 0.35, r: 55.2, estimated: false }  # 추론
  coding: { s: 68.3, z: 1.04, r: 65.6, estimated: false }  # 코딩
  agentic: { s: 53.1, z: 0.65, r: 59.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.1, z: 0.3, r: 54.5, estimated: false }  # 멀티모달
  long_context: { s: 69.7, z: 0.52, r: 57.8, estimated: false }  # 긴문맥
  instruction: { s: 49.6, z: -0.13, r: 48.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# GPT-5.6 Sol (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 84.0 t/s · TTFT 1.1s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.1 | +0.34 | 실측 | [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 55.2 | +0.35 | 실측 | [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 65.6 | +1.04 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 59.7 | +0.65 | 실측 | [[gdpval]] 1250.0%×1.0, [[tau3-banking]] 20.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 54.5 | +0.3 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 57.8 | +0.52 | 실측 | [[aa-lcr]] 62.0%×1.0 |
| 지시 따르기 | 48.0 | -0.13 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
