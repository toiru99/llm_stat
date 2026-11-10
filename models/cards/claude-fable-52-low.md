---
type: Model
title: Claude Fable 5.2 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 54.0
price_blended_usd_1m: 5.74
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.1, z: 1.6, r: 74.0, estimated: false }  # 전문 지식
  reasoning: { s: 79.2, z: 1.76, r: 76.4, estimated: false }  # 추론
  coding: { s: 83.7, z: 1.54, r: 73.1, estimated: false }  # 코딩
  agentic: { s: 82.8, z: 1.63, r: 74.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.11, r: 66.7, estimated: false }  # 긴문맥
  instruction: { s: 82.4, z: 1.27, r: 69.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.2 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Claude Fable 5.2 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **54.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $8.0 · 출력 $40.0 · 혼합 $5.74/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 9.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.0 | +1.6 | 실측 | [[humanitys-last-exam]] 59.7%×0.3 |
| 추론 | 76.4 | +1.76 | 실측 | [[critpt]] 60.0%×1.0, [[humanitys-last-exam]] 59.7%×1.0 |
| 코딩 | 73.1 | +1.54 | 실측 | [[scicode]] 57.8%×1.0 |
| 에이전트 | 74.4 | +1.63 | 실측 | [[gdpval]] 1546.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.7 | +1.11 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 69.1 | +1.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
