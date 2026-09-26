---
type: Model
title: Grok 2
creator: SpaceXAI
license: Open
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.7, z: -0.61, r: 40.8, estimated: false }  # 전문 지식
  reasoning: { s: 25.5, z: -0.47, r: 42.9, estimated: false }  # 추론
  coding: { s: 13.4, z: -0.75, r: 38.7, estimated: true }  # 코딩
  agentic: { s: 27.3, z: -0.4, r: 44.0, estimated: true }  # 에이전트
  trust: { s: 19.1, z: -0.31, r: 45.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 39.4, z: -0.34, r: 44.9, estimated: true }  # 긴문맥
  instruction: { s: 46.5, z: -0.29, r: 45.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Grok 2

SpaceXAI · Open · Large · 컨텍스트 131k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.8 | -0.61 | 실측 | [[gpqa-diamond]] 51.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 42.9 | -0.47 | 실측 | [[gpqa-diamond]] 51.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 38.7 | -0.75 | 추정 | (추정) |
| 에이전트 | 44.0 | -0.4 | 추정 | (추정) |
| 신뢰성 | 45.4 | -0.31 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.9 | -0.34 | 추정 | (추정) |
| 지시 따르기 | 45.7 | -0.29 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
