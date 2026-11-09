---
type: Model
title: GPT-6.1 Sol (high)
creator: OpenAI
license: Proprietary
intelligence_index: 50.0
price_blended_usd_1m: 1.47
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.4, z: 1.51, r: 72.6, estimated: false }  # 전문 지식
  reasoning: { s: 89.3, z: 1.97, r: 79.5, estimated: false }  # 추론
  coding: { s: 81.5, z: 1.47, r: 72.0, estimated: false }  # 코딩
  agentic: { s: 81.4, z: 1.61, r: 74.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 94.6, z: 1.17, r: 67.5, estimated: false }  # 멀티모달
  long_context: { s: 92.8, z: 1.2, r: 68.0, estimated: false }  # 긴문맥
  instruction: { s: 78.5, z: 1.09, r: 66.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# GPT-6.1 Sol (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 34.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.6 | +1.51 | 실측 | [[humanitys-last-exam]] 51.4%×0.3 |
| 추론 | 79.5 | +1.97 | 실측 | [[critpt]] 68.5%×1.0, [[humanitys-last-exam]] 51.4%×1.0 |
| 코딩 | 72.0 | +1.47 | 실측 | [[scicode]] 55.8%×1.0 |
| 에이전트 | 74.1 | +1.61 | 실측 | [[gdpval]] 1520.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.5 | +1.17 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 68.0 | +1.2 | 실측 | [[aa-lcr]] 82.3%×1.0 |
| 지시 따르기 | 66.3 | +1.09 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
