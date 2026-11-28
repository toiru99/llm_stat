---
type: Model
title: Claude Fable 5.2 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 56.3220356596468
price_blended_usd_1m: 5.74
output_speed_tps: 109.977226405921
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.1, z: 1.77, r: 76.5, estimated: false }  # 전문 지식
  reasoning: { s: 84.8, z: 2.46, r: 87.0, estimated: false }  # 추론
  coding: { s: 86.9, z: 1.54, r: 73.2, estimated: false }  # 코딩
  agentic: { s: 87.8, z: 1.43, r: 71.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.0, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.2 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Claude Fable 5.2 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **56.3220356596468**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $8.0 · 출력 $40.0 · 혼합 $5.74/1M · 109.977226405921 t/s · TTFT 12.1945274076615s · 1M ctx` · 가성비 9.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 76.5 | +1.77 | 실측 | [[humanitys-last-exam]] 61.9092%×0.3 |
| 추론 | 87.0 | +2.46 | 실측 | [[critpt]] 30.8571%×1.0, [[humanitys-last-exam]] 61.9092%×1.0 |
| 코딩 | 73.2 | +1.54 | 실측 | [[scicode]] 59.7222%×1.0 |
| 에이전트 | 71.5 | +1.43 | 실측 | [[gdpval]] 1590.56 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.9 | +1.0 | 실측 | [[aa-lcr]] 80%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
