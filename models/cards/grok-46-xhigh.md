---
type: Model
title: Grok 4.6 (xhigh)
creator: SpaceXAI
license: Proprietary
intelligence_index: 49.0
price_blended_usd_1m: 1.35
output_speed_tps: 64.0
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.8, z: 1.59, r: 73.8, estimated: false }  # 전문 지식
  reasoning: { s: 78.1, z: 2.07, r: 81.1, estimated: false }  # 추론
  coding: { s: 79.6, z: 1.67, r: 75.0, estimated: false }  # 코딩
  agentic: { s: 87.4, z: 1.91, r: 78.6, estimated: false }  # 에이전트
  trust: { s: 76.3, z: 2.45, r: 86.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.29, r: 69.3, estimated: false }  # 긴문맥
  instruction: { s: 76.6, z: 1.0, r: 65.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.6 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Grok 4.6 (xhigh)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **49.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 64.0 t/s · TTFT 57.19s · 500k ctx` · 가성비 36.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.8 | +1.59 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 44.0%×0.3 |
| 추론 | 81.1 | +2.07 | 실측 | [[critpt]] 20.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 44.0%×1.0 |
| 코딩 | 75.0 | +1.67 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 78.6 | +1.91 | 실측 | [[gdpval]] 58.0%×1.0, [[tau3-banking]] 43.0%×1.0 |
| 신뢰성 | 86.8 | +2.45 | 실측 | [[aa-omniscience]] 76.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.3 | +1.29 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 65.1 | +1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
