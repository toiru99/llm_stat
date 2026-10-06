---
type: Model
title: Claude Opus 5.5 (medium with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 51.0
price_blended_usd_1m: 2.94
output_speed_tps: 79.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 95.4, z: 2.44, r: 86.6, estimated: false }  # 전문 지식
  reasoning: { s: 88.8, z: 2.37, r: 85.6, estimated: false }  # 추론
  coding: { s: 86.7, z: 1.72, r: 75.8, estimated: false }  # 코딩
  agentic: { s: 79.4, z: 1.55, r: 73.3, estimated: false }  # 에이전트
  trust: { s: 30.9, z: 0.2, r: 53.1, estimated: false }  # 신뢰성
  multimodal: { s: 97.3, z: 1.29, r: 69.4, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.29, r: 69.4, estimated: false }  # 긴문맥
  instruction: { s: 76.3, z: 0.91, r: 63.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (medium with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# Claude Opus 5.5 (medium with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **51.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 79.0 t/s · TTFT 20.64s · 1M ctx` · 가성비 17.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 86.6 | +2.44 | 실측 | [[aa-omniscience]] 65.0%×1.0, [[humanitys-last-exam]] 55.0%×0.3 |
| 추론 | 85.6 | +2.37 | 실측 | [[critpt]] 28.0%×1.0, [[humanitys-last-exam]] 55.0%×1.0 |
| 코딩 | 75.8 | +1.72 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 73.3 | +1.55 | 실측 | [[gdpval]] 54.0%×1.0 |
| 신뢰성 | 53.1 | +0.2 | 실측 | [[aa-omniscience]] 32.0%×1.0 |
| 멀티모달 | 69.4 | +1.29 | 실측 | [[mmmu-pro]] 86.0%×1.0 |
| 긴문맥 | 69.4 | +1.29 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 63.7 | +0.91 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
