---
type: Model
title: Grok 4.7 (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 1.35
output_speed_tps: None
context_window: 500000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.3, z: 0.45, r: 56.8, estimated: false }  # 전문 지식
  reasoning: { s: 52.3, z: 0.45, r: 56.8, estimated: false }  # 추론
  coding: { s: 83.7, z: 1.54, r: 73.2, estimated: false }  # 코딩
  agentic: { s: 92.0, z: 1.94, r: 79.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.8, z: 1.01, r: 65.2, estimated: false }  # 긴문맥
  instruction: { s: 59.1, z: 0.27, r: 54.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.7 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# Grok 4.7 (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · None t/s · TTFT Nones · 500k ctx` · 가성비 25.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.8 | +0.45 | 실측 | [[humanitys-last-exam]] 42.3%×0.3 |
| 추론 | 56.8 | +0.45 | 실측 | [[critpt]] 37.0%×1.0, [[humanitys-last-exam]] 42.3%×1.0 |
| 코딩 | 73.2 | +1.54 | 실측 | [[scicode]] 57.8%×1.0 |
| 에이전트 | 79.1 | +1.94 | 실측 | [[gdpval]] 1716.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.2 | +1.01 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 54.1 | +0.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
