---
type: Model
title: GPT-4
creator: OpenAI
license: Proprietary
intelligence_index: 7.0
price_blended_usd_1m: 33
output_speed_tps: None
context_window: 8189
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 17.3, z: -1.13, r: 33.0, estimated: true }  # 전문 지식
  reasoning: { s: 16.1, z: -0.92, r: 36.1, estimated: true }  # 추론
  coding: { s: 16.7, z: -1.27, r: 31.0, estimated: true }  # 코딩
  agentic: { s: 0.0, z: -1.42, r: 28.7, estimated: false }  # 에이전트
  trust: { s: 10.4, z: -0.84, r: 37.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.5, z: -1.45, r: 28.2, estimated: true }  # 긴문맥
  instruction: { s: 18.6, z: -1.43, r: 28.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-05
timestamp: 2026-08-05T00:00:00Z
---

# GPT-4

OpenAI · Proprietary · Unknown · 컨텍스트 8k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $30.0 · 출력 $60.0 · 혼합 $33/1M · None t/s · TTFT Nones · 8k ctx` · 가성비 0.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.0 | -1.13 | 추정 | (추정) |
| 추론 | 36.1 | -0.92 | 추정 | (추정) |
| 코딩 | 31.0 | -1.27 | 추정 | (추정) |
| 에이전트 | 28.7 | -1.42 | 실측 | [[gdpval]] 0.0%×1.0 |
| 신뢰성 | 37.5 | -0.84 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.2 | -1.45 | 추정 | (추정) |
| 지시 따르기 | 28.6 | -1.43 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
