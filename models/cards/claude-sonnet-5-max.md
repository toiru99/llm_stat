---
type: Model
title: Claude Sonnet 5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 53.0
price_blended_usd_1m: 1.54
output_speed_tps: 76.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 72.2, z: 1.54, r: 73.1, estimated: false }  # 전문 지식
  reasoning: { s: 74.9, z: 2.19, r: 82.8, estimated: false }  # 추론
  coding: { s: 90.0, z: 1.86, r: 77.9, estimated: false }  # 코딩
  agentic: { s: 86.1, z: 1.95, r: 79.2, estimated: false }  # 에이전트
  trust: { s: 72.9, z: 2.13, r: 82.0, estimated: false }  # 신뢰성
  multimodal: { s: 89.9, z: 0.88, r: 63.2, estimated: false }  # 멀티모달
  long_context: { s: 93.4, z: 1.33, r: 70.0, estimated: false }  # 긴문맥
  instruction: { s: 71.5, z: 0.8, r: 62.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-14
timestamp: 2026-07-14T00:00:00Z
---

# Claude Sonnet 5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **53.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 신뢰성
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 76.0 t/s · TTFT 226.65s · 1M ctx` · 가성비 34.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.1 | +1.54 | 실측 | [[aa-omniscience]] 38.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 82.8 | +2.19 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 77.9 | +1.86 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 79.2 | +1.95 | 실측 | [[gdpval]] 55.0%×1.0, [[tau3-banking]] 28.0%×1.0 |
| 신뢰성 | 82.0 | +2.13 | 실측 | [[aa-omniscience]] 63.0%×1.0 |
| 멀티모달 | 63.2 | +0.88 | 실측 | [[mmmu-pro]] 77.0%×1.0 |
| 긴문맥 | 70.0 | +1.33 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 62.0 | +0.8 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
