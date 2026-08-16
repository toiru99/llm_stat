---
type: Model
title: GPT-4 Turbo
creator: OpenAI
license: Proprietary
intelligence_index: 8.0
price_blended_usd_1m: 12
output_speed_tps: 32.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 3.7, z: -1.78, r: 23.3, estimated: false }  # 전문 지식
  reasoning: { s: 3.7, z: -1.55, r: 26.8, estimated: false }  # 추론
  coding: { s: 53.3, z: 0.21, r: 53.2, estimated: false }  # 코딩
  agentic: { s: 18.3, z: -0.72, r: 39.2, estimated: true }  # 에이전트
  trust: { s: 32.1, z: 0.22, r: 53.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 21.0, z: -0.89, r: 36.7, estimated: true }  # 긴문맥
  instruction: { s: 27.9, z: -1.07, r: 33.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4 Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-16
timestamp: 2026-08-16T00:00:00Z
---

# GPT-4 Turbo

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $10.0 · 출력 $30.0 · 혼합 $12/1M · 32.0 t/s · TTFT 3.11s · 128k ctx` · 가성비 0.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 23.3 | -1.78 | 실측 | [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 26.8 | -1.55 | 실측 | [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 53.2 | +0.21 | 실측 | [[scicode]] 32.0%×1.0 |
| 에이전트 | 39.2 | -0.72 | 추정 | (추정) |
| 신뢰성 | 53.3 | +0.22 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.7 | -0.89 | 추정 | (추정) |
| 지시 따르기 | 33.9 | -1.07 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
