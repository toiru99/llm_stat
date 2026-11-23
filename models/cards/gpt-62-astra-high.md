---
type: Model
title: GPT-6.2 Astra (high)
creator: OpenAI
license: Proprietary
intelligence_index: 60.0882280338247
price_blended_usd_1m: 5.88
output_speed_tps: 45.9553610485769
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.7, z: 1.51, r: 72.7, estimated: true }  # 전문 지식
  reasoning: { s: 67.2, z: 1.56, r: 73.4, estimated: true }  # 추론
  coding: { s: 80.5, z: 1.37, r: 70.6, estimated: true }  # 코딩
  agentic: { s: 88.6, z: 1.51, r: 72.6, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 97.6, z: 1.34, r: 70.1, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.11, r: 66.6, estimated: true }  # 긴문맥
  instruction: { s: 78.8, z: 1.04, r: 65.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.2 Astra (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# GPT-6.2 Astra (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **60.0882280338247**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $8.0 · 출력 $40.0 · 혼합 $5.88/1M · 45.9553610485769 t/s · TTFT 16.8298988490257s · 1M ctx` · 가성비 10.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.7 | +1.51 | 추정 | (추정) |
| 추론 | 73.4 | +1.56 | 추정 | (추정) |
| 코딩 | 70.6 | +1.37 | 추정 | (추정) |
| 에이전트 | 72.6 | +1.51 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 70.1 | +1.34 | 실측 | [[mmmu-pro]] 87.6878612716763%×1.0 |
| 긴문맥 | 66.6 | +1.11 | 추정 | (추정) |
| 지시 따르기 | 65.6 | +1.04 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
