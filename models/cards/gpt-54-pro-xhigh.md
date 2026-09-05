---
type: Model
title: GPT-5.4 Pro (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 45
output_speed_tps: None
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 93.4, z: 2.53, r: 87.9, estimated: true }  # 전문 지식
  reasoning: { s: 93.8, z: 2.83, r: 92.4, estimated: false }  # 추론
  coding: { s: 84.5, z: 1.84, r: 77.6, estimated: true }  # 코딩
  agentic: { s: 82.9, z: 1.74, r: 76.1, estimated: true }  # 에이전트
  trust: { s: 44.5, z: 0.95, r: 64.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.7, z: 1.25, r: 68.7, estimated: true }  # 긴문맥
  instruction: { s: 76.5, z: 1.0, r: 65.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 Pro (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# GPT-5.4 Pro (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $30.0 · 출력 $180.0 · 혼합 $45/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 87.9 | +2.53 | 추정 | (추정) |
| 추론 | 92.4 | +2.83 | 실측 | [[critpt]] 30.0%×1.0 |
| 코딩 | 77.6 | +1.84 | 추정 | (추정) |
| 에이전트 | 76.1 | +1.74 | 추정 | (추정) |
| 신뢰성 | 64.3 | +0.95 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.7 | +1.25 | 추정 | (추정) |
| 지시 따르기 | 65.0 | +1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
