---
type: Model
title: GPT-6.2 Astra (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 61.5602325371388
price_blended_usd_1m: 5.88
output_speed_tps: 47.8140178432031
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.0, z: 1.53, r: 72.9, estimated: true }  # 전문 지식
  reasoning: { s: 67.5, z: 1.58, r: 73.6, estimated: true }  # 추론
  coding: { s: 80.7, z: 1.38, r: 70.7, estimated: true }  # 코딩
  agentic: { s: 84.2, z: 1.36, r: 70.4, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 97.9, z: 1.35, r: 70.3, estimated: false }  # 멀티모달
  long_context: { s: 91.4, z: 1.12, r: 66.8, estimated: true }  # 긴문맥
  instruction: { s: 78.2, z: 1.02, r: 65.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.2 Astra (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# GPT-6.2 Astra (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **61.5602325371388**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $8.0 · 출력 $40.0 · 혼합 $5.88/1M · 47.8140178432031 t/s · TTFT 58.7138391247657s · 1M ctx` · 가성비 10.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.9 | +1.53 | 추정 | (추정) |
| 추론 | 73.6 | +1.58 | 추정 | (추정) |
| 코딩 | 70.7 | +1.38 | 추정 | (추정) |
| 에이전트 | 70.4 | +1.36 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 70.3 | +1.35 | 실측 | [[mmmu-pro]] 87.9190751445087%×1.0 |
| 긴문맥 | 66.8 | +1.12 | 추정 | (추정) |
| 지시 따르기 | 65.3 | +1.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
