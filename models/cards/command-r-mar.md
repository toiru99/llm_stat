---
type: Model
title: Command-R (Mar)
creator: Cohere
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 14.5, z: -1.59, r: 26.2, estimated: false }  # 전문 지식
  reasoning: { s: 13.3, z: -1.1, r: 33.5, estimated: false }  # 추론
  coding: { s: 0.2, z: -1.35, r: 29.7, estimated: true }  # 코딩
  agentic: { s: 1.3, z: -1.51, r: 27.4, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 1.2, z: -1.56, r: 26.7, estimated: true }  # 긴문맥
  instruction: { s: 22.6, z: -1.31, r: 30.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Command-R (Mar)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Command-R (Mar)

Cohere · Open · Small · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 지시 따르기
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 26.2 | -1.59 | 실측 | [[gpqa-diamond]] 28.383838383838402%×0.4, [[humanitys-last-exam]] 4.79%×0.3 |
| 추론 | 33.5 | -1.1 | 실측 | [[gpqa-diamond]] 28.383838383838402%×1.0, [[humanitys-last-exam]] 4.79%×1.0 |
| 코딩 | 29.7 | -1.35 | 추정 | (추정) |
| 에이전트 | 27.4 | -1.51 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.7 | -1.56 | 추정 | (추정) |
| 지시 따르기 | 30.4 | -1.31 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
