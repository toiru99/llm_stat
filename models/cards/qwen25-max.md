---
type: Model
title: Qwen2.5 Max
creator: Alibaba
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 33.9, z: -0.63, r: 40.5, estimated: false }  # 전문 지식
  reasoning: { s: 30.1, z: -0.64, r: 40.4, estimated: false }  # 추론
  coding: { s: 19.6, z: -0.61, r: 40.9, estimated: true }  # 코딩
  agentic: { s: 13.6, z: -0.72, r: 39.2, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 26.9, z: -0.78, r: 38.3, estimated: true }  # 긴문맥
  instruction: { s: 32.5, z: -0.87, r: 36.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Qwen2.5 Max

Alibaba · Proprietary · Unknown · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.5 | -0.63 | 실측 | [[gpqa-diamond]] 58.7%×0.4, [[humanitys-last-exam]] 3.8%×0.3 |
| 추론 | 40.4 | -0.64 | 실측 | [[gpqa-diamond]] 58.7%×1.0, [[humanitys-last-exam]] 3.8%×1.0 |
| 코딩 | 40.9 | -0.61 | 추정 | (추정) |
| 에이전트 | 39.2 | -0.72 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.3 | -0.78 | 추정 | (추정) |
| 지시 따르기 | 36.9 | -0.87 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
