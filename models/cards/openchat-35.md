---
type: Model
title: OpenChat 3.5
creator: OpenChat
license: Open
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 8189
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 12.1, z: -1.37, r: 29.4, estimated: false }  # 전문 지식
  reasoning: { s: 11.6, z: -1.16, r: 32.6, estimated: false }  # 추론
  coding: { s: 3.7, z: -1.8, r: 23.0, estimated: true }  # 코딩
  agentic: { s: 7.3, z: -1.13, r: 33.1, estimated: true }  # 에이전트
  trust: { s: 15.3, z: -0.59, r: 41.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 2.2, z: -1.38, r: 29.3, estimated: true }  # 긴문맥
  instruction: { s: 32.9, z: -0.81, r: 37.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — OpenChat 3.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-20
timestamp: 2026-07-20T00:00:00Z
---

# OpenChat 3.5

OpenChat · Open · Unknown · 컨텍스트 8k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 8k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.4 | -1.37 | 실측 | [[gpqa-diamond]] 23.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 32.6 | -1.16 | 실측 | [[gpqa-diamond]] 23.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 23.0 | -1.8 | 추정 | (추정) |
| 에이전트 | 33.1 | -1.13 | 추정 | (추정) |
| 신뢰성 | 41.2 | -0.59 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.3 | -1.38 | 추정 | (추정) |
| 지시 따르기 | 37.8 | -0.81 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
