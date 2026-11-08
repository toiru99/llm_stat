---
type: Model
title: GPT-6 Luna (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 18.0
price_blended_usd_1m: 0.077
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 45.1, z: -0.19, r: 47.2, estimated: false }  # 전문 지식
  reasoning: { s: 41.7, z: -0.17, r: 47.4, estimated: false }  # 추론
  coding: { s: 73.3, z: 1.2, r: 68.0, estimated: false }  # 코딩
  agentic: { s: 68.0, z: 1.15, r: 67.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.1, z: 0.69, r: 60.4, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 1.07, r: 66.0, estimated: false }  # 긴문맥
  instruction: { s: 47.3, z: -0.24, r: 46.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# GPT-6 Luna (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **18.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 233.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.2 | -0.19 | 실측 | [[humanitys-last-exam]] 28.3%×0.3 |
| 추론 | 47.4 | -0.17 | 실측 | [[critpt]] 27.5%×1.0, [[humanitys-last-exam]] 28.3%×1.0 |
| 코딩 | 68.0 | +1.2 | 실측 | [[scicode]] 50.9%×1.0 |
| 에이전트 | 67.3 | +1.15 | 실측 | [[gdpval]] 1270.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.4 | +0.69 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 66.0 | +1.07 | 실측 | [[aa-lcr]] 78.3%×1.0 |
| 지시 따르기 | 46.4 | -0.24 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
