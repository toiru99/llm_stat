---
type: Model
title: Qwen2.5 Coder 32B
creator: Alibaba
license: Open
intelligence_index: 2.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: past
size_class: Small
params_b: 32
is_reasoning: false
radar:
  knowledge: { s: 23.5, z: -0.84, r: 37.4, estimated: false }  # 전문 지식
  reasoning: { s: 21.2, z: -0.67, r: 40.0, estimated: false }  # 추론
  coding: { s: 9.1, z: -0.8, r: 38.0, estimated: true }  # 코딩
  agentic: { s: 14.4, z: -0.88, r: 36.7, estimated: true }  # 에이전트
  trust: { s: 16.8, z: -0.36, r: 44.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 7.5, z: -1.28, r: 30.8, estimated: true }  # 긴문맥
  instruction: { s: 23.8, z: -1.21, r: 31.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 Coder 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Qwen2.5 Coder 32B

Alibaba · Open · Small(32B) · 컨텍스트 131k · 종합지능 **2.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.4 | -0.84 | 실측 | [[gpqa-diamond]] 42.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.0 | -0.67 | 실측 | [[gpqa-diamond]] 42.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 38.0 | -0.8 | 추정 | (추정) |
| 에이전트 | 36.7 | -0.88 | 추정 | (추정) |
| 신뢰성 | 44.6 | -0.36 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.8 | -1.28 | 추정 | (추정) |
| 지시 따르기 | 31.9 | -1.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
