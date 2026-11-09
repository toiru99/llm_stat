---
type: Model
title: Claude Sonnet 5.5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 55.0
price_blended_usd_1m: 1.47
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 89.4, z: 1.77, r: 76.5, estimated: false }  # 전문 지식
  reasoning: { s: 85.7, z: 1.81, r: 77.1, estimated: false }  # 추론
  coding: { s: 90.2, z: 1.76, r: 76.4, estimated: false }  # 코딩
  agentic: { s: 98.5, z: 2.19, r: 82.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 1.21, r: 68.2, estimated: false }  # 긴문맥
  instruction: { s: 80.2, z: 1.16, r: 67.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Claude Sonnet 5.5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **55.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 37.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.5 | +1.77 | 실측 | [[humanitys-last-exam]] 55.0%×0.3 |
| 추론 | 77.1 | +1.81 | 실측 | [[critpt]] 59.0%×1.0, [[humanitys-last-exam]] 55.0%×1.0 |
| 코딩 | 76.4 | +1.76 | 실측 | [[scicode]] 61.0%×1.0 |
| 에이전트 | 82.9 | +2.19 | 실측 | [[gdpval]] 1838.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.2 | +1.21 | 실측 | [[aa-lcr]] 82.7%×1.0 |
| 지시 따르기 | 67.4 | +1.16 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
