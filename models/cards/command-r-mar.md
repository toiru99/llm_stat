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
  knowledge: { s: 14.8, z: -1.28, r: 30.8, estimated: false }  # 전문 지식
  reasoning: { s: 13.8, z: -1.03, r: 34.5, estimated: false }  # 추론
  coding: { s: 3.2, z: -1.14, r: 32.9, estimated: true }  # 코딩
  agentic: { s: 11.2, z: -1.05, r: 34.2, estimated: true }  # 에이전트
  trust: { s: 29.6, z: 0.15, r: 52.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 13.6, z: -1.15, r: 32.7, estimated: true }  # 긴문맥
  instruction: { s: 34.5, z: -0.82, r: 37.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Command-R (Mar)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
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
| 전문 지식 | 30.8 | -1.28 | 실측 | [[gpqa-diamond]] 28.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 34.5 | -1.03 | 실측 | [[gpqa-diamond]] 28.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 32.9 | -1.14 | 추정 | (추정) |
| 에이전트 | 34.2 | -1.05 | 추정 | (추정) |
| 신뢰성 | 52.2 | +0.15 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.7 | -1.15 | 추정 | (추정) |
| 지시 따르기 | 37.7 | -0.82 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
