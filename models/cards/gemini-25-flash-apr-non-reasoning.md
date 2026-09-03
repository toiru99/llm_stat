---
type: Model
title: Gemini 2.5 Flash (Apr) (Non-reasoning)
creator: Google
license: Proprietary
intelligence_index: 12.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 35.2, z: -0.27, r: 46.0, estimated: false }  # 전문 지식
  reasoning: { s: 31.4, z: -0.17, r: 47.5, estimated: false }  # 추론
  coding: { s: 37.1, z: -0.42, r: 43.7, estimated: false }  # 코딩
  agentic: { s: 19.2, z: -0.71, r: 39.4, estimated: true }  # 에이전트
  trust: { s: 17.7, z: -0.33, r: 45.1, estimated: true }  # 신뢰성
  multimodal: { s: 66.2, z: -0.21, r: 46.8, estimated: false }  # 멀티모달
  long_context: { s: 28.8, z: -0.65, r: 40.2, estimated: true }  # 긴문맥
  instruction: { s: 43.7, z: -0.39, r: 44.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash (Apr) (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Gemini 2.5 Flash (Apr) (Non-reasoning)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 멀티모달
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.0 | -0.27 | 실측 | [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 47.5 | -0.17 | 실측 | [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 43.7 | -0.42 | 실측 | [[scicode]] 23.0%×1.0 |
| 에이전트 | 39.4 | -0.71 | 추정 | (추정) |
| 신뢰성 | 45.1 | -0.33 | 추정 | (추정) |
| 멀티모달 | 46.8 | -0.21 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 40.2 | -0.65 | 추정 | (추정) |
| 지시 따르기 | 44.2 | -0.39 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
