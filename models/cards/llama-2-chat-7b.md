---
type: Model
title: Llama 2 Chat 7B
creator: Meta
license: Open
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 4100
status: past
size_class: Small
params_b: 7
is_reasoning: false
radar:
  knowledge: { s: 13.0, z: -1.33, r: 30.0, estimated: false }  # 전문 지식
  reasoning: { s: 12.5, z: -1.1, r: 33.5, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.96, r: 20.6, estimated: false }  # 코딩
  agentic: { s: 9.1, z: -1.06, r: 34.1, estimated: true }  # 에이전트
  trust: { s: 16.8, z: -0.54, r: 41.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 2.7, z: -1.38, r: 29.2, estimated: true }  # 긴문맥
  instruction: { s: 26.4, z: -1.1, r: 33.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 2 Chat 7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-31
timestamp: 2026-07-31T00:00:00Z
---

# Llama 2 Chat 7B

Meta · Open · Small(7B) · 컨텍스트 4k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $0.05 · 출력 $0.25 · 혼합 $None/1M · None t/s · TTFT Nones · 4k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.0 | -1.33 | 실측 | [[gpqa-diamond]] 23.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 33.5 | -1.1 | 실측 | [[gpqa-diamond]] 23.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 20.6 | -1.96 | 실측 | [[scicode]] 0.0%×1.0 |
| 에이전트 | 34.1 | -1.06 | 추정 | (추정) |
| 신뢰성 | 41.9 | -0.54 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.2 | -1.38 | 추정 | (추정) |
| 지시 따르기 | 33.5 | -1.1 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
