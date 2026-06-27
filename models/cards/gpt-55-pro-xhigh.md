---
type: Model
title: GPT-5.5 Pro (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 922000
radar:
  knowledge: { s: 90.1, z: 1.74, r: 76.1, estimated: true }  # 전문 지식
  reasoning: { s: 100.0, z: 2.61, r: 89.2, estimated: false }  # 추론
  coding: { s: 93.8, z: 1.48, r: 72.2, estimated: true }  # 코딩
  agentic: { s: 90.0, z: 1.5, r: 72.6, estimated: true }  # 에이전트
  trust: { s: 35.2, z: 0.05, r: 50.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 97.7, z: 0.97, r: 64.5, estimated: true }  # 긴문맥
  instruction: { s: 83.4, z: 0.68, r: 60.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 Pro (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-27
timestamp: 2026-06-27T00:00:00Z
---

# GPT-5.5 Pro (xhigh)

OpenAI · Proprietary · 컨텍스트 922k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 922k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.1 | +1.74 | 추정 | (추정) |
| 추론 | 89.2 | +2.61 | 실측 | [[critpt]] 31.0%×1.0 |
| 코딩 | 72.2 | +1.48 | 추정 | (추정) |
| 에이전트 | 72.6 | +1.5 | 추정 | (추정) |
| 신뢰성 | 50.8 | +0.05 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.5 | +0.97 | 추정 | (추정) |
| 지시 따르기 | 60.3 | +0.68 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
