---
type: Model
title: Celeris-1
creator: Celeris
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.124
output_speed_tps: 728.254494653566
context_window: 131072
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.6, z: -0.4, r: 44.0, estimated: false }  # 전문 지식
  reasoning: { s: 23.2, z: -0.6, r: 41.1, estimated: false }  # 추론
  coding: { s: 24.2, z: -0.57, r: 41.5, estimated: false }  # 코딩
  agentic: { s: 19.3, z: -0.98, r: 35.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 42.9, z: -0.45, r: 43.2, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Celeris-1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Celeris-1

Celeris · Proprietary · Unknown · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.2 · 출력 $0.7 · 혼합 $0.124/1M · 728.254494653566 t/s · TTFT 0.698679048917403s · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 44.0 | -0.4 | 실측 | [[gpqa-diamond]] 63.1313%×0.4, [[humanitys-last-exam]] 6.81186%×0.3 |
| 추론 | 41.1 | -0.6 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 63.1313%×1.0, [[humanitys-last-exam]] 6.81186%×1.0 |
| 코딩 | 41.5 | -0.57 | 실측 | [[scicode]] 21.6435%×1.0 |
| 에이전트 | 35.3 | -0.98 | 실측 | [[gdpval]] 309.14 Elo×1.0, [[tau3-banking]] 3.91753%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 43.2 | -0.45 | 실측 | [[aa-lcr]] 38%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
