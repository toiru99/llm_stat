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
  knowledge: { s: 30.4, z: -0.51, r: 42.4, estimated: false }  # 전문 지식
  reasoning: { s: 27.3, z: -0.35, r: 44.7, estimated: false }  # 추론
  coding: { s: 46.7, z: -0.01, r: 49.9, estimated: false }  # 코딩
  agentic: { s: 30.2, z: -0.24, r: 46.4, estimated: true }  # 에이전트
  trust: { s: 32.8, z: 0.22, r: 53.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 21.3, z: -0.83, r: 37.5, estimated: true }  # 긴문맥
  instruction: { s: 33.1, z: -0.83, r: 37.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# Grok 2

SpaceXAI · Open · Large(270B) · 컨텍스트 131k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.4 | -0.51 | 실측 | [[gpqa-diamond]] 51.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 44.7 | -0.35 | 실측 | [[gpqa-diamond]] 51.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 49.9 | -0.01 | 실측 | [[scicode]] 28.0%×1.0 |
| 에이전트 | 46.4 | -0.24 | 추정 | (추정) |
| 신뢰성 | 53.3 | +0.22 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.5 | -0.83 | 추정 | (추정) |
| 지시 따르기 | 37.6 | -0.83 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
