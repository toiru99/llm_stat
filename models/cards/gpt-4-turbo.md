---
type: Model
title: GPT-4 Turbo
creator: OpenAI
license: Proprietary
intelligence_index: 7.0
price_blended_usd_1m: 12
output_speed_tps: 155.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 3.3, z: -1.84, r: 22.4, estimated: false }  # 전문 지식
  reasoning: { s: 3.3, z: -1.53, r: 27.0, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.28, r: 30.8, estimated: true }  # 코딩
  agentic: { s: 2.1, z: -1.13, r: 33.1, estimated: true }  # 에이전트
  trust: { s: 44.7, z: 0.79, r: 61.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 4.0, z: -1.47, r: 28.0, estimated: true }  # 긴문맥
  instruction: { s: 10.4, z: -1.88, r: 21.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4 Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# GPT-4 Turbo

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $30.0 · 혼합 $12/1M · 155.0 t/s · TTFT 1.63s · 128k ctx` · 가성비 0.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 22.4 | -1.84 | 실측 | [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 27.0 | -1.53 | 실측 | [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 30.8 | -1.28 | 추정 | (추정) |
| 에이전트 | 33.1 | -1.13 | 추정 | (추정) |
| 신뢰성 | 61.9 | +0.79 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.0 | -1.47 | 추정 | (추정) |
| 지시 따르기 | 21.8 | -1.88 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
