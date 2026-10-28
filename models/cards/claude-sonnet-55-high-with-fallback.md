---
type: Model
title: Claude Sonnet 5.5 (high with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 41.0
price_blended_usd_1m: 1.47
output_speed_tps: 115.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 75.0, z: 1.13, r: 66.9, estimated: false }  # 전문 지식
  reasoning: { s: 70.8, z: 1.13, r: 67.0, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.38, r: 70.7, estimated: false }  # 코딩
  agentic: { s: 83.5, z: 1.7, r: 75.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 66.2, z: 0.56, r: 58.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (high with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Claude Sonnet 5.5 (high with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **41.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 115.0 t/s · TTFT 11.08s · 1M ctx` · 가성비 27.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.9 | +1.13 | 실측 | [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 67.0 | +1.13 | 실측 | [[critpt]] 48.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 70.7 | +1.38 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 75.5 | +1.7 | 실측 | [[gdpval]] 1558.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 58.4 | +0.56 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
