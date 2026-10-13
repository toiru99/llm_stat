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
  knowledge: { s: 92.6, z: 2.31, r: 84.7, estimated: true }  # 전문 지식
  reasoning: { s: 90.9, z: 2.48, r: 87.2, estimated: false }  # 추론
  coding: { s: 80.7, z: 1.49, r: 72.3, estimated: true }  # 코딩
  agentic: { s: 79.6, z: 1.53, r: 72.9, estimated: true }  # 에이전트
  trust: { s: 46.0, z: 0.88, r: 63.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.2, z: 1.18, r: 67.7, estimated: true }  # 긴문맥
  instruction: { s: 77.8, z: 0.97, r: 64.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 Pro (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-13
timestamp: 2026-10-13T00:00:00Z
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
| 전문 지식 | 84.7 | +2.31 | 추정 | (추정) |
| 추론 | 87.2 | +2.48 | 실측 | [[critpt]] 30.0%×1.0 |
| 코딩 | 72.3 | +1.49 | 추정 | (추정) |
| 에이전트 | 72.9 | +1.53 | 추정 | (추정) |
| 신뢰성 | 63.2 | +0.88 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.7 | +1.18 | 추정 | (추정) |
| 지시 따르기 | 64.6 | +0.97 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
