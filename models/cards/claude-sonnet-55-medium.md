---
type: Model
title: Claude Sonnet 5.5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 30.8195522148431
price_blended_usd_1m: 1.47
output_speed_tps: 139.581234741618
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.9, z: 0.3, r: 54.5, estimated: false }  # 전문 지식
  reasoning: { s: 50.1, z: 0.74, r: 61.1, estimated: false }  # 추론
  coding: { s: 75.6, z: 1.17, r: 67.5, estimated: false }  # 코딩
  agentic: { s: 76.2, z: 1.03, r: 65.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.1, z: 0.87, r: 63.0, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Claude Sonnet 5.5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **30.8195522148431**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 139.581234741618 t/s · TTFT 4.79625154850624s · 1M ctx` · 가성비 21.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 54.5 | +0.3 | 실측 | [[humanitys-last-exam]] 39.8054%×0.3 |
| 추론 | 61.1 | +0.74 | 실측 | [[critpt]] 16.8571%×1.0, [[humanitys-last-exam]] 39.8054%×1.0 |
| 코딩 | 67.5 | +1.17 | 실측 | [[scicode]] 52.8935%×1.0 |
| 에이전트 | 65.4 | +1.03 | 실측 | [[gdpval]] 1325.77 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.0 | +0.87 | 실측 | [[aa-lcr]] 76.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
