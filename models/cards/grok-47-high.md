---
type: Model
title: Grok 4.7 (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: 46.0
price_blended_usd_1m: 1.35
output_speed_tps: 78.0
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.9, z: 1.31, r: 69.6, estimated: false }  # 전문 지식
  reasoning: { s: 62.3, z: 1.17, r: 67.6, estimated: false }  # 추론
  coding: { s: 85.0, z: 1.66, r: 74.9, estimated: false }  # 코딩
  agentic: { s: 89.6, z: 1.94, r: 79.1, estimated: false }  # 에이전트
  trust: { s: 68.0, z: 1.93, r: 78.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.05, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 75.0, z: 0.86, r: 62.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.7 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-03
timestamp: 2026-10-03T00:00:00Z
---

# Grok 4.7 (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **46.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 78.0 t/s · TTFT 33.12s · 500k ctx` · 가성비 34.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.6 | +1.31 | 실측 | [[aa-omniscience]] 48.0%×1.0, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 67.6 | +1.17 | 실측 | [[critpt]] 18.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 74.9 | +1.66 | 실측 | [[scicode]] 58.0%×1.0 |
| 에이전트 | 79.1 | +1.94 | 실측 | [[gdpval]] 60.0%×1.0 |
| 신뢰성 | 78.9 | +1.93 | 실측 | [[aa-omniscience]] 68.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.8 | +1.05 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 62.9 | +0.86 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
