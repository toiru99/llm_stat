---
type: Model
title: Qwen2.5 Max
creator: Alibaba
license: Proprietary
intelligence_index: 10.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 36.6, z: -0.19, r: 47.1, estimated: false }  # 전문 지식
  reasoning: { s: 33.0, z: -0.04, r: 49.4, estimated: false }  # 추론
  coding: { s: 56.7, z: 0.43, r: 56.4, estimated: false }  # 코딩
  agentic: { s: 50.0, z: 0.54, r: 58.0, estimated: true }  # 에이전트
  trust: { s: 43.9, z: 0.77, r: 61.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 51.8, z: 0.08, r: 51.2, estimated: true }  # 긴문맥
  instruction: { s: 48.5, z: -0.18, r: 47.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-24
timestamp: 2026-07-24T00:00:00Z
---

# Qwen2.5 Max

Alibaba · Proprietary · Unknown · 컨텍스트 32k · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.1 | -0.19 | 실측 | [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 49.4 | -0.04 | 실측 | [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 56.4 | +0.43 | 실측 | [[scicode]] 34.0%×1.0 |
| 에이전트 | 58.0 | +0.54 | 추정 | (추정) |
| 신뢰성 | 61.5 | +0.77 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 51.2 | +0.08 | 추정 | (추정) |
| 지시 따르기 | 47.3 | -0.18 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
