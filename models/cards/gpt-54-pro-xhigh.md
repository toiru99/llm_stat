---
type: Model
title: GPT-5.4 Pro (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 92.1, z: 2.47, r: 87.1, estimated: true }  # 전문 지식
  reasoning: { s: 93.8, z: 3.13, r: 97.0, estimated: false }  # 추론
  coding: { s: 93.8, z: 1.99, r: 79.8, estimated: true }  # 코딩
  agentic: { s: 91.4, z: 2.13, r: 81.9, estimated: true }  # 에이전트
  trust: { s: 13.4, z: -0.68, r: 39.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.7, z: 1.36, r: 70.4, estimated: true }  # 긴문맥
  instruction: { s: 84.8, z: 1.32, r: 69.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 Pro (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-22
timestamp: 2026-07-22T00:00:00Z
---

# GPT-5.4 Pro (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $30.0 · 출력 $180.0 · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 87.1 | +2.47 | 추정 | (추정) |
| 추론 | 97.0 | +3.13 | 실측 | [[critpt]] 30.0%×1.0 |
| 코딩 | 79.8 | +1.99 | 추정 | (추정) |
| 에이전트 | 81.9 | +2.13 | 추정 | (추정) |
| 신뢰성 | 39.8 | -0.68 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.4 | +1.36 | 추정 | (추정) |
| 지시 따르기 | 69.9 | +1.32 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
