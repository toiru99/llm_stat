---
type: Model
title: Gemini 1.5 Flash (Sep)
creator: Google
license: Proprietary
intelligence_index: 8.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 26.1, z: -0.69, r: 39.7, estimated: false }  # 전문 지식
  reasoning: { s: 23.4, z: -0.53, r: 42.0, estimated: false }  # 추론
  coding: { s: 45.0, z: -0.04, r: 49.5, estimated: false }  # 코딩
  agentic: { s: 28.1, z: -0.31, r: 45.4, estimated: true }  # 에이전트
  trust: { s: 28.0, z: 0.02, r: 50.3, estimated: true }  # 신뢰성
  multimodal: { s: 47.8, z: -1.13, r: 33.1, estimated: false }  # 멀티모달
  long_context: { s: 33.2, z: -0.44, r: 43.3, estimated: true }  # 긴문맥
  instruction: { s: 40.8, z: -0.47, r: 43.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Flash (Sep)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Gemini 1.5 Flash (Sep)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.7 | -0.69 | 실측 | [[gpqa-diamond]] 46.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 42.0 | -0.53 | 실측 | [[gpqa-diamond]] 46.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 49.5 | -0.04 | 실측 | [[scicode]] 27.0%×1.0 |
| 에이전트 | 45.4 | -0.31 | 추정 | (추정) |
| 신뢰성 | 50.3 | +0.02 | 추정 | (추정) |
| 멀티모달 | 33.1 | -1.13 | 실측 | [[mmmu-pro]] 48.0%×1.0 |
| 긴문맥 | 43.3 | -0.44 | 추정 | (추정) |
| 지시 따르기 | 43.0 | -0.47 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
