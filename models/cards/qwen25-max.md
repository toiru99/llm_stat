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
  knowledge: { s: 35.3, z: -0.27, r: 46.0, estimated: false }  # 전문 지식
  reasoning: { s: 31.6, z: -0.15, r: 47.8, estimated: false }  # 추론
  coding: { s: 56.7, z: 0.38, r: 55.7, estimated: false }  # 코딩
  agentic: { s: 32.3, z: -0.18, r: 47.3, estimated: true }  # 에이전트
  trust: { s: 14.1, z: -0.47, r: 43.0, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 50.7, z: 0.04, r: 50.6, estimated: true }  # 긴문맥
  instruction: { s: 59.8, z: 0.31, r: 54.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Qwen2.5 Max

Alibaba · Proprietary · Unknown · 컨텍스트 32k · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.0 | -0.27 | 실측 | [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 47.8 | -0.15 | 실측 | [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 55.7 | +0.38 | 실측 | [[scicode]] 34.0%×1.0 |
| 에이전트 | 47.3 | -0.18 | 추정 | (추정) |
| 신뢰성 | 43.0 | -0.47 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 50.6 | +0.04 | 추정 | (추정) |
| 지시 따르기 | 54.7 | +0.31 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
