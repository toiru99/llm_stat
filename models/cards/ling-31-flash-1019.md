---
type: Model
title: Ling 3.1 Flash 1019
creator: InclusionAI
license: Open
intelligence_index: 30.0
price_blended_usd_1m: 0.192
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.9, z: 0.53, r: 58.0, estimated: false }  # 전문 지식
  reasoning: { s: 54.1, z: 0.53, r: 58.0, estimated: false }  # 추론
  coding: { s: 82.1, z: 1.49, r: 72.3, estimated: false }  # 코딩
  agentic: { s: 88.6, z: 1.82, r: 77.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.8, z: 1.19, r: 67.9, estimated: false }  # 긴문맥
  instruction: { s: 57.6, z: 0.21, r: 53.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.1 Flash 1019
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Ling 3.1 Flash 1019

InclusionAI · Open · Large · 컨텍스트 1M · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.192/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 156.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.0 | +0.53 | 실측 | [[humanitys-last-exam]] 43.5%×0.3 |
| 추론 | 58.0 | +0.53 | 실측 | [[critpt]] 38.5%×1.0, [[humanitys-last-exam]] 43.5%×1.0 |
| 코딩 | 72.3 | +1.49 | 실측 | [[scicode]] 56.8%×1.0 |
| 에이전트 | 77.3 | +1.82 | 실측 | [[gdpval]] 1653.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.9 | +1.19 | 실측 | [[aa-lcr]] 82.3%×1.0 |
| 지시 따르기 | 53.1 | +0.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
