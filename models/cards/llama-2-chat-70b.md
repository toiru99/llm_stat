---
type: Model
title: Llama 2 Chat 70B
creator: Meta
license: Open
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 4100
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 18.1, z: -1.11, r: 33.3, estimated: false }  # 전문 지식
  reasoning: { s: 16.7, z: -0.89, r: 36.6, estimated: false }  # 추론
  coding: { s: 0.5, z: -1.2, r: 32.1, estimated: true }  # 코딩
  agentic: { s: 2.0, z: -1.38, r: 29.4, estimated: true }  # 에이전트
  trust: { s: 25.5, z: -0.01, r: 49.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 4.3, z: -1.41, r: 28.9, estimated: true }  # 긴문맥
  instruction: { s: 29.5, z: -1.0, r: 34.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 2 Chat 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Llama 2 Chat 70B

Meta · Open · Medium · 컨텍스트 4k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 4k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.3 | -1.11 | 실측 | [[gpqa-diamond]] 33.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.6 | -0.89 | 실측 | [[gpqa-diamond]] 33.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 32.1 | -1.2 | 추정 | (추정) |
| 에이전트 | 29.4 | -1.38 | 추정 | (추정) |
| 신뢰성 | 49.8 | -0.01 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.9 | -1.41 | 추정 | (추정) |
| 지시 따르기 | 34.9 | -1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
