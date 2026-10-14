---
type: Model
title: GPT-5.5 Pro (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 922000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 90.7, z: 2.23, r: 83.4, estimated: true }  # 전문 지식
  reasoning: { s: 93.9, z: 2.61, r: 89.2, estimated: false }  # 추론
  coding: { s: 82.1, z: 1.53, r: 73.0, estimated: true }  # 코딩
  agentic: { s: 81.3, z: 1.6, r: 73.9, estimated: true }  # 에이전트
  trust: { s: 48.0, z: 0.97, r: 64.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.1, z: 1.18, r: 67.6, estimated: true }  # 긴문맥
  instruction: { s: 77.8, z: 0.97, r: 64.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 Pro (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-14
timestamp: 2026-10-14T00:00:00Z
---

# GPT-5.5 Pro (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 922k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 83.4 | +2.23 | 추정 | (추정) |
| 추론 | 89.2 | +2.61 | 실측 | [[critpt]] 31.0%×1.0 |
| 코딩 | 73.0 | +1.53 | 추정 | (추정) |
| 에이전트 | 73.9 | +1.6 | 추정 | (추정) |
| 신뢰성 | 64.5 | +0.97 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.6 | +1.18 | 추정 | (추정) |
| 지시 따르기 | 64.6 | +0.97 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
