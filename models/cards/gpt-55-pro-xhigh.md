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
  knowledge: { s: 95.2, z: 2.71, r: 90.6, estimated: true }  # 전문 지식
  reasoning: { s: 96.9, z: 3.15, r: 97.3, estimated: false }  # 추론
  coding: { s: 92.7, z: 1.89, r: 78.3, estimated: true }  # 코딩
  agentic: { s: 91.2, z: 2.13, r: 82.0, estimated: true }  # 에이전트
  trust: { s: 29.4, z: 0.26, r: 53.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.0, z: 1.31, r: 69.6, estimated: true }  # 긴문맥
  instruction: { s: 77.0, z: 1.04, r: 65.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 Pro (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
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
| 전문 지식 | 90.6 | +2.71 | 추정 | (추정) |
| 추론 | 97.3 | +3.15 | 실측 | [[critpt]] 31.0%×1.0 |
| 코딩 | 78.3 | +1.89 | 추정 | (추정) |
| 에이전트 | 82.0 | +2.13 | 추정 | (추정) |
| 신뢰성 | 53.9 | +0.26 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.6 | +1.31 | 추정 | (추정) |
| 지시 따르기 | 65.5 | +1.04 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
