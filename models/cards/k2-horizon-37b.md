---
type: Model
title: K2 Horizon 3.7B
creator: Institute of Foundation Models
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 524000
status: current
size_class: Tiny
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.5, z: -0.04, r: 49.3, estimated: false }  # 전문 지식
  reasoning: { s: 45.1, z: -0.03, r: 49.6, estimated: false }  # 추론
  coding: { s: 25.0, z: -0.41, r: 43.9, estimated: false }  # 코딩
  agentic: { s: 43.4, z: 0.32, r: 54.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 69.7, z: 0.52, r: 57.8, estimated: false }  # 긴문맥
  instruction: { s: 54.7, z: 0.08, r: 51.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2 Horizon 3.7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# K2 Horizon 3.7B

Institute of Foundation Models · Open · Tiny · 컨텍스트 524k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 524k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.3 | -0.04 | 실측 | [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 49.6 | -0.03 | 실측 | [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 43.9 | -0.41 | 실측 | [[scicode]] 22.0%×1.0 |
| 에이전트 | 54.7 | +0.32 | 실측 | [[gdpval]] 889.0%×1.0, [[tau3-banking]] 20.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.8 | +0.52 | 실측 | [[aa-lcr]] 62.0%×1.0 |
| 지시 따르기 | 51.3 | +0.08 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
