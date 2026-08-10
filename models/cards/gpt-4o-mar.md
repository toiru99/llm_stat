---
type: Model
title: GPT-4o (Mar)
creator: OpenAI
license: Proprietary
intelligence_index: 12.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.8, z: -0.04, r: 49.3, estimated: false }  # 전문 지식
  reasoning: { s: 35.5, z: 0.03, r: 50.5, estimated: false }  # 추론
  coding: { s: 61.7, z: 0.6, r: 58.9, estimated: false }  # 코딩
  agentic: { s: 39.5, z: 0.15, r: 52.2, estimated: true }  # 에이전트
  trust: { s: 49.7, z: 1.07, r: 66.1, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 57.3, z: 0.25, r: 53.7, estimated: true }  # 긴문맥
  instruction: { s: 61.8, z: 0.34, r: 55.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (Mar)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-10
timestamp: 2026-08-10T00:00:00Z
---

# GPT-4o (Mar)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.3 | -0.04 | 실측 | [[gpqa-diamond]] 65.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 50.5 | +0.03 | 실측 | [[gpqa-diamond]] 65.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 58.9 | +0.6 | 실측 | [[scicode]] 37.0%×1.0 |
| 에이전트 | 52.2 | +0.15 | 추정 | (추정) |
| 신뢰성 | 66.1 | +1.07 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.7 | +0.25 | 추정 | (추정) |
| 지시 따르기 | 55.1 | +0.34 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
