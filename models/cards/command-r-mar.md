---
type: Model
title: Command-R (Mar)
creator: Cohere
license: Open
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 14.8, z: -1.27, r: 30.9, estimated: false }  # 전문 지식
  reasoning: { s: 13.8, z: -1.02, r: 34.6, estimated: false }  # 추론
  coding: { s: 3.0, z: -1.11, r: 33.3, estimated: true }  # 코딩
  agentic: { s: 11.3, z: -1.02, r: 34.7, estimated: true }  # 에이전트
  trust: { s: 23.7, z: -0.1, r: 48.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 13.8, z: -1.13, r: 33.1, estimated: true }  # 긴문맥
  instruction: { s: 32.1, z: -0.89, r: 36.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Command-R (Mar)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# Command-R (Mar)

Cohere · Open · Small · 컨텍스트 128k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.9 | -1.27 | 실측 | [[gpqa-diamond]] 28.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 34.6 | -1.02 | 실측 | [[gpqa-diamond]] 28.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 33.3 | -1.11 | 추정 | (추정) |
| 에이전트 | 34.7 | -1.02 | 추정 | (추정) |
| 신뢰성 | 48.6 | -0.1 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.1 | -1.13 | 추정 | (추정) |
| 지시 따르기 | 36.7 | -0.89 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
