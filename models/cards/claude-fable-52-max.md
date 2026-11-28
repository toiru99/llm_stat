---
type: Model
title: Claude Fable 5.2 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 64.7656159586463
price_blended_usd_1m: 5.74
output_speed_tps: 112.833560875807
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 100.0, z: 2.59, r: 88.8, estimated: false }  # 전문 지식
  reasoning: { s: 99.6, z: 3.2, r: 98.0, estimated: false }  # 추론
  coding: { s: 100.0, z: 1.99, r: 79.8, estimated: false }  # 코딩
  agentic: { s: 98.3, z: 1.8, r: 77.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.11, r: 66.7, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.2 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Claude Fable 5.2 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **64.7656159586463**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $8.0 · 출력 $40.0 · 혼합 $5.74/1M · 112.833560875807 t/s · TTFT 240.910850877372s · 1M ctx` · 가성비 11.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 88.8 | +2.59 | 실측 | [[humanitys-last-exam]] 74.2817%×0.3 |
| 추론 | 98.0 | +3.2 | 실측 | [[critpt]] 35.4286%×1.0, [[humanitys-last-exam]] 74.2817%×1.0 |
| 코딩 | 79.8 | +1.99 | 실측 | [[scicode]] 67.7083%×1.0 |
| 에이전트 | 77.0 | +1.8 | 실측 | [[gdpval]] 1827.44 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.7 | +1.11 | 실측 | [[aa-lcr]] 83.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
