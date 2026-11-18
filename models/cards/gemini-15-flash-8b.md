---
type: Model
title: Gemini 1.5 Flash-8B
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1048576
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 19.3, z: -1.35, r: 29.8, estimated: false }  # 전문 지식
  reasoning: { s: 17.5, z: -0.89, r: 36.7, estimated: false }  # 추론
  coding: { s: 15.0, z: -0.85, r: 37.3, estimated: true }  # 코딩
  agentic: { s: 10.5, z: -1.19, r: 32.1, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 29.4, z: -2.15, r: 17.8, estimated: false }  # 멀티모달
  long_context: { s: 17.1, z: -1.08, r: 33.8, estimated: true }  # 긴문맥
  instruction: { s: 28.5, z: -1.06, r: 34.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Flash-8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Gemini 1.5 Flash-8B

Google · Proprietary · Small · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.8 | -1.35 | 실측 | [[gpqa-diamond]] 35.8585858585859%×0.4, [[humanitys-last-exam]] 4.6899999999999995%×0.3 |
| 추론 | 36.7 | -0.89 | 실측 | [[gpqa-diamond]] 35.8585858585859%×1.0, [[humanitys-last-exam]] 4.6899999999999995%×1.0 |
| 코딩 | 37.3 | -0.85 | 추정 | (추정) |
| 에이전트 | 32.1 | -1.19 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 17.8 | -2.15 | 실측 | [[mmmu-pro]] 36.531791907514396%×1.0 |
| 긴문맥 | 33.8 | -1.08 | 추정 | (추정) |
| 지시 따르기 | 34.1 | -1.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
