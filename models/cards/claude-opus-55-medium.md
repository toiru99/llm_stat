---
type: Model
title: Claude Opus 5.5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 48.2081024960691
price_blended_usd_1m: 2.94
output_speed_tps: 106.001848821747
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.3, z: 1.25, r: 68.8, estimated: false }  # 전문 지식
  reasoning: { s: 75.4, z: 1.97, r: 79.5, estimated: false }  # 추론
  coding: { s: 86.1, z: 1.56, r: 73.5, estimated: false }  # 코딩
  agentic: { s: 87.8, z: 1.49, r: 72.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 95.0, z: 1.2, r: 68.1, estimated: false }  # 멀티모달
  long_context: { s: 95.1, z: 1.23, r: 68.5, estimated: false }  # 긴문맥
  instruction: { s: 81.9, z: 1.17, r: 67.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Claude Opus 5.5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **48.2081024960691**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 106.001848821747 t/s · TTFT 14.7793983595606s · 1M ctx` · 가성비 16.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.8 | +1.25 | 실측 | [[humanitys-last-exam]] 54.72659870250231%×0.3 |
| 추론 | 79.5 | +1.97 | 실측 | [[critpt]] 27.7142857142857%×1.0, [[humanitys-last-exam]] 54.72659870250231%×1.0 |
| 코딩 | 73.5 | +1.56 | 실측 | [[scicode]] 59.2592592592593%×1.0 |
| 에이전트 | 72.3 | +1.49 | 실측 | [[gdpval]] 1590.15%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 68.1 | +1.2 | 실측 | [[mmmu-pro]] 85.72254335260119%×1.0 |
| 긴문맥 | 68.5 | +1.23 | 실측 | [[aa-lcr]] 84.3333333333333%×1.0 |
| 지시 따르기 | 67.6 | +1.17 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
