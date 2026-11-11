---
type: Model
title: Qwen2.5 Coder 7B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 18.1, z: -1.39, r: 29.1, estimated: false }  # 전문 지식
  reasoning: { s: 16.5, z: -1.31, r: 30.4, estimated: false }  # 추론
  coding: { s: 3.9, z: -1.13, r: 33.0, estimated: true }  # 코딩
  agentic: { s: 2.3, z: -1.1, r: 33.4, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 12.0, z: -1.23, r: 31.6, estimated: true }  # 긴문맥
  instruction: { s: 24.2, z: -1.23, r: 31.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 Coder 7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Qwen2.5 Coder 7B

Alibaba · Open · Small · 컨텍스트 131k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.1 | -1.39 | 실측 | [[gpqa-diamond]] 33.9%×0.4, [[humanitys-last-exam]] 4.9%×0.3 |
| 추론 | 30.4 | -1.31 | 실측 | [[gpqa-diamond]] 33.9%×1.0, [[humanitys-last-exam]] 4.9%×1.0 |
| 코딩 | 33.0 | -1.13 | 추정 | (추정) |
| 에이전트 | 33.4 | -1.1 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.6 | -1.23 | 추정 | (추정) |
| 지시 따르기 | 31.6 | -1.23 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
