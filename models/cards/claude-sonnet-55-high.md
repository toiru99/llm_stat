---
type: Model
title: Claude Sonnet 5.5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 41.515109087048
price_blended_usd_1m: 1.47
output_speed_tps: 137.836454270445
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.1, z: 0.7, r: 60.5, estimated: false }  # 전문 지식
  reasoning: { s: 65.0, z: 1.48, r: 72.2, estimated: false }  # 추론
  coding: { s: 77.0, z: 1.21, r: 68.2, estimated: false }  # 코딩
  agentic: { s: 86.1, z: 1.38, r: 70.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 0.93, r: 63.9, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Claude Sonnet 5.5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **41.515109087048**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 137.836454270445 t/s · TTFT 10.6512966373541s · 1M ctx` · 가성비 28.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 60.5 | +0.7 | 실측 | [[humanitys-last-exam]] 45.8295%×0.3 |
| 추론 | 72.2 | +1.48 | 실측 | [[critpt]] 24.5714%×1.0, [[humanitys-last-exam]] 45.8295%×1.0 |
| 코딩 | 68.2 | +1.21 | 실측 | [[scicode]] 53.7037%×1.0 |
| 에이전트 | 70.6 | +1.38 | 실측 | [[gdpval]] 1551.38 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.9 | +0.93 | 실측 | [[aa-lcr]] 78%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
