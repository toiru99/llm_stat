---
type: Model
title: Grok 4.6 (xhigh)
creator: SpaceXAI
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: 1.35
output_speed_tps: 60.0
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.4, z: 1.5, r: 72.5, estimated: false }  # 전문 지식
  reasoning: { s: 77.3, z: 1.96, r: 79.4, estimated: false }  # 추론
  coding: { s: 76.7, z: 1.44, r: 71.7, estimated: false }  # 코딩
  agentic: { s: 84.7, z: 1.8, r: 77.1, estimated: false }  # 에이전트
  trust: { s: 76.3, z: 2.37, r: 85.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.23, r: 68.5, estimated: false }  # 긴문맥
  instruction: { s: 78.3, z: 1.03, r: 65.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.6 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# Grok 4.6 (xhigh)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **44.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 60.0 t/s · TTFT 51.44s · 500k ctx` · 가성비 32.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.5 | +1.5 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 44.0%×0.3 |
| 추론 | 79.4 | +1.96 | 실측 | [[critpt]] 20.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 44.0%×1.0 |
| 코딩 | 71.7 | +1.44 | 실측 | [[scicode]] 53.0%×1.0 |
| 에이전트 | 77.1 | +1.8 | 실측 | [[gdpval]] 57.0%×1.0, [[tau3-banking]] 43.0%×1.0 |
| 신뢰성 | 85.5 | +2.37 | 실측 | [[aa-omniscience]] 76.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.5 | +1.23 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 65.4 | +1.03 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
