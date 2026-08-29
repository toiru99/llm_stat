---
type: Model
title: Llama 2 Chat 13B
creator: Meta
license: Open
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 4100
status: past
size_class: Small
params_b: 13
is_reasoning: false
radar:
  knowledge: { s: 18.0, z: -1.13, r: 33.1, estimated: false }  # 전문 지식
  reasoning: { s: 16.6, z: -0.9, r: 36.5, estimated: false }  # 추론
  coding: { s: 20.0, z: -1.15, r: 32.7, estimated: false }  # 코딩
  agentic: { s: 12.3, z: -0.96, r: 35.6, estimated: true }  # 에이전트
  trust: { s: 8.1, z: -0.76, r: 38.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 15.0, z: -1.05, r: 34.2, estimated: true }  # 긴문맥
  instruction: { s: 34.1, z: -0.77, r: 38.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 2 Chat 13B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Llama 2 Chat 13B

Meta · Open · Small(13B) · 컨텍스트 4k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 4k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.1 | -1.13 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.5 | -0.9 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 32.7 | -1.15 | 실측 | [[scicode]] 12.0%×1.0 |
| 에이전트 | 35.6 | -0.96 | 추정 | (추정) |
| 신뢰성 | 38.7 | -0.76 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.2 | -1.05 | 추정 | (추정) |
| 지시 따르기 | 38.5 | -0.77 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
