---
type: Model
title: GPT-4 Turbo
creator: OpenAI
license: Proprietary
intelligence_index: 8.0
price_blended_usd_1m: None
output_speed_tps: 32.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 3.8, z: -1.77, r: 23.5, estimated: false }  # 전문 지식
  reasoning: { s: 3.8, z: -1.56, r: 26.6, estimated: false }  # 추론
  coding: { s: 53.3, z: 0.29, r: 54.3, estimated: false }  # 코딩
  agentic: { s: 19.0, z: -0.67, r: 39.9, estimated: true }  # 에이전트
  trust: { s: 43.4, z: 0.77, r: 61.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 30.8, z: -0.55, r: 41.8, estimated: true }  # 긴문맥
  instruction: { s: 32.4, z: -0.85, r: 37.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4 Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-23
timestamp: 2026-07-23T00:00:00Z
---

# GPT-4 Turbo

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $10.0 · 출력 $30.0 · 혼합 $None/1M · 32.0 t/s · TTFT 3.1s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 23.5 | -1.77 | 실측 | [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 26.6 | -1.56 | 실측 | [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 54.3 | +0.29 | 실측 | [[scicode]] 32.0%×1.0 |
| 에이전트 | 39.9 | -0.67 | 추정 | (추정) |
| 신뢰성 | 61.5 | +0.77 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 41.8 | -0.55 | 추정 | (추정) |
| 지시 따르기 | 37.3 | -0.85 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
