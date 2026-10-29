---
type: Model
title: K2 Horizon 7B
creator: Institute of Foundation Models
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 524000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 55.3, z: 0.26, r: 53.9, estimated: false }  # 전문 지식
  reasoning: { s: 52.0, z: 0.28, r: 54.2, estimated: false }  # 추론
  coding: { s: 35.0, z: -0.07, r: 48.9, estimated: false }  # 코딩
  agentic: { s: 54.9, z: 0.71, r: 60.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.79, r: 61.9, estimated: false }  # 긴문맥
  instruction: { s: 59.7, z: 0.29, r: 54.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2 Horizon 7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# K2 Horizon 7B

Institute of Foundation Models · Open · Small · 컨텍스트 524k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 524k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.9 | +0.26 | 실측 | [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 54.2 | +0.28 | 실측 | [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 48.9 | -0.07 | 실측 | [[scicode]] 28.0%×1.0 |
| 에이전트 | 60.6 | +0.71 | 실측 | [[gdpval]] 1024.0%×1.0, [[tau3-banking]] 28.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.9 | +0.79 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 54.4 | +0.29 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
