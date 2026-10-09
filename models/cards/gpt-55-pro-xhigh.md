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
  knowledge: { s: 96.3, z: 2.49, r: 87.4, estimated: true }  # 전문 지식
  reasoning: { s: 96.9, z: 2.74, r: 91.0, estimated: false }  # 추론
  coding: { s: 90.0, z: 1.81, r: 77.2, estimated: true }  # 코딩
  agentic: { s: 88.5, z: 1.89, r: 78.3, estimated: true }  # 에이전트
  trust: { s: 29.9, z: 0.14, r: 52.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.7, z: 1.26, r: 68.9, estimated: true }  # 긴문맥
  instruction: { s: 78.3, z: 1.0, r: 65.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 Pro (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
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
| 전문 지식 | 87.4 | +2.49 | 추정 | (추정) |
| 추론 | 91.0 | +2.74 | 실측 | [[critpt]] 31.0%×1.0 |
| 코딩 | 77.2 | +1.81 | 추정 | (추정) |
| 에이전트 | 78.3 | +1.89 | 추정 | (추정) |
| 신뢰성 | 52.2 | +0.14 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.9 | +1.26 | 추정 | (추정) |
| 지시 따르기 | 65.0 | +1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
