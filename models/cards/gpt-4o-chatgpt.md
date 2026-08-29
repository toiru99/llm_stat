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
  knowledge: { s: 29.2, z: -0.57, r: 41.4, estimated: false }  # 전문 지식
  reasoning: { s: 26.0, z: -0.43, r: 43.5, estimated: false }  # 추론
  coding: { s: 55.0, z: 0.31, r: 54.7, estimated: false }  # 코딩
  agentic: { s: 39.2, z: 0.09, r: 51.4, estimated: true }  # 에이전트
  trust: { s: 50.1, z: 1.24, r: 68.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 66.3, z: 0.52, r: 57.8, estimated: false }  # 긴문맥
  instruction: { s: 57.2, z: 0.2, r: 53.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (ChatGPT)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
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
| 전문 지식 | 41.4 | -0.57 | 실측 | [[gpqa-diamond]] 51.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 43.5 | -0.43 | 실측 | [[gpqa-diamond]] 51.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 54.7 | +0.31 | 실측 | [[scicode]] 33.0%×1.0 |
| 에이전트 | 51.4 | +0.09 | 추정 | (추정) |
| 신뢰성 | 68.6 | +1.24 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.8 | +0.52 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 53.1 | +0.2 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
