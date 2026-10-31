---
type: Model
title: K2 Horizon 0.9B
creator: Institute of Foundation Models
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: current
size_class: Tiny
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 15.5, z: -1.49, r: 27.6, estimated: false }  # 전문 지식
  reasoning: { s: 14.4, z: -1.41, r: 28.9, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.24, r: 31.3, estimated: false }  # 코딩
  agentic: { s: 15.7, z: -0.64, r: 40.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 6.7, z: -1.37, r: 29.5, estimated: false }  # 긴문맥
  instruction: { s: 22.8, z: -1.25, r: 31.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2 Horizon 0.9B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# K2 Horizon 0.9B

Institute of Foundation Models · Open · Tiny · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 27.6 | -1.49 | 실측 | [[gpqa-diamond]] 29.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 28.9 | -1.41 | 실측 | [[gpqa-diamond]] 29.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 31.3 | -1.24 | 실측 | [[scicode]] 7.0%×1.0 |
| 에이전트 | 40.4 | -0.64 | 실측 | [[gdpval]] 402.0%×1.0, [[tau3-banking]] 5.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.5 | -1.37 | 실측 | [[aa-lcr]] 6.0%×1.0 |
| 지시 따르기 | 31.2 | -1.25 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
