---
type: Model
title: Claude Sonnet 5.5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 42.0
price_blended_usd_1m: 1.47
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.1, z: 1.1, r: 66.4, estimated: false }  # 전문 지식
  reasoning: { s: 72.8, z: 1.23, r: 68.5, estimated: false }  # 추론
  coding: { s: 78.0, z: 1.35, r: 70.3, estimated: false }  # 코딩
  agentic: { s: 83.4, z: 1.68, r: 75.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.9, z: 1.05, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 66.3, z: 0.57, r: 58.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Claude Sonnet 5.5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 28.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.4 | +1.1 | 실측 | [[humanitys-last-exam]] 45.8%×0.3 |
| 추론 | 68.5 | +1.23 | 실측 | [[critpt]] 51.5%×1.0, [[humanitys-last-exam]] 45.8%×1.0 |
| 코딩 | 70.3 | +1.35 | 실측 | [[scicode]] 53.7%×1.0 |
| 에이전트 | 75.2 | +1.68 | 실측 | [[gdpval]] 1557.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.8 | +1.05 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 58.5 | +0.57 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
