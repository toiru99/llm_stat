---
type: Model
title: Claude Sonnet 5.5 (max with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 54.0
price_blended_usd_1m: 1.47
output_speed_tps: 139.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 90.0, z: 1.79, r: 76.9, estimated: false }  # 전문 지식
  reasoning: { s: 83.9, z: 1.73, r: 75.9, estimated: false }  # 추론
  coding: { s: 90.0, z: 1.77, r: 76.6, estimated: false }  # 코딩
  agentic: { s: 98.5, z: 2.21, r: 83.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.23, r: 68.5, estimated: false }  # 긴문맥
  instruction: { s: 80.8, z: 1.18, r: 67.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (max with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Claude Sonnet 5.5 (max with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **54.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 139.0 t/s · TTFT 463.03s · 1M ctx` · 가성비 36.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.9 | +1.79 | 실측 | [[humanitys-last-exam]] 55.0%×0.3 |
| 추론 | 75.9 | +1.73 | 실측 | [[critpt]] 56.0%×1.0, [[humanitys-last-exam]] 55.0%×1.0 |
| 코딩 | 76.6 | +1.77 | 실측 | [[scicode]] 61.0%×1.0 |
| 에이전트 | 83.2 | +2.21 | 실측 | [[gdpval]] 1838.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.5 | +1.23 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 67.7 | +1.18 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
