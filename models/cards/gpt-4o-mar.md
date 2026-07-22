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
  knowledge: { s: 40.7, z: 0.0, r: 50.0, estimated: false }  # 전문 지식
  reasoning: { s: 36.6, z: 0.15, r: 52.2, estimated: false }  # 추론
  coding: { s: 61.7, z: 0.64, r: 59.6, estimated: false }  # 코딩
  agentic: { s: 44.9, z: 0.33, r: 55.0, estimated: true }  # 에이전트
  trust: { s: 32.8, z: 0.23, r: 53.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 63.8, z: 0.44, r: 56.6, estimated: true }  # 긴문맥
  instruction: { s: 51.0, z: -0.08, r: 48.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (Mar)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-22
timestamp: 2026-07-22T00:00:00Z
---

# GPT-4o (Mar)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.0 | +0.0 | 실측 | [[gpqa-diamond]] 65.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 52.2 | +0.15 | 실측 | [[gpqa-diamond]] 65.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 59.6 | +0.64 | 실측 | [[scicode]] 37.0%×1.0 |
| 에이전트 | 55.0 | +0.33 | 추정 | (추정) |
| 신뢰성 | 53.5 | +0.23 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.6 | +0.44 | 추정 | (추정) |
| 지시 따르기 | 48.9 | -0.08 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
