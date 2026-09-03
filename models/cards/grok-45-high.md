---
type: Model
title: Grok 4.5 (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: 56.0
price_blended_usd_1m: 1.21
output_speed_tps: 54.0
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 81.4, z: 2.01, r: 80.1, estimated: false }  # 전문 지식
  reasoning: { s: 72.3, z: 1.86, r: 77.8, estimated: false }  # 추론
  coding: { s: 87.1, z: 1.68, r: 75.2, estimated: false }  # 코딩
  agentic: { s: 77.9, z: 1.57, r: 73.5, estimated: false }  # 에이전트
  trust: { s: 45.4, z: 0.98, r: 64.7, estimated: false }  # 신뢰성
  multimodal: { s: 91.5, z: 1.04, r: 65.6, estimated: false }  # 멀티모달
  long_context: { s: 89.2, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 76.3, z: 0.98, r: 64.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Grok 4.5 (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **56.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.21/1M · 54.0 t/s · TTFT 8.57s · 500k ctx` · 가성비 46.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.1 | +2.01 | 실측 | [[aa-omniscience]] 52.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 77.8 | +1.86 | 실측 | [[critpt]] 15.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 75.2 | +1.68 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 73.5 | +1.57 | 실측 | [[gdpval]] 51.0%×1.0, [[tau3-banking]] 42.0%×1.0 |
| 신뢰성 | 64.7 | +0.98 | 실측 | [[aa-omniscience]] 46.0%×1.0 |
| 멀티모달 | 65.6 | +1.04 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 64.6 | +0.98 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
