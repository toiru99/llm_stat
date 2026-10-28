---
type: Model
title: Claude Fable 5.1 (max with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 49.0
price_blended_usd_1m: 7.175
output_speed_tps: 66.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 97.2, z: 2.11, r: 81.6, estimated: false }  # 전문 지식
  reasoning: { s: 88.4, z: 1.93, r: 78.9, estimated: false }  # 추론
  coding: { s: 93.3, z: 1.89, r: 78.3, estimated: false }  # 코딩
  agentic: { s: 91.9, z: 1.99, r: 79.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 95.5, z: 1.3, r: 69.4, estimated: false }  # 긴문맥
  instruction: { s: 80.8, z: 1.17, r: 67.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (max with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Claude Fable 5.1 (max with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **49.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 66.0 t/s · TTFT 132.23s · 1M ctx` · 가성비 6.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 81.6 | +2.11 | 실측 | [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 59.0%×0.3 |
| 추론 | 78.9 | +1.93 | 실측 | [[critpt]] 51.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 59.0%×1.0 |
| 코딩 | 78.3 | +1.89 | 실측 | [[scicode]] 63.0%×1.0 |
| 에이전트 | 79.8 | +1.99 | 실측 | [[gdpval]] 1764.0%×1.0, [[itbench]] 50.0%×1.0, [[tau3-banking]] 47.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.4 | +1.3 | 실측 | [[aa-lcr]] 85.0%×1.0 |
| 지시 따르기 | 67.6 | +1.17 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
