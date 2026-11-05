---
type: Model
title: Claude Fable 5.1 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 43.0
price_blended_usd_1m: 7.175
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 90.3, z: 1.79, r: 76.9, estimated: false }  # 전문 지식
  reasoning: { s: 87.4, z: 1.86, r: 77.9, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.49, r: 72.3, estimated: false }  # 코딩
  agentic: { s: 81.8, z: 1.63, r: 74.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 95.5, z: 1.29, r: 69.4, estimated: false }  # 긴문맥
  instruction: { s: 84.0, z: 1.3, r: 69.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-05
timestamp: 2026-11-05T00:00:00Z
---

# Claude Fable 5.1 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **43.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 6.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.9 | +1.79 | 실측 | [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 54.0%×0.3 |
| 추론 | 77.9 | +1.86 | 실측 | [[critpt]] 59.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 54.0%×1.0 |
| 코딩 | 72.3 | +1.49 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 74.5 | +1.63 | 실측 | [[gdpval]] 1554.0%×1.0, [[tau3-banking]] 41.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.4 | +1.29 | 실측 | [[aa-lcr]] 85.0%×1.0 |
| 지시 따르기 | 69.5 | +1.3 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
