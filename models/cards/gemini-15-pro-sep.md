---
type: Model
title: Gemini 1.5 Pro (Sep)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 34.5, z: -0.62, r: 40.7, estimated: false }  # 전문 지식
  reasoning: { s: 30.8, z: -0.23, r: 46.5, estimated: false }  # 추론
  coding: { s: 44.5, z: 0.15, r: 52.3, estimated: true }  # 코딩
  agentic: { s: 32.0, z: -0.45, r: 43.3, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 54.0, z: -0.89, r: 36.7, estimated: false }  # 멀티모달
  long_context: { s: 29.3, z: -0.72, r: 39.2, estimated: true }  # 긴문맥
  instruction: { s: 42.7, z: -0.47, r: 43.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Pro (Sep)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Gemini 1.5 Pro (Sep)

Google · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.7 | -0.62 | 실측 | [[gpqa-diamond]] 58.8888888888889%×0.4, [[humanitys-last-exam]] 4.64%×0.3 |
| 추론 | 46.5 | -0.23 | 실측 | [[gpqa-diamond]] 58.8888888888889%×1.0, [[humanitys-last-exam]] 4.64%×1.0 |
| 코딩 | 52.3 | +0.15 | 추정 | (추정) |
| 에이전트 | 43.3 | -0.45 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 36.7 | -0.89 | 실측 | [[mmmu-pro]] 55.028901734104%×1.0 |
| 긴문맥 | 39.2 | -0.72 | 추정 | (추정) |
| 지시 따르기 | 43.0 | -0.47 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
