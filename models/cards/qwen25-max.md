---
type: Model
title: Qwen2.5 Max
creator: Alibaba
license: Proprietary
intelligence_index: 8.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 34.7, z: -0.35, r: 44.7, estimated: false }  # 전문 지식
  reasoning: { s: 31.0, z: -0.24, r: 46.4, estimated: false }  # 추론
  coding: { s: 26.6, z: -0.32, r: 45.2, estimated: true }  # 코딩
  agentic: { s: 47.6, z: 0.36, r: 55.3, estimated: true }  # 에이전트
  trust: { s: 13.7, z: -0.59, r: 41.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 42.3, z: -0.28, r: 45.9, estimated: true }  # 긴문맥
  instruction: { s: 50.6, z: -0.14, r: 47.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Qwen2.5 Max

Alibaba · Proprietary · Unknown · 컨텍스트 32k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.7 | -0.35 | 실측 | [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 46.4 | -0.24 | 실측 | [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 45.2 | -0.32 | 추정 | (추정) |
| 에이전트 | 55.3 | +0.36 | 추정 | (추정) |
| 신뢰성 | 41.2 | -0.59 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.9 | -0.28 | 추정 | (추정) |
| 지시 따르기 | 47.9 | -0.14 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
