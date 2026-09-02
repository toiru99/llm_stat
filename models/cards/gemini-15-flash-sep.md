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
  knowledge: { s: 25.7, z: -0.73, r: 39.1, estimated: false }  # 전문 지식
  reasoning: { s: 22.9, z: -0.58, r: 41.3, estimated: false }  # 추론
  coding: { s: 43.5, z: -0.13, r: 48.0, estimated: false }  # 코딩
  agentic: { s: 22.0, z: -0.59, r: 41.1, estimated: true }  # 에이전트
  trust: { s: 29.7, z: 0.26, r: 53.9, estimated: true }  # 신뢰성
  multimodal: { s: 47.1, z: -1.17, r: 32.4, estimated: false }  # 멀티모달
  long_context: { s: 8.1, z: -1.28, r: 30.9, estimated: true }  # 긴문맥
  instruction: { s: 23.1, z: -1.24, r: 31.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 1.5 Flash (Sep)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Gemini 1.5 Flash (Sep)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.1 | -0.73 | 실측 | [[gpqa-diamond]] 46.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 41.3 | -0.58 | 실측 | [[gpqa-diamond]] 46.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 48.0 | -0.13 | 실측 | [[scicode]] 27.0%×1.0 |
| 에이전트 | 41.1 | -0.59 | 추정 | (추정) |
| 신뢰성 | 53.9 | +0.26 | 추정 | (추정) |
| 멀티모달 | 32.4 | -1.17 | 실측 | [[mmmu-pro]] 48.0%×1.0 |
| 긴문맥 | 30.9 | -1.28 | 추정 | (추정) |
| 지시 따르기 | 31.4 | -1.24 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
