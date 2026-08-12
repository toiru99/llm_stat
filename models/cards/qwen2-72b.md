---
type: Model
title: Qwen2 72B
creator: Alibaba
license: Open
intelligence_index: 6.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: past
size_class: Medium
params_b: 72
is_reasoning: false
radar:
  knowledge: { s: 20.7, z: -0.96, r: 35.5, estimated: false }  # 전문 지식
  reasoning: { s: 18.8, z: -0.8, r: 38.0, estimated: false }  # 추론
  coding: { s: 38.3, z: -0.38, r: 44.4, estimated: false }  # 코딩
  agentic: { s: 20.5, z: -0.62, r: 40.7, estimated: true }  # 에이전트
  trust: { s: 14.0, z: -0.56, r: 41.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 32.0, z: -0.53, r: 42.1, estimated: true }  # 긴문맥
  instruction: { s: 32.7, z: -0.87, r: 37.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2 72B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Qwen2 72B

Alibaba · Open · Medium(72B) · 컨텍스트 131k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.5 | -0.96 | 실측 | [[gpqa-diamond]] 37.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.0 | -0.8 | 실측 | [[gpqa-diamond]] 37.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 44.4 | -0.38 | 실측 | [[scicode]] 23.0%×1.0 |
| 에이전트 | 40.7 | -0.62 | 추정 | (추정) |
| 신뢰성 | 41.6 | -0.56 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.1 | -0.53 | 추정 | (추정) |
| 지시 따르기 | 37.0 | -0.87 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
