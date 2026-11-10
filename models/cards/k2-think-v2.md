---
type: Model
title: K2 Think V2
creator: Institute of Foundation Models
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 45.9, z: -0.05, r: 49.2, estimated: false }  # 전문 지식
  reasoning: { s: 41.7, z: -0.07, r: 48.9, estimated: false }  # 추론
  coding: { s: 10.3, z: -0.92, r: 36.2, estimated: false }  # 코딩
  agentic: { s: 8.8, z: -0.88, r: 36.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 64.3, z: 0.34, r: 55.0, estimated: false }  # 긴문맥
  instruction: { s: 71.2, z: 0.79, r: 61.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2 Think V2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# K2 Think V2

Institute of Foundation Models · Open · Medium · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.2 | -0.05 | 실측 | [[gpqa-diamond]] 71.3%×0.4, [[humanitys-last-exam]] 10.1%×0.3 |
| 추론 | 48.9 | -0.07 | 실측 | [[gpqa-diamond]] 71.3%×1.0, [[humanitys-last-exam]] 10.1%×1.0 |
| 코딩 | 36.2 | -0.92 | 실측 | [[terminal-bench]] 6.8%×0.5 |
| 에이전트 | 36.8 | -0.88 | 실측 | [[gdpval]] 137.0%×1.0, [[terminal-bench]] 6.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 55.0 | +0.34 | 실측 | [[aa-lcr]] 57.0%×1.0 |
| 지시 따르기 | 61.9 | +0.79 | 실측 | [[ifbench]] 62.8%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
