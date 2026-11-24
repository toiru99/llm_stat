---
type: Model
title: K2 Horizon 7B
creator: Institute of Foundation Models
license: Open
intelligence_index: 10.5630231522891
price_blended_usd_1m: None
output_speed_tps: None
context_window: 524288
status: current
size_class: Small
params_b: 7
is_reasoning: true
radar:
  knowledge: { s: 53.3, z: 0.32, r: 54.8, estimated: false }  # 전문 지식
  reasoning: { s: 33.3, z: -0.09, r: 48.6, estimated: false }  # 추론
  coding: { s: 33.9, z: -0.24, r: 46.4, estimated: false }  # 코딩
  agentic: { s: 58.2, z: 0.39, r: 55.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.6, z: 0.64, r: 59.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2 Horizon 7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# K2 Horizon 7B

Institute of Foundation Models · Open · Small(7B) · 컨텍스트 524k · 종합지능 **10.5630231522891**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 추론, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 524k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 54.8 | +0.32 | 실측 | [[gpqa-diamond]] 75.2525%×0.4, [[humanitys-last-exam]] 18.2113%×0.3 |
| 추론 | 48.6 | -0.09 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 75.2525%×1.0, [[humanitys-last-exam]] 18.2113%×1.0 |
| 코딩 | 46.4 | -0.24 | 실측 | [[scicode]] 27.5463%×1.0 |
| 에이전트 | 55.9 | +0.39 | 실측 | [[gdpval]] 1023.54 Elo×1.0, [[tau3-banking]] 27.6289%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.6 | +0.64 | 실측 | [[aa-lcr]] 69.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
