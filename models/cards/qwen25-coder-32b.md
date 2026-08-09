---
type: Model
title: Qwen2.5 Coder 32B
creator: Alibaba
license: Open
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: past
size_class: Small
params_b: 32
is_reasoning: false
radar:
  knowledge: { s: 24.1, z: -0.79, r: 38.1, estimated: false }  # 전문 지식
  reasoning: { s: 21.8, z: -0.64, r: 40.4, estimated: false }  # 추론
  coding: { s: 45.0, z: -0.1, r: 48.6, estimated: false }  # 코딩
  agentic: { s: 23.2, z: -0.5, r: 42.5, estimated: true }  # 에이전트
  trust: { s: 22.5, z: -0.17, r: 47.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 28.9, z: -0.62, r: 40.8, estimated: true }  # 긴문맥
  instruction: { s: 39.8, z: -0.57, r: 41.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 Coder 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-09
timestamp: 2026-08-09T00:00:00Z
---

# Qwen2.5 Coder 32B

Alibaba · Open · Small(32B) · 컨텍스트 131k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.1 | -0.79 | 실측 | [[gpqa-diamond]] 42.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.4 | -0.64 | 실측 | [[gpqa-diamond]] 42.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 48.6 | -0.1 | 실측 | [[scicode]] 27.0%×1.0 |
| 에이전트 | 42.5 | -0.5 | 추정 | (추정) |
| 신뢰성 | 47.4 | -0.17 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.8 | -0.62 | 추정 | (추정) |
| 지시 따르기 | 41.5 | -0.57 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
