---
type: Model
title: Grok 4.7 (low)
creator: SpaceXAI
license: Proprietary
intelligence_index: 31.0
price_blended_usd_1m: 1.35
output_speed_tps: None
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.0, z: 0.25, r: 53.7, estimated: false }  # 전문 지식
  reasoning: { s: 54.5, z: 0.55, r: 58.3, estimated: false }  # 추론
  coding: { s: 78.9, z: 1.38, r: 70.8, estimated: false }  # 코딩
  agentic: { s: 85.3, z: 1.71, r: 75.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.1, z: 0.69, r: 60.4, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.11, r: 66.7, estimated: false }  # 긴문맥
  instruction: { s: 56.0, z: 0.14, r: 52.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.7 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Grok 4.7 (low)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **31.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · None t/s · TTFT Nones · 500k ctx` · 가성비 23.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.7 | +0.25 | 실측 | [[humanitys-last-exam]] 39.2%×0.3 |
| 추론 | 58.3 | +0.55 | 실측 | [[critpt]] 43.5%×1.0, [[humanitys-last-exam]] 39.2%×1.0 |
| 코딩 | 70.8 | +1.38 | 실측 | [[scicode]] 54.9%×1.0 |
| 에이전트 | 75.6 | +1.71 | 실측 | [[gdpval]] 1591.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.4 | +0.69 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 66.7 | +1.11 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 52.1 | +0.14 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
