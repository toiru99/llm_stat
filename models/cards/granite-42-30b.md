---
type: Model
title: Granite 4.2 30B
creator: IBM
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131072
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 42.0, z: -0.25, r: 46.3, estimated: false }  # 전문 지식
  reasoning: { s: 25.9, z: -0.47, r: 43.0, estimated: false }  # 추론
  coding: { s: 50.9, z: 0.38, r: 55.7, estimated: false }  # 코딩
  agentic: { s: 35.6, z: -0.31, r: 45.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 55.3, z: 0.06, r: 50.9, estimated: false }  # 긴문맥
  instruction: { s: 44.6, z: -0.38, r: 44.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.2 30B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Granite 4.2 30B

IBM · Open · Small · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.3 | -0.25 | 실측 | [[gpqa-diamond]] 64.4444444444444%×0.4, [[humanitys-last-exam]] 11.1677479147359%×0.3 |
| 추론 | 43.0 | -0.47 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 64.4444444444444%×1.0, [[humanitys-last-exam]] 11.1677479147359%×1.0 |
| 코딩 | 55.7 | +0.38 | 실측 | [[scicode]] 37.8472222222222%×1.0 |
| 에이전트 | 45.3 | -0.31 | 실측 | [[gdpval]] 582.6%×1.0, [[tau3-banking]] 14.432989690721602%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 50.9 | +0.06 | 실측 | [[aa-lcr]] 49.0%×1.0 |
| 지시 따르기 | 44.3 | -0.38 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
