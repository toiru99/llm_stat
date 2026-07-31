---
type: Model
title: Gemini 1.5 Pro (Sep)
creator: Google
license: Proprietary
intelligence_index: 10.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 36.6, z: -0.22, r: 46.7, estimated: false }  # 전문 지식
  reasoning: { s: 33.0, z: -0.07, r: 48.9, estimated: false }  # 추론
  coding: { s: 50.0, z: 0.13, r: 51.9, estimated: false }  # 코딩
  agentic: { s: 30.4, z: -0.23, r: 46.5, estimated: true }  # 에이전트
  trust: { s: 20.2, z: -0.38, r: 44.4, estimated: true }  # 신뢰성
  multimodal: { s: 57.1, z: -0.7, r: 39.5, estimated: false }  # 멀티모달
  long_context: { s: 51.6, z: 0.06, r: 50.9, estimated: true }  # 긴문맥
  instruction: { s: 60.6, z: 0.31, r: 54.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Pro (Sep)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-31
timestamp: 2026-07-31T00:00:00Z
---

# Gemini 1.5 Pro (Sep)

Google · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 신뢰성, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.7 | -0.22 | 실측 | [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 48.9 | -0.07 | 실측 | [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 51.9 | +0.13 | 실측 | [[scicode]] 30.0%×1.0 |
| 에이전트 | 46.5 | -0.23 | 추정 | (추정) |
| 신뢰성 | 44.4 | -0.38 | 추정 | (추정) |
| 멀티모달 | 39.5 | -0.7 | 실측 | [[mmmu-pro]] 55.0%×1.0 |
| 긴문맥 | 50.9 | +0.06 | 추정 | (추정) |
| 지시 따르기 | 54.6 | +0.31 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
