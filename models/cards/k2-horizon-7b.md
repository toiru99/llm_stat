---
type: Model
title: K2 Horizon 7B
creator: Institute of Foundation Models
license: Open
intelligence_index: 21.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 524000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 34.2, z: -0.41, r: 43.8, estimated: false }  # 전문 지식
  reasoning: { s: 34.6, z: -0.12, r: 48.2, estimated: false }  # 추론
  coding: { s: 35.0, z: -0.1, r: 48.5, estimated: false }  # 코딩
  agentic: { s: 54.6, z: 0.69, r: 60.3, estimated: false }  # 에이전트
  trust: { s: 66.0, z: 1.75, r: 76.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.77, r: 61.6, estimated: false }  # 긴문맥
  instruction: { s: 56.5, z: 0.09, r: 51.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2 Horizon 7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# K2 Horizon 7B

Institute of Foundation Models · Open · Small · 컨텍스트 524k · 종합지능 **21.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 524k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.8 | -0.41 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 48.2 | -0.12 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 48.5 | -0.1 | 실측 | [[scicode]] 28.0%×1.0 |
| 에이전트 | 60.3 | +0.69 | 실측 | [[gdpval]] 1016.0%×1.0, [[tau3-banking]] 28.0%×1.0 |
| 신뢰성 | 76.3 | +1.75 | 실측 | [[aa-omniscience]] 66.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.6 | +0.77 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 51.3 | +0.09 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
