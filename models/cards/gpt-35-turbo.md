---
type: Model
title: GPT-3.5 Turbo
creator: OpenAI
license: Proprietary
intelligence_index: 5.0
price_blended_usd_1m: 0.6
output_speed_tps: None
context_window: 4100
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 23.3, z: -0.92, r: 36.2, estimated: false }  # 전문 지식
  reasoning: { s: 23.3, z: -0.63, r: 40.5, estimated: false }  # 추론
  coding: { s: 13.0, z: -0.84, r: 37.4, estimated: true }  # 코딩
  agentic: { s: 11.2, z: -0.81, r: 37.8, estimated: true }  # 에이전트
  trust: { s: 21.9, z: -0.25, r: 46.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 4.9, z: -1.44, r: 28.3, estimated: true }  # 긴문맥
  instruction: { s: 22.6, z: -1.36, r: 29.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-3.5 Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# GPT-3.5 Turbo

OpenAI · Proprietary · Unknown · 컨텍스트 4k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.5 · 출력 $1.5 · 혼합 $0.6/1M · None t/s · TTFT Nones · 4k ctx` · 가성비 8.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.2 | -0.92 | 실측 | [[gpqa-diamond]] 30.0%×0.4 |
| 추론 | 40.5 | -0.63 | 실측 | [[gpqa-diamond]] 30.0%×1.0 |
| 코딩 | 37.4 | -0.84 | 추정 | (추정) |
| 에이전트 | 37.8 | -0.81 | 추정 | (추정) |
| 신뢰성 | 46.3 | -0.25 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.3 | -1.44 | 추정 | (추정) |
| 지시 따르기 | 29.6 | -1.36 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
