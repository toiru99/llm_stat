---
type: Model
title: Grok 4.6 (medium)
creator: SpaceXAI
license: Proprietary
intelligence_index: 59.0
price_blended_usd_1m: 1.35
output_speed_tps: 57.0
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.7, z: 1.69, r: 75.3, estimated: false }  # 전문 지식
  reasoning: { s: 77.0, z: 2.15, r: 82.3, estimated: false }  # 추론
  coding: { s: 91.7, z: 1.85, r: 77.7, estimated: false }  # 코딩
  agentic: { s: 90.1, z: 2.09, r: 81.3, estimated: false }  # 에이전트
  trust: { s: 76.3, z: 2.47, r: 87.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 75.2, z: 0.96, r: 64.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.6 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Grok 4.6 (medium)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **59.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 57.0 t/s · TTFT 34.53s · 500k ctx` · 가성비 43.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.3 | +1.69 | 실측 | [[aa-omniscience]] 42.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 82.3 | +2.15 | 실측 | [[critpt]] 18.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 77.7 | +1.85 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 81.3 | +2.09 | 실측 | [[gdpval]] 62.0%×1.0, [[tau3-banking]] 44.0%×1.0 |
| 신뢰성 | 87.0 | +2.47 | 실측 | [[aa-omniscience]] 76.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 64.4 | +0.96 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
