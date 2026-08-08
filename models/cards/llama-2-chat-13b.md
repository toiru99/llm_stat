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
  knowledge: { s: 18.1, z: -1.08, r: 33.8, estimated: false }  # 전문 지식
  reasoning: { s: 16.8, z: -0.89, r: 36.6, estimated: false }  # 추론
  coding: { s: 20.0, z: -1.13, r: 33.0, estimated: false }  # 코딩
  agentic: { s: 12.5, z: -0.93, r: 36.1, estimated: true }  # 에이전트
  trust: { s: 24.1, z: -0.1, r: 48.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 10.8, z: -1.17, r: 32.5, estimated: true }  # 긴문맥
  instruction: { s: 29.4, z: -1.0, r: 35.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 2 Chat 13B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# Llama 2 Chat 13B

Meta · Open · Small(13B) · 컨텍스트 4k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 4k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.8 | -1.08 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.6 | -0.89 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 33.0 | -1.13 | 실측 | [[scicode]] 12.0%×1.0 |
| 에이전트 | 36.1 | -0.93 | 추정 | (추정) |
| 신뢰성 | 48.5 | -0.1 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.5 | -1.17 | 추정 | (추정) |
| 지시 따르기 | 35.1 | -1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
