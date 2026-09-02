---
type: Model
title: Claude Fable 5.1 (high with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 62.0
price_blended_usd_1m: 7.175
output_speed_tps: 49.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 96.2, z: 2.78, r: 91.8, estimated: false }  # 전문 지식
  reasoning: { s: 94.6, z: 3.02, r: 95.3, estimated: false }  # 추론
  coding: { s: 93.5, z: 1.99, r: 79.8, estimated: false }  # 코딩
  agentic: { s: 87.7, z: 1.97, r: 79.6, estimated: false }  # 에이전트
  trust: { s: 29.9, z: 0.27, r: 54.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.8, z: 1.31, r: 69.7, estimated: false }  # 긴문맥
  instruction: { s: 81.3, z: 1.2, r: 67.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (high with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Claude Fable 5.1 (high with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **62.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 49.0 t/s · TTFT 39.13s · 1M ctx` · 가성비 8.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 91.8 | +2.78 | 실측 | [[aa-omniscience]] 65.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 56.0%×0.3 |
| 추론 | 95.3 | +3.02 | 실측 | [[critpt]] 30.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 56.0%×1.0 |
| 코딩 | 79.8 | +1.99 | 실측 | [[scicode]] 58.0%×1.0 |
| 에이전트 | 79.6 | +1.97 | 실측 | [[gdpval]] 62.0%×1.0, [[tau3-banking]] 43.0%×1.0 |
| 신뢰성 | 54.0 | +0.27 | 실측 | [[aa-omniscience]] 31.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.7 | +1.31 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 67.9 | +1.2 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
