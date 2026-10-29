---
type: Model
title: OpenChat 3.5
creator: OpenChat
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 8189
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 11.5, z: -1.67, r: 24.9, estimated: false }  # 전문 지식
  reasoning: { s: 10.9, z: -1.57, r: 26.4, estimated: false }  # 추론
  coding: { s: 0.3, z: -1.23, r: 31.5, estimated: true }  # 코딩
  agentic: { s: 1.9, z: -1.11, r: 33.4, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 2.9, z: -1.48, r: 27.8, estimated: true }  # 긴문맥
  instruction: { s: 14.5, z: -1.6, r: 26.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — OpenChat 3.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# OpenChat 3.5

OpenChat · Open · Small · 컨텍스트 8k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 8k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 24.9 | -1.67 | 실측 | [[gpqa-diamond]] 23.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 26.4 | -1.57 | 실측 | [[gpqa-diamond]] 23.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 31.5 | -1.23 | 추정 | (추정) |
| 에이전트 | 33.4 | -1.11 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.8 | -1.48 | 추정 | (추정) |
| 지시 따르기 | 26.0 | -1.6 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
