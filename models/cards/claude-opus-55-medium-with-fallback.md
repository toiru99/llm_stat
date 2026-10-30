---
type: Model
title: Claude Opus 5.5 (medium with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 48.0
price_blended_usd_1m: 2.94
output_speed_tps: 79.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 90.0, z: 1.79, r: 76.8, estimated: false }  # 전문 지식
  reasoning: { s: 81.8, z: 1.63, r: 74.5, estimated: false }  # 추론
  coding: { s: 86.7, z: 1.66, r: 74.9, estimated: false }  # 코딩
  agentic: { s: 85.4, z: 1.76, r: 76.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 97.3, z: 1.25, r: 68.8, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.26, r: 69.0, estimated: false }  # 긴문맥
  instruction: { s: 82.4, z: 1.24, r: 68.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (medium with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# Claude Opus 5.5 (medium with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **48.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 79.0 t/s · TTFT 12.68s · 1M ctx` · 가성비 16.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.8 | +1.79 | 실측 | [[humanitys-last-exam]] 55.0%×0.3 |
| 추론 | 74.5 | +1.63 | 실측 | [[critpt]] 53.0%×1.0, [[humanitys-last-exam]] 55.0%×1.0 |
| 코딩 | 74.9 | +1.66 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 76.4 | +1.76 | 실측 | [[gdpval]] 1593.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 68.8 | +1.25 | 실측 | [[mmmu-pro]] 86.0%×1.0 |
| 긴문맥 | 69.0 | +1.26 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 68.6 | +1.24 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
