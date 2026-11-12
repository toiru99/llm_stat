---
type: Model
title: Claude Fable 5.2 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 62.0
price_blended_usd_1m: 5.74
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.9, z: 2.03, r: 80.4, estimated: false }  # 전문 지식
  reasoning: { s: 92.2, z: 2.4, r: 86.1, estimated: false }  # 추론
  coding: { s: 86.5, z: 1.64, r: 74.6, estimated: false }  # 코딩
  agentic: { s: 92.1, z: 1.94, r: 79.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.9, z: 1.23, r: 68.4, estimated: false }  # 긴문맥
  instruction: { s: 77.4, z: 1.06, r: 65.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.2 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# Claude Fable 5.2 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **62.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $8.0 · 출력 $40.0 · 혼합 $5.74/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 10.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.4 | +2.03 | 실측 | [[humanitys-last-exam]] 66.2%×0.3 |
| 추론 | 86.1 | +2.4 | 실측 | [[critpt]] 73.0%×1.0, [[humanitys-last-exam]] 66.2%×1.0 |
| 코딩 | 74.6 | +1.64 | 실측 | [[scicode]] 59.5%×1.0 |
| 에이전트 | 79.1 | +1.94 | 실측 | [[gdpval]] 1718.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.4 | +1.23 | 실측 | [[aa-lcr]] 83.3%×1.0 |
| 지시 따르기 | 65.9 | +1.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
