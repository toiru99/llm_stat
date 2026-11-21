---
type: Model
title: Grok 2
creator: SpaceXAI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131072
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.4, z: -0.91, r: 36.3, estimated: false }  # 전문 지식
  reasoning: { s: 25.2, z: -0.51, r: 42.3, estimated: false }  # 추론
  coding: { s: 42.5, z: 0.08, r: 51.3, estimated: true }  # 코딩
  agentic: { s: 20.9, z: -0.83, r: 37.5, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 18.0, z: -1.06, r: 34.1, estimated: true }  # 긴문맥
  instruction: { s: 22.6, z: -1.31, r: 30.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Grok 2

SpaceXAI · Open · Large · 컨텍스트 131k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.3 | -0.91 | 실측 | [[gpqa-diamond]] 51.010101010101%×0.4, [[humanitys-last-exam]] 3.06%×0.3 |
| 추론 | 42.3 | -0.51 | 실측 | [[gpqa-diamond]] 51.010101010101%×1.0, [[humanitys-last-exam]] 3.06%×1.0 |
| 코딩 | 51.3 | +0.08 | 추정 | (추정) |
| 에이전트 | 37.5 | -0.83 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.1 | -1.06 | 추정 | (추정) |
| 지시 따르기 | 30.3 | -1.31 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
