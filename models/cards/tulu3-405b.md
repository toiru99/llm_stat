---
type: Model
title: Tulu3 405B
creator: Allen Institute for AI
license: Open
intelligence_index: 8.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 405
is_reasoning: false
radar:
  knowledge: { s: 29.8, z: -0.55, r: 41.7, estimated: false }  # 전문 지식
  reasoning: { s: 26.6, z: -0.45, r: 43.3, estimated: false }  # 추론
  coding: { s: 50.0, z: 0.05, r: 50.7, estimated: false }  # 코딩
  agentic: { s: 31.8, z: -0.21, r: 46.9, estimated: true }  # 에이전트
  trust: { s: 45.5, z: 0.7, r: 60.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 31.5, z: -0.58, r: 41.3, estimated: true }  # 긴문맥
  instruction: { s: 48.4, z: -0.24, r: 46.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Tulu3 405B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Tulu3 405B

Allen Institute for AI · Open · Large(405B) · 컨텍스트 128k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.7 | -0.55 | 실측 | [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 43.3 | -0.45 | 실측 | [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 50.7 | +0.05 | 실측 | [[scicode]] 30.0%×1.0 |
| 에이전트 | 46.9 | -0.21 | 추정 | (추정) |
| 신뢰성 | 60.5 | +0.7 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 41.3 | -0.58 | 추정 | (추정) |
| 지시 따르기 | 46.3 | -0.24 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
