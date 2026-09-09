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
  knowledge: { s: 23.5, z: -0.84, r: 37.4, estimated: false }  # 전문 지식
  reasoning: { s: 21.2, z: -0.67, r: 40.0, estimated: false }  # 추론
  coding: { s: 9.1, z: -0.84, r: 37.4, estimated: true }  # 코딩
  agentic: { s: 13.9, z: -0.9, r: 36.5, estimated: true }  # 에이전트
  trust: { s: 30.2, z: 0.25, r: 53.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 9.9, z: -1.2, r: 32.0, estimated: true }  # 긴문맥
  instruction: { s: 23.0, z: -1.24, r: 31.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 Coder 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-09
timestamp: 2026-09-09T00:00:00Z
---

# Qwen2.5 Coder 32B

Alibaba · Open · Small(32B) · 컨텍스트 131k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.4 | -0.84 | 실측 | [[gpqa-diamond]] 42.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.0 | -0.67 | 실측 | [[gpqa-diamond]] 42.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 37.4 | -0.84 | 추정 | (추정) |
| 에이전트 | 36.5 | -0.9 | 추정 | (추정) |
| 신뢰성 | 53.8 | +0.25 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.0 | -1.2 | 추정 | (추정) |
| 지시 따르기 | 31.4 | -1.24 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
