---
type: Model
title: GPT-4o (Mar)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.5, z: -0.43, r: 43.6, estimated: false }  # 전문 지식
  reasoning: { s: 34.2, z: -0.07, r: 48.9, estimated: false }  # 추론
  coding: { s: 69.3, z: 0.99, r: 64.9, estimated: true }  # 코딩
  agentic: { s: 66.8, z: 0.76, r: 61.3, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 56.4, z: 0.08, r: 51.2, estimated: true }  # 긴문맥
  instruction: { s: 49.6, z: -0.18, r: 47.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (Mar)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# GPT-4o (Mar)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.6 | -0.43 | 실측 | [[gpqa-diamond]] 65.4545454545455%×0.4, [[humanitys-last-exam]] 3.9699999999999998%×0.3 |
| 추론 | 48.9 | -0.07 | 실측 | [[gpqa-diamond]] 65.4545454545455%×1.0, [[humanitys-last-exam]] 3.9699999999999998%×1.0 |
| 코딩 | 64.9 | +0.99 | 추정 | (추정) |
| 에이전트 | 61.3 | +0.76 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 51.2 | +0.08 | 추정 | (추정) |
| 지시 따르기 | 47.3 | -0.18 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
