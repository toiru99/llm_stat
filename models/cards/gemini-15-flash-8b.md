---
type: Model
title: Gemini 1.5 Flash-8B
creator: Google
license: Proprietary
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1050000
status: past
size_class: Small
params_b: 8
is_reasoning: false
radar:
  knowledge: { s: 20.9, z: -0.95, r: 35.7, estimated: false }  # 전문 지식
  reasoning: { s: 19.2, z: -0.77, r: 38.4, estimated: false }  # 추론
  coding: { s: 38.3, z: -0.37, r: 44.4, estimated: false }  # 코딩
  agentic: { s: 21.0, z: -0.58, r: 41.2, estimated: true }  # 에이전트
  trust: { s: 25.8, z: -0.02, r: 49.6, estimated: true }  # 신뢰성
  multimodal: { s: 31.4, z: -1.95, r: 20.8, estimated: false }  # 멀티모달
  long_context: { s: 27.1, z: -0.67, r: 39.9, estimated: true }  # 긴문맥
  instruction: { s: 32.1, z: -0.89, r: 36.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Flash-8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-09
timestamp: 2026-08-09T00:00:00Z
---

# Gemini 1.5 Flash-8B

Google · Proprietary · Small(8B) · 컨텍스트 1M · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.7 | -0.95 | 실측 | [[gpqa-diamond]] 36.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 38.4 | -0.77 | 실측 | [[gpqa-diamond]] 36.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 44.4 | -0.37 | 실측 | [[scicode]] 23.0%×1.0 |
| 에이전트 | 41.2 | -0.58 | 추정 | (추정) |
| 신뢰성 | 49.6 | -0.02 | 추정 | (추정) |
| 멀티모달 | 20.8 | -1.95 | 실측 | [[mmmu-pro]] 37.0%×1.0 |
| 긴문맥 | 39.9 | -0.67 | 추정 | (추정) |
| 지시 따르기 | 36.7 | -0.89 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
