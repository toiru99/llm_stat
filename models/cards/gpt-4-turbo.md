---
type: Model
title: GPT-4 Turbo
creator: OpenAI
license: Proprietary
intelligence_index: 8.0
price_blended_usd_1m: 12
output_speed_tps: 33.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 3.4, z: -1.83, r: 22.5, estimated: false }  # 전문 지식
  reasoning: { s: 3.4, z: -1.55, r: 26.8, estimated: false }  # 추론
  coding: { s: 51.6, z: 0.19, r: 52.9, estimated: false }  # 코딩
  agentic: { s: 18.6, z: -0.73, r: 39.0, estimated: true }  # 에이전트
  trust: { s: 30.7, z: 0.29, r: 54.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 25.5, z: -0.75, r: 38.7, estimated: true }  # 긴문맥
  instruction: { s: 29.3, z: -0.99, r: 35.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4 Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# GPT-4 Turbo

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $10.0 · 출력 $30.0 · 혼합 $12/1M · 33.0 t/s · TTFT 2.62s · 128k ctx` · 가성비 0.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 22.5 | -1.83 | 실측 | [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 26.8 | -1.55 | 실측 | [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 52.9 | +0.19 | 실측 | [[scicode]] 32.0%×1.0 |
| 에이전트 | 39.0 | -0.73 | 추정 | (추정) |
| 신뢰성 | 54.3 | +0.29 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.7 | -0.75 | 추정 | (추정) |
| 지시 따르기 | 35.2 | -0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
