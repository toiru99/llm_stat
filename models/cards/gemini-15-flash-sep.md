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
  knowledge: { s: 25.3, z: -0.82, r: 37.6, estimated: false }  # 전문 지식
  reasoning: { s: 22.6, z: -0.66, r: 40.1, estimated: false }  # 추론
  coding: { s: 5.1, z: -1.11, r: 33.4, estimated: true }  # 코딩
  agentic: { s: 4.4, z: -1.05, r: 34.3, estimated: true }  # 에이전트
  trust: { s: 12.9, z: -0.65, r: 40.3, estimated: true }  # 신뢰성
  multimodal: { s: 45.2, z: -1.35, r: 29.8, estimated: false }  # 멀티모달
  long_context: { s: 9.7, z: -1.3, r: 30.5, estimated: true }  # 긴문맥
  instruction: { s: 29.3, z: -1.08, r: 33.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Flash (Sep)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Gemini 1.5 Flash (Sep)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.6 | -0.82 | 실측 | [[gpqa-diamond]] 46.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 40.1 | -0.66 | 실측 | [[gpqa-diamond]] 46.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 33.4 | -1.11 | 추정 | (추정) |
| 에이전트 | 34.3 | -1.05 | 추정 | (추정) |
| 신뢰성 | 40.3 | -0.65 | 추정 | (추정) |
| 멀티모달 | 29.8 | -1.35 | 실측 | [[mmmu-pro]] 48.0%×1.0 |
| 긴문맥 | 30.5 | -1.3 | 추정 | (추정) |
| 지시 따르기 | 33.8 | -1.08 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
