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
  knowledge: { s: 96.3, z: 2.59, r: 88.8, estimated: true }  # 전문 지식
  reasoning: { s: 96.9, z: 2.88, r: 93.2, estimated: false }  # 추론
  coding: { s: 90.0, z: 1.9, r: 78.5, estimated: true }  # 코딩
  agentic: { s: 88.7, z: 1.96, r: 79.4, estimated: true }  # 에이전트
  trust: { s: 29.9, z: 0.2, r: 52.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.7, z: 1.31, r: 69.7, estimated: true }  # 긴문맥
  instruction: { s: 78.9, z: 1.05, r: 65.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 Pro (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# GPT-5.5 Pro (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 922k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 88.8 | +2.59 | 추정 | (추정) |
| 추론 | 93.2 | +2.88 | 실측 | [[critpt]] 31.0%×1.0 |
| 코딩 | 78.5 | +1.9 | 추정 | (추정) |
| 에이전트 | 79.4 | +1.96 | 추정 | (추정) |
| 신뢰성 | 52.9 | +0.2 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.7 | +1.31 | 추정 | (추정) |
| 지시 따르기 | 65.7 | +1.05 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
