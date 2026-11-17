---
type: Model
title: Grok 4.7 (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: 35.2122962959703
price_blended_usd_1m: 1.35
output_speed_tps: 70.05960711878107
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.3, z: 0.45, r: 56.7, estimated: false }  # 전문 지식
  reasoning: { s: 53.4, z: 0.89, r: 63.4, estimated: false }  # 추론
  coding: { s: 83.6, z: 1.49, r: 72.4, estimated: false }  # 코딩
  agentic: { s: 93.5, z: 1.69, r: 75.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.8, z: 1.0, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: 66.2, z: 0.52, r: 57.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.7 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Grok 4.7 (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **35.2122962959703**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 70.05960711878107 t/s · TTFT 34.7538348237884s · 500k ctx` · 가성비 26.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.7 | +0.45 | 실측 | [[humanitys-last-exam]] 42.3076923076923%×0.3 |
| 추론 | 63.4 | +0.89 | 실측 | [[critpt]] 18.0%×1.0, [[humanitys-last-exam]] 42.3076923076923%×1.0 |
| 코딩 | 72.4 | +1.49 | 실측 | [[scicode]] 57.7546296296296%×1.0 |
| 에이전트 | 75.4 | +1.69 | 실측 | [[gdpval]] 1718.16%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.9 | +1.0 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 57.8 | +0.52 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
