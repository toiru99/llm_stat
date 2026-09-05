---
type: Model
title: Claude Fable 5.1 (medium with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 50.0
price_blended_usd_1m: 7.175
output_speed_tps: 58.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 93.1, z: 2.51, r: 87.7, estimated: false }  # 전문 지식
  reasoning: { s: 91.3, z: 2.71, r: 90.6, estimated: false }  # 추론
  coding: { s: 85.7, z: 1.88, r: 78.3, estimated: false }  # 코딩
  agentic: { s: 82.3, z: 1.71, r: 75.7, estimated: false }  # 에이전트
  trust: { s: 29.9, z: 0.26, r: 53.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 95.5, z: 1.43, r: 71.4, estimated: false }  # 긴문맥
  instruction: { s: 75.7, z: 0.97, r: 64.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (medium with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Claude Fable 5.1 (medium with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 58.0 t/s · TTFT 18.18s · 1M ctx` · 가성비 7.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 87.7 | +2.51 | 실측 | [[aa-omniscience]] 63.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 54.0%×0.3 |
| 추론 | 90.6 | +2.71 | 실측 | [[critpt]] 29.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 54.0%×1.0 |
| 코딩 | 78.3 | +1.88 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 75.7 | +1.71 | 실측 | [[gdpval]] 54.0%×1.0, [[tau3-banking]] 41.0%×1.0 |
| 신뢰성 | 53.9 | +0.26 | 실측 | [[aa-omniscience]] 31.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 71.4 | +1.43 | 실측 | [[aa-lcr]] 85.0%×1.0 |
| 지시 따르기 | 64.5 | +0.97 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
