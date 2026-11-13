---
type: Model
title: A.X-K2
creator: SK Telecom
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.8, z: 0.95, r: 64.2, estimated: false }  # 전문 지식
  reasoning: { s: 63.3, z: 0.98, r: 64.6, estimated: false }  # 추론
  coding: { s: 56.1, z: 0.61, r: 59.1, estimated: false }  # 코딩
  agentic: { s: 41.5, z: 0.22, r: 53.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.77, r: 61.6, estimated: false }  # 긴문맥
  instruction: { s: 67.8, z: 0.63, r: 59.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — A.X-K2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# A.X-K2

SK Telecom · Open · Large · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.2 | +0.95 | 실측 | [[gpqa-diamond]] 85.7%×0.4, [[humanitys-last-exam]] 29.6%×0.3 |
| 추론 | 64.6 | +0.98 | 실측 | [[gpqa-diamond]] 85.7%×1.0, [[humanitys-last-exam]] 29.6%×1.0 |
| 코딩 | 59.1 | +0.61 | 실측 | [[scicode]] 41.0%×1.0 |
| 에이전트 | 53.3 | +0.22 | 실측 | [[gdpval]] 968.0%×1.0, [[tau3-banking]] 16.1%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.6 | +0.77 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 59.5 | +0.63 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
