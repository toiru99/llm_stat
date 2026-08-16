---
type: Model
title: Grok 2
creator: SpaceXAI
license: Open
intelligence_index: 8.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: past
size_class: Large
params_b: 270
is_reasoning: false
radar:
  knowledge: { s: 29.2, z: -0.57, r: 41.4, estimated: false }  # 전문 지식
  reasoning: { s: 26.0, z: -0.46, r: 43.1, estimated: false }  # 추론
  coding: { s: 46.7, z: -0.06, r: 49.1, estimated: false }  # 코딩
  agentic: { s: 34.8, z: -0.07, r: 48.9, estimated: true }  # 에이전트
  trust: { s: 31.2, z: 0.18, r: 52.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 23.2, z: -0.82, r: 37.7, estimated: true }  # 긴문맥
  instruction: { s: 42.6, z: -0.47, r: 42.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-16
timestamp: 2026-08-16T00:00:00Z
---

# Grok 2

SpaceXAI · Open · Large(270B) · 컨텍스트 131k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.4 | -0.57 | 실측 | [[gpqa-diamond]] 51.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 43.1 | -0.46 | 실측 | [[gpqa-diamond]] 51.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 49.1 | -0.06 | 실측 | [[scicode]] 28.0%×1.0 |
| 에이전트 | 48.9 | -0.07 | 추정 | (추정) |
| 신뢰성 | 52.7 | +0.18 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.7 | -0.82 | 추정 | (추정) |
| 지시 따르기 | 42.9 | -0.47 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
