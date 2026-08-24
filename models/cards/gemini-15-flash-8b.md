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
  knowledge: { s: 20.7, z: -0.98, r: 35.2, estimated: false }  # 전문 지식
  reasoning: { s: 19.0, z: -0.81, r: 37.8, estimated: false }  # 추론
  coding: { s: 38.3, z: -0.42, r: 43.7, estimated: false }  # 코딩
  agentic: { s: 20.0, z: -0.67, r: 40.0, estimated: true }  # 에이전트
  trust: { s: 16.3, z: -0.51, r: 42.4, estimated: true }  # 신뢰성
  multimodal: { s: 31.4, z: -1.98, r: 20.3, estimated: false }  # 멀티모달
  long_context: { s: 24.7, z: -0.78, r: 38.2, estimated: true }  # 긴문맥
  instruction: { s: 30.4, z: -0.98, r: 35.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Flash-8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# Gemini 1.5 Flash-8B

Google · Proprietary · Small(8B) · 컨텍스트 1M · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.2 | -0.98 | 실측 | [[gpqa-diamond]] 36.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 37.8 | -0.81 | 실측 | [[gpqa-diamond]] 36.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 43.7 | -0.42 | 실측 | [[scicode]] 23.0%×1.0 |
| 에이전트 | 40.0 | -0.67 | 추정 | (추정) |
| 신뢰성 | 42.4 | -0.51 | 추정 | (추정) |
| 멀티모달 | 20.3 | -1.98 | 실측 | [[mmmu-pro]] 37.0%×1.0 |
| 긴문맥 | 38.2 | -0.78 | 추정 | (추정) |
| 지시 따르기 | 35.4 | -0.98 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
