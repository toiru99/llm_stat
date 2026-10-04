---
type: Model
title: Qwen3 4B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: past
size_class: Tiny
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 21.4, z: -0.98, r: 35.3, estimated: false }  # 전문 지식
  reasoning: { s: 19.1, z: -0.79, r: 38.1, estimated: false }  # 추론
  coding: { s: 11.3, z: -0.86, r: 37.1, estimated: true }  # 코딩
  agentic: { s: 16.3, z: -0.86, r: 37.1, estimated: true }  # 에이전트
  trust: { s: 25.0, z: -0.07, r: 49.0, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 12.9, z: -1.17, r: 32.4, estimated: true }  # 긴문맥
  instruction: { s: 26.1, z: -1.17, r: 32.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 4B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# Qwen3 4B (non-reasoning)

Alibaba · Open · Tiny · 컨텍스트 32k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.3 | -0.98 | 실측 | [[gpqa-diamond]] 40.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 38.1 | -0.79 | 실측 | [[gpqa-diamond]] 40.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 37.1 | -0.86 | 추정 | (추정) |
| 에이전트 | 37.1 | -0.86 | 추정 | (추정) |
| 신뢰성 | 49.0 | -0.07 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.4 | -1.17 | 추정 | (추정) |
| 지시 따르기 | 32.4 | -1.17 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
