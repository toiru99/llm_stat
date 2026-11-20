---
type: Model
title: Qwen2.5 Instruct 32B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 26.0, z: -1.03, r: 34.6, estimated: false }  # 전문 지식
  reasoning: { s: 23.3, z: -0.61, r: 40.9, estimated: false }  # 추론
  coding: { s: 43.9, z: 0.13, r: 52.0, estimated: true }  # 코딩
  agentic: { s: 19.4, z: -0.88, r: 36.8, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 15.0, z: -1.15, r: 32.8, estimated: true }  # 긴문맥
  instruction: { s: 23.3, z: -1.28, r: 30.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 Instruct 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Qwen2.5 Instruct 32B

Alibaba · Open · Small · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.6 | -1.03 | 실측 | [[gpqa-diamond]] 46.565656565656596%×0.4, [[humanitys-last-exam]] 3.9899999999999998%×0.3 |
| 추론 | 40.9 | -0.61 | 실측 | [[gpqa-diamond]] 46.565656565656596%×1.0, [[humanitys-last-exam]] 3.9899999999999998%×1.0 |
| 코딩 | 52.0 | +0.13 | 추정 | (추정) |
| 에이전트 | 36.8 | -0.88 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.8 | -1.15 | 추정 | (추정) |
| 지시 따르기 | 30.8 | -1.28 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
