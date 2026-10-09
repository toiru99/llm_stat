---
type: Model
title: Claude Opus 5.5 (medium with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 51.0
price_blended_usd_1m: 2.94
output_speed_tps: 76.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 95.4, z: 2.45, r: 86.7, estimated: false }  # 전문 지식
  reasoning: { s: 88.8, z: 2.37, r: 85.5, estimated: false }  # 추론
  coding: { s: 86.7, z: 1.7, r: 75.5, estimated: false }  # 코딩
  agentic: { s: 79.4, z: 1.54, r: 73.1, estimated: false }  # 에이전트
  trust: { s: 30.9, z: 0.19, r: 52.9, estimated: false }  # 신뢰성
  multimodal: { s: 97.3, z: 1.29, r: 69.4, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.28, r: 69.2, estimated: false }  # 긴문맥
  instruction: { s: 76.0, z: 0.9, r: 63.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (medium with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# Claude Opus 5.5 (medium with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **51.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 76.0 t/s · TTFT 21.66s · 1M ctx` · 가성비 17.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 86.7 | +2.45 | 실측 | [[aa-omniscience]] 65.0%×1.0, [[humanitys-last-exam]] 55.0%×0.3 |
| 추론 | 85.5 | +2.37 | 실측 | [[critpt]] 28.0%×1.0, [[humanitys-last-exam]] 55.0%×1.0 |
| 코딩 | 75.5 | +1.7 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 73.1 | +1.54 | 실측 | [[gdpval]] 54.0%×1.0 |
| 신뢰성 | 52.9 | +0.19 | 실측 | [[aa-omniscience]] 32.0%×1.0 |
| 멀티모달 | 69.4 | +1.29 | 실측 | [[mmmu-pro]] 86.0%×1.0 |
| 긴문맥 | 69.2 | +1.28 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 63.5 | +0.9 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
