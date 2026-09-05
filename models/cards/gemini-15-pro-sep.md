---
type: Model
title: Gemini 1.5 Pro (Sep)
creator: Google
license: Proprietary
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 35.5, z: -0.26, r: 46.1, estimated: false }  # 전문 지식
  reasoning: { s: 31.9, z: -0.15, r: 47.7, estimated: false }  # 추론
  coding: { s: 22.0, z: -0.35, r: 44.7, estimated: true }  # 코딩
  agentic: { s: 39.8, z: 0.09, r: 51.3, estimated: true }  # 에이전트
  trust: { s: 10.1, z: -0.68, r: 39.8, estimated: true }  # 신뢰성
  multimodal: { s: 55.6, z: -0.72, r: 39.2, estimated: false }  # 멀티모달
  long_context: { s: 33.9, z: -0.47, r: 43.0, estimated: true }  # 긴문맥
  instruction: { s: 50.7, z: -0.08, r: 48.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Pro (Sep)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Gemini 1.5 Pro (Sep)

Google · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 신뢰성, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.1 | -0.26 | 실측 | [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 47.7 | -0.15 | 실측 | [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 44.7 | -0.35 | 추정 | (추정) |
| 에이전트 | 51.3 | +0.09 | 추정 | (추정) |
| 신뢰성 | 39.8 | -0.68 | 추정 | (추정) |
| 멀티모달 | 39.2 | -0.72 | 실측 | [[mmmu-pro]] 55.0%×1.0 |
| 긴문맥 | 43.0 | -0.47 | 추정 | (추정) |
| 지시 따르기 | 48.8 | -0.08 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
