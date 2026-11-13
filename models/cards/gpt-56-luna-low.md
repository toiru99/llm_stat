---
type: Model
title: GPT-5.6 Luna (low)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.174
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.6, z: 0.6, r: 59.0, estimated: false }  # 전문 지식
  reasoning: { s: 55.4, z: 0.59, r: 58.8, estimated: false }  # 추론
  coding: { s: 64.5, z: 0.89, r: 63.3, estimated: false }  # 코딩
  agentic: { s: 39.2, z: 0.14, r: 52.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.7, z: 0.42, r: 56.3, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.77, r: 61.6, estimated: false }  # 긴문맥
  instruction: { s: 72.6, z: 0.84, r: 62.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# GPT-5.6 Luna (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.0 | +0.6 | 실측 | [[gpqa-diamond]] 83.5%×0.4, [[humanitys-last-exam]] 19.8%×0.3 |
| 추론 | 58.8 | +0.59 | 실측 | [[gpqa-diamond]] 83.5%×1.0, [[humanitys-last-exam]] 19.8%×1.0 |
| 코딩 | 63.3 | +0.89 | 실측 | [[scicode]] 46.1%×1.0 |
| 에이전트 | 52.1 | +0.14 | 실측 | [[gdpval]] 1002.0%×1.0, [[tau3-banking]] 12.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.3 | +0.42 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 61.6 | +0.77 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 62.6 | +0.84 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
