---
type: Model
title: GPT-5.4 Pro (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 45.0
output_speed_tps: None
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 92.1, z: 2.5, r: 87.6, estimated: true }  # 전문 지식
  reasoning: { s: 93.8, z: 3.19, r: 97.8, estimated: false }  # 추론
  coding: { s: 93.9, z: 2.03, r: 80.4, estimated: true }  # 코딩
  agentic: { s: 91.3, z: 2.16, r: 82.3, estimated: true }  # 에이전트
  trust: { s: 13.1, z: -0.69, r: 39.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.2, z: 1.36, r: 70.3, estimated: true }  # 긴문맥
  instruction: { s: 84.7, z: 1.34, r: 70.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 Pro (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-15
timestamp: 2026-07-15T00:00:00Z
---

# GPT-5.4 Pro (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $30.0 · 출력 $180.0 · 혼합 $45.0/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 87.6 | +2.5 | 추정 | (추정) |
| 추론 | 97.8 | +3.19 | 실측 | [[critpt]] 30.0%×1.0 |
| 코딩 | 80.4 | +2.03 | 추정 | (추정) |
| 에이전트 | 82.3 | +2.16 | 추정 | (추정) |
| 신뢰성 | 39.6 | -0.69 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.3 | +1.36 | 추정 | (추정) |
| 지시 따르기 | 70.0 | +1.34 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
