---
type: Model
title: GPT-6 Luna (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 23.0
price_blended_usd_1m: 0.077
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 55.0, z: 0.24, r: 53.6, estimated: false }  # 전문 지식
  reasoning: { s: 53.2, z: 0.33, r: 54.9, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.27, r: 69.0, estimated: false }  # 코딩
  agentic: { s: 73.6, z: 1.35, r: 70.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.8, z: 0.84, r: 62.5, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.13, r: 66.9, estimated: false }  # 긴문맥
  instruction: { s: 59.1, z: 0.26, r: 53.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-04
timestamp: 2026-11-04T00:00:00Z
---

# GPT-6 Luna (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **23.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 298.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.6 | +0.24 | 실측 | [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 54.9 | +0.33 | 실측 | [[critpt]] 37.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 69.0 | +1.27 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 70.2 | +1.35 | 실측 | [[gdpval]] 1373.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.5 | +0.84 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 66.9 | +1.13 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 53.8 | +0.26 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
