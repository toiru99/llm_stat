---
type: Model
title: Gemini 2.5 Flash (Apr) (non-reasoning)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 34.3, z: -0.61, r: 40.8, estimated: false }  # 전문 지식
  reasoning: { s: 30.5, z: -0.62, r: 40.6, estimated: false }  # 추론
  coding: { s: 22.2, z: -0.53, r: 42.1, estimated: true }  # 코딩
  agentic: { s: 17.1, z: -0.6, r: 40.9, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.5, z: -0.4, r: 44.0, estimated: false }  # 멀티모달
  long_context: { s: 33.2, z: -0.6, r: 41.0, estimated: true }  # 긴문맥
  instruction: { s: 43.3, z: -0.42, r: 43.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash (Apr) (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Gemini 2.5 Flash (Apr) (non-reasoning)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 멀티모달, 지시 따르기
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.8 | -0.61 | 실측 | [[gpqa-diamond]] 59.4%×0.4, [[humanitys-last-exam]] 3.8%×0.3 |
| 추론 | 40.6 | -0.62 | 실측 | [[gpqa-diamond]] 59.4%×1.0, [[humanitys-last-exam]] 3.8%×1.0 |
| 코딩 | 42.1 | -0.53 | 추정 | (추정) |
| 에이전트 | 40.9 | -0.6 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.0 | -0.4 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 41.0 | -0.6 | 추정 | (추정) |
| 지시 따르기 | 43.7 | -0.42 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
