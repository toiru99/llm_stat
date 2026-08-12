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
  knowledge: { s: 35.7, z: -0.24, r: 46.3, estimated: false }  # 전문 지식
  reasoning: { s: 31.9, z: -0.15, r: 47.8, estimated: false }  # 추론
  coding: { s: 56.7, z: 0.38, r: 55.8, estimated: false }  # 코딩
  agentic: { s: 35.0, z: -0.04, r: 49.4, estimated: true }  # 에이전트
  trust: { s: 55.7, z: 1.35, r: 70.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 33.1, z: -0.5, r: 42.5, estimated: true }  # 긴문맥
  instruction: { s: 57.7, z: 0.17, r: 52.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Qwen2.5 Max

Alibaba · Proprietary · Unknown · 컨텍스트 32k · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.3 | -0.24 | 실측 | [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 47.8 | -0.15 | 실측 | [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 55.8 | +0.38 | 실측 | [[scicode]] 34.0%×1.0 |
| 에이전트 | 49.4 | -0.04 | 추정 | (추정) |
| 신뢰성 | 70.3 | +1.35 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.5 | -0.5 | 추정 | (추정) |
| 지시 따르기 | 52.5 | +0.17 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
