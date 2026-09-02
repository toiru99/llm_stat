---
type: Model
title: Grok 4.6 (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: 61.0
price_blended_usd_1m: 1.35
output_speed_tps: 53.0
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.5, z: 1.9, r: 78.5, estimated: false }  # 전문 지식
  reasoning: { s: 75.2, z: 2.04, r: 80.6, estimated: false }  # 추론
  coding: { s: 87.1, z: 1.71, r: 75.7, estimated: false }  # 코딩
  agentic: { s: 94.9, z: 2.25, r: 83.8, estimated: false }  # 에이전트
  trust: { s: 66.0, z: 1.98, r: 79.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.4, z: 1.24, r: 68.6, estimated: false }  # 긴문맥
  instruction: { s: 73.6, z: 0.87, r: 63.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.6 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Grok 4.6 (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **61.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 53.0 t/s · TTFT 44.74s · 500k ctx` · 가성비 45.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.5 | +1.9 | 실측 | [[aa-omniscience]] 48.0%×1.0, [[gpqa-diamond]] 95.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 80.6 | +2.04 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 95.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 75.7 | +1.71 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 83.8 | +2.25 | 실측 | [[gdpval]] 61.0%×1.0, [[tau3-banking]] 51.0%×1.0 |
| 신뢰성 | 79.8 | +1.98 | 실측 | [[aa-omniscience]] 66.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.6 | +1.24 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 63.1 | +0.87 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
