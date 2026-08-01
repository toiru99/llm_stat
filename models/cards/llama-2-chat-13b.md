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
  knowledge: { s: 18.3, z: -1.08, r: 33.7, estimated: false }  # 전문 지식
  reasoning: { s: 16.9, z: -0.88, r: 36.8, estimated: false }  # 추론
  coding: { s: 20.0, z: -1.13, r: 33.1, estimated: false }  # 코딩
  agentic: { s: 11.9, z: -0.95, r: 35.7, estimated: true }  # 에이전트
  trust: { s: 25.0, z: -0.15, r: 47.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 14.4, z: -1.04, r: 34.4, estimated: true }  # 긴문맥
  instruction: { s: 29.1, z: -0.99, r: 35.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 2 Chat 13B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-01
timestamp: 2026-08-01T00:00:00Z
---

# Llama 2 Chat 13B

Meta · Open · Small(13B) · 컨텍스트 4k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 4k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.7 | -1.08 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.8 | -0.88 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 33.1 | -1.13 | 실측 | [[scicode]] 12.0%×1.0 |
| 에이전트 | 35.7 | -0.95 | 추정 | (추정) |
| 신뢰성 | 47.8 | -0.15 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.4 | -1.04 | 추정 | (추정) |
| 지시 따르기 | 35.1 | -0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
