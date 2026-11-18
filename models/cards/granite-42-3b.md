---
type: Model
title: Granite 4.2 3B
creator: IBM
license: Open
intelligence_index: 4.72268717901823
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131072
status: current
size_class: Tiny
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 33.7, z: -0.66, r: 40.1, estimated: false }  # 전문 지식
  reasoning: { s: 20.3, z: -0.75, r: 38.7, estimated: false }  # 추론
  coding: { s: 30.3, z: -0.33, r: 45.0, estimated: false }  # 코딩
  agentic: { s: 18.7, z: -0.9, r: 36.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 27.4, z: -0.78, r: 38.3, estimated: false }  # 긴문맥
  instruction: { s: 32.0, z: -0.92, r: 36.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.2 3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Granite 4.2 3B

IBM · Open · Tiny · 컨텍스트 131k · 종합지능 **4.72268717901823**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.1 | -0.66 | 실측 | [[gpqa-diamond]] 55.8585858585859%×0.4, [[humanitys-last-exam]] 6.62650602409639%×0.3 |
| 추론 | 38.7 | -0.75 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 55.8585858585859%×1.0, [[humanitys-last-exam]] 6.62650602409639%×1.0 |
| 코딩 | 45.0 | -0.33 | 실측 | [[scicode]] 25.3472222222222%×1.0 |
| 에이전트 | 36.4 | -0.9 | 실측 | [[gdpval]] 208.92%×1.0, [[tau3-banking]] 5.56701030927835%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.3 | -0.78 | 실측 | [[aa-lcr]] 24.3333333333333%×1.0 |
| 지시 따르기 | 36.3 | -0.92 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
