---
type: Model
title: GPT-5.6 Terra (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 48.8, z: 0.09, r: 51.4, estimated: false }  # 전문 지식
  reasoning: { s: 44.5, z: 0.06, r: 50.9, estimated: false }  # 추론
  coding: { s: 62.8, z: 0.84, r: 62.6, estimated: false }  # 코딩
  agentic: { s: 44.8, z: 0.34, r: 55.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 70.3, z: -0.06, r: 49.1, estimated: false }  # 멀티모달
  long_context: { s: 66.2, z: 0.39, r: 55.9, estimated: false }  # 긴문맥
  instruction: { s: 48.0, z: -0.21, r: 46.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# GPT-5.6 Terra (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.4 | +0.09 | 실측 | [[gpqa-diamond]] 74.6%×0.4, [[humanitys-last-exam]] 11.4%×0.3 |
| 추론 | 50.9 | +0.06 | 실측 | [[gpqa-diamond]] 74.6%×1.0, [[humanitys-last-exam]] 11.4%×1.0 |
| 코딩 | 62.6 | +0.84 | 실측 | [[scicode]] 45.1%×1.0 |
| 에이전트 | 55.1 | +0.34 | 실측 | [[gdpval]] 1105.0%×1.0, [[tau3-banking]] 15.7%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 49.1 | -0.06 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 55.9 | +0.39 | 실측 | [[aa-lcr]] 58.7%×1.0 |
| 지시 따르기 | 46.9 | -0.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
