---
type: Model
title: Mixtral 8x7B
creator: Mistral
license: Open
intelligence_index: 2.0
price_blended_usd_1m: 0.475
output_speed_tps: None
context_window: 32800
status: past
size_class: Medium
params_b: 46.7
is_reasoning: false
radar:
  knowledge: { s: 15.9, z: -1.21, r: 31.9, estimated: false }  # 전문 지식
  reasoning: { s: 14.9, z: -1.01, r: 34.8, estimated: false }  # 추론
  coding: { s: 5.0, z: -1.78, r: 23.3, estimated: false }  # 코딩
  agentic: { s: 10.8, z: -1.02, r: 34.7, estimated: true }  # 에이전트
  trust: { s: 19.1, z: -0.39, r: 44.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 3.2, z: -1.43, r: 28.5, estimated: true }  # 긴문맥
  instruction: { s: 24.3, z: -1.23, r: 31.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mixtral 8x7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# Mixtral 8x7B

Mistral · Open · Medium(46.7B) · 컨텍스트 32k · 종합지능 **2.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $0.45 · 출력 $0.7 · 혼합 $0.475/1M · None t/s · TTFT Nones · 32k ctx` · 가성비 4.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.9 | -1.21 | 실측 | [[gpqa-diamond]] 29.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 34.8 | -1.01 | 실측 | [[gpqa-diamond]] 29.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 23.3 | -1.78 | 실측 | [[scicode]] 3.0%×1.0 |
| 에이전트 | 34.7 | -1.02 | 추정 | (추정) |
| 신뢰성 | 44.2 | -0.39 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.5 | -1.43 | 추정 | (추정) |
| 지시 따르기 | 31.6 | -1.23 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
