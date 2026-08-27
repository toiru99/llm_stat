---
type: Model
title: Grok 4.6 (low)
creator: SpaceXAI
license: Proprietary
intelligence_index: 52.0
price_blended_usd_1m: 1.35
output_speed_tps: 56.0
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.0, z: 1.31, r: 69.7, estimated: false }  # 전문 지식
  reasoning: { s: 53.5, z: 0.86, r: 62.9, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.28, r: 69.1, estimated: false }  # 코딩
  agentic: { s: 76.8, z: 1.52, r: 72.8, estimated: false }  # 에이전트
  trust: { s: 77.9, z: 2.06, r: 80.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 95.2, z: 1.33, r: 69.9, estimated: false }  # 긴문맥
  instruction: { s: 85.2, z: 1.26, r: 68.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.6 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Grok 4.6 (low)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **52.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 56.0 t/s · TTFT 7.24s · 500k ctx` · 가성비 38.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.7 | +1.31 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 62.9 | +0.86 | 실측 | [[critpt]] 6.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 69.1 | +1.28 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 72.8 | +1.52 | 실측 | [[gdpval]] 53.0%×1.0, [[tau3-banking]] 38.0%×1.0 |
| 신뢰성 | 80.9 | +2.06 | 실측 | [[aa-omniscience]] 69.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.9 | +1.33 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 68.8 | +1.26 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
