---
type: Model
title: Gemini 2.5 Flash (Apr) (non-reasoning)
creator: Google
license: Proprietary
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 34.7, z: -0.37, r: 44.5, estimated: false }  # 전문 지식
  reasoning: { s: 31.0, z: -0.26, r: 46.1, estimated: false }  # 추론
  coding: { s: 27.4, z: -0.32, r: 45.2, estimated: true }  # 코딩
  agentic: { s: 45.1, z: 0.23, r: 53.4, estimated: true }  # 에이전트
  trust: { s: 22.4, z: -0.2, r: 47.0, estimated: true }  # 신뢰성
  multimodal: { s: 64.4, z: -0.35, r: 44.7, estimated: false }  # 멀티모달
  long_context: { s: 41.4, z: -0.32, r: 45.2, estimated: true }  # 긴문맥
  instruction: { s: 51.8, z: -0.11, r: 48.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash (Apr) (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# Gemini 2.5 Flash (Apr) (non-reasoning)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.5 | -0.37 | 실측 | [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 46.1 | -0.26 | 실측 | [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 45.2 | -0.32 | 추정 | (추정) |
| 에이전트 | 53.4 | +0.23 | 추정 | (추정) |
| 신뢰성 | 47.0 | -0.2 | 추정 | (추정) |
| 멀티모달 | 44.7 | -0.35 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 45.2 | -0.32 | 추정 | (추정) |
| 지시 따르기 | 48.3 | -0.11 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
