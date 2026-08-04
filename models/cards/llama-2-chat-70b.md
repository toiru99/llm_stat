---
type: Model
title: Llama 2 Chat 70B
creator: Meta
license: Open
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 4100
status: past
size_class: Medium
params_b: 70
is_reasoning: false
radar:
  knowledge: { s: 18.9, z: -1.05, r: 34.2, estimated: false }  # 전문 지식
  reasoning: { s: 17.5, z: -0.85, r: 37.2, estimated: false }  # 추론
  coding: { s: 22.3, z: -1.03, r: 34.5, estimated: true }  # 코딩
  agentic: { s: 13.4, z: -0.9, r: 36.5, estimated: true }  # 에이전트
  trust: { s: 20.9, z: -0.35, r: 44.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 17.1, z: -0.96, r: 35.6, estimated: true }  # 긴문맥
  instruction: { s: 31.8, z: -0.88, r: 36.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 2 Chat 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-04
timestamp: 2026-08-04T00:00:00Z
---

# Llama 2 Chat 70B

Meta · Open · Medium(70B) · 컨텍스트 4k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 코딩, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 4k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.2 | -1.05 | 실측 | [[gpqa-diamond]] 33.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 37.2 | -0.85 | 실측 | [[gpqa-diamond]] 33.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 34.5 | -1.03 | 추정 | (추정) |
| 에이전트 | 36.5 | -0.9 | 추정 | (추정) |
| 신뢰성 | 44.8 | -0.35 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.6 | -0.96 | 추정 | (추정) |
| 지시 따르기 | 36.8 | -0.88 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
