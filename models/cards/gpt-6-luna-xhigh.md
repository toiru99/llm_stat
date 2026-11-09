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
  knowledge: { s: 55.1, z: 0.25, r: 53.8, estimated: false }  # 전문 지식
  reasoning: { s: 53.2, z: 0.35, r: 55.2, estimated: false }  # 추론
  coding: { s: 74.7, z: 1.24, r: 68.6, estimated: false }  # 코딩
  agentic: { s: 73.6, z: 1.34, r: 70.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.8, z: 0.83, r: 62.4, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: 57.0, z: 0.17, r: 52.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Luna (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# GPT-6 Luna (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **23.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 298.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.8 | +0.25 | 실측 | [[humanitys-last-exam]] 34.3%×0.3 |
| 추론 | 55.2 | +0.35 | 실측 | [[critpt]] 37.0%×1.0, [[humanitys-last-exam]] 34.3%×1.0 |
| 코딩 | 68.6 | +1.24 | 실측 | [[scicode]] 51.7%×1.0 |
| 에이전트 | 70.1 | +1.34 | 실측 | [[gdpval]] 1373.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.4 | +0.83 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 52.6 | +0.17 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
