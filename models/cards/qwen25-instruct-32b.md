---
type: Model
title: Qwen2.5 Instruct 32B
creator: Alibaba
license: Open
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: 32
is_reasoning: false
radar:
  knowledge: { s: 27.6, z: -0.61, r: 40.8, estimated: false }  # 전문 지식
  reasoning: { s: 24.9, z: -0.45, r: 43.3, estimated: false }  # 추론
  coding: { s: 38.3, z: -0.32, r: 45.2, estimated: false }  # 코딩
  agentic: { s: 33.1, z: -0.11, r: 48.3, estimated: true }  # 에이전트
  trust: { s: 21.1, z: -0.31, r: 45.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 38.7, z: -0.28, r: 45.8, estimated: true }  # 긴문맥
  instruction: { s: 47.1, z: -0.21, r: 46.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 Instruct 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Qwen2.5 Instruct 32B

Alibaba · Open · Small(32B) · 컨텍스트 128k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.8 | -0.61 | 실측 | [[gpqa-diamond]] 47.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 43.3 | -0.45 | 실측 | [[gpqa-diamond]] 47.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 45.2 | -0.32 | 실측 | [[scicode]] 23.0%×1.0 |
| 에이전트 | 48.3 | -0.11 | 추정 | (추정) |
| 신뢰성 | 45.3 | -0.31 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.8 | -0.28 | 추정 | (추정) |
| 지시 따르기 | 46.8 | -0.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
