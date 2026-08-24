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
  knowledge: { s: 3.7, z: -1.79, r: 23.2, estimated: false }  # 전문 지식
  reasoning: { s: 3.7, z: -1.55, r: 26.7, estimated: false }  # 추론
  coding: { s: 53.3, z: 0.19, r: 52.9, estimated: false }  # 코딩
  agentic: { s: 18.3, z: -0.73, r: 39.0, estimated: true }  # 에이전트
  trust: { s: 32.1, z: 0.17, r: 52.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 21.0, z: -0.9, r: 36.6, estimated: true }  # 긴문맥
  instruction: { s: 27.9, z: -1.08, r: 33.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4 Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# GPT-4 Turbo

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $10.0 · 출력 $30.0 · 혼합 $12/1M · 32.0 t/s · TTFT 3.9s · 128k ctx` · 가성비 0.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 23.2 | -1.79 | 실측 | [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 26.7 | -1.55 | 실측 | [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 52.9 | +0.19 | 실측 | [[scicode]] 32.0%×1.0 |
| 에이전트 | 39.0 | -0.73 | 추정 | (추정) |
| 신뢰성 | 52.6 | +0.17 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.6 | -0.9 | 추정 | (추정) |
| 지시 따르기 | 33.8 | -1.08 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
