---
type: Model
title: Claude Haiku 5.5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 29.9753255687531
price_blended_usd_1m: 0.077
output_speed_tps: 227.753985775328
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 49.4, z: 0.13, r: 51.9, estimated: false }  # 전문 지식
  reasoning: { s: 50.7, z: 0.77, r: 61.6, estimated: false }  # 추론
  coding: { s: 68.8, z: 0.93, r: 64.0, estimated: false }  # 코딩
  agentic: { s: 80.5, z: 1.17, r: 67.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.2, z: 0.9, r: 63.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Claude Haiku 5.5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **29.9753255687531**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 227.753985775328 t/s · TTFT 19.8215650680802s · 1M ctx` · 가성비 389.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 51.9 | +0.13 | 실측 | [[humanitys-last-exam]] 37.2567%×0.3 |
| 추론 | 61.6 | +0.77 | 실측 | [[critpt]] 18.5714%×1.0, [[humanitys-last-exam]] 37.2567%×1.0 |
| 코딩 | 64.0 | +0.93 | 실측 | [[scicode]] 48.7269%×1.0 |
| 에이전트 | 67.6 | +1.17 | 실측 | [[gdpval]] 1423.04 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.6 | +0.9 | 실측 | [[aa-lcr]] 77.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
