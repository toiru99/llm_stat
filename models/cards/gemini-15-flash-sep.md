---
type: Model
title: Gemini 1.5 Flash (Sep)
creator: Google
license: Proprietary
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 25.3, z: -0.77, r: 38.4, estimated: false }  # 전문 지식
  reasoning: { s: 22.6, z: -0.62, r: 40.7, estimated: false }  # 추론
  coding: { s: 4.3, z: -1.07, r: 34.0, estimated: true }  # 코딩
  agentic: { s: 12.5, z: -0.97, r: 35.4, estimated: true }  # 에이전트
  trust: { s: 24.0, z: -0.08, r: 48.8, estimated: true }  # 신뢰성
  multimodal: { s: 45.2, z: -1.27, r: 31.0, estimated: false }  # 멀티모달
  long_context: { s: 12.1, z: -1.17, r: 32.5, estimated: true }  # 긴문맥
  instruction: { s: 21.5, z: -1.34, r: 30.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Flash (Sep)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Gemini 1.5 Flash (Sep)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.4 | -0.77 | 실측 | [[gpqa-diamond]] 46.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 40.7 | -0.62 | 실측 | [[gpqa-diamond]] 46.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 34.0 | -1.07 | 추정 | (추정) |
| 에이전트 | 35.4 | -0.97 | 추정 | (추정) |
| 신뢰성 | 48.8 | -0.08 | 추정 | (추정) |
| 멀티모달 | 31.0 | -1.27 | 실측 | [[mmmu-pro]] 48.0%×1.0 |
| 긴문맥 | 32.5 | -1.17 | 추정 | (추정) |
| 지시 따르기 | 30.0 | -1.34 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
