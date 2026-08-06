---
type: Model
title: GPT-4o (ChatGPT)
creator: OpenAI
license: Proprietary
intelligence_index: 8.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.4, z: -0.52, r: 42.2, estimated: false }  # 전문 지식
  reasoning: { s: 27.3, z: -0.37, r: 44.4, estimated: false }  # 추론
  coding: { s: 55.0, z: 0.32, r: 54.8, estimated: false }  # 코딩
  agentic: { s: 43.3, z: 0.3, r: 54.5, estimated: true }  # 에이전트
  trust: { s: 45.1, z: 0.75, r: 61.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 69.7, z: 0.59, r: 58.9, estimated: false }  # 긴문맥
  instruction: { s: 55.1, z: 0.07, r: 51.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (ChatGPT)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# GPT-4o (ChatGPT)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.2 | -0.52 | 실측 | [[gpqa-diamond]] 51.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 44.4 | -0.37 | 실측 | [[gpqa-diamond]] 51.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 54.8 | +0.32 | 실측 | [[scicode]] 33.0%×1.0 |
| 에이전트 | 54.5 | +0.3 | 추정 | (추정) |
| 신뢰성 | 61.2 | +0.75 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.9 | +0.59 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 51.1 | +0.07 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
