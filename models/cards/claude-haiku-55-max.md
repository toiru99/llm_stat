---
type: Model
title: Claude Haiku 5.5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 36.5350486385192
price_blended_usd_1m: 0.077
output_speed_tps: 258.842722054256
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.2, z: 0.6, r: 59.0, estimated: false }  # 전문 지식
  reasoning: { s: 56.0, z: 1.04, r: 65.5, estimated: false }  # 추론
  coding: { s: 79.0, z: 1.28, r: 69.2, estimated: false }  # 코딩
  agentic: { s: 89.6, z: 1.5, r: 72.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Claude Haiku 5.5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **36.5350486385192**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 258.842722054256 t/s · TTFT 188.818285767375s · 1M ctx` · 가성비 474.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 59.0 | +0.6 | 실측 | [[humanitys-last-exam]] 44.393%×0.3 |
| 추론 | 65.5 | +1.04 | 실측 | [[critpt]] 18.8571%×1.0, [[humanitys-last-exam]] 44.393%×1.0 |
| 코딩 | 69.2 | +1.28 | 실측 | [[scicode]] 54.9769%×1.0 |
| 에이전트 | 72.5 | +1.5 | 실측 | [[gdpval]] 1629.35 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 82.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
