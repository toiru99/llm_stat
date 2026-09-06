---
type: Model
title: Qwen2.5 Instruct 32B
creator: Alibaba
license: Open
intelligence_index: 2.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: 32
is_reasoning: false
radar:
  knowledge: { s: 26.8, z: -0.68, r: 39.8, estimated: false }  # 전문 지식
  reasoning: { s: 24.1, z: -0.53, r: 42.1, estimated: false }  # 추론
  coding: { s: 16.2, z: -0.56, r: 41.6, estimated: true }  # 코딩
  agentic: { s: 26.7, z: -0.41, r: 43.8, estimated: true }  # 에이전트
  trust: { s: 31.3, z: 0.32, r: 54.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 41.6, z: -0.23, r: 46.5, estimated: true }  # 긴문맥
  instruction: { s: 37.3, z: -0.64, r: 40.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 Instruct 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Qwen2.5 Instruct 32B

Alibaba · Open · Small(32B) · 컨텍스트 128k · 종합지능 **2.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.8 | -0.68 | 실측 | [[gpqa-diamond]] 47.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 42.1 | -0.53 | 실측 | [[gpqa-diamond]] 47.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 41.6 | -0.56 | 추정 | (추정) |
| 에이전트 | 43.8 | -0.41 | 추정 | (추정) |
| 신뢰성 | 54.8 | +0.32 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 46.5 | -0.23 | 추정 | (추정) |
| 지시 따르기 | 40.4 | -0.64 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
