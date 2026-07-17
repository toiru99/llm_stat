---
type: Model
title: Mixtral 8x7B
creator: Mistral
license: Open
intelligence_index: 2.0
price_blended_usd_1m: 0.47
output_speed_tps: None
context_window: 32800
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 16.2, z: -1.18, r: 32.4, estimated: false }  # 전문 지식
  reasoning: { s: 15.2, z: -0.97, r: 35.4, estimated: false }  # 추론
  coding: { s: 5.0, z: -1.74, r: 23.9, estimated: false }  # 코딩
  agentic: { s: 10.8, z: -0.99, r: 35.1, estimated: true }  # 에이전트
  trust: { s: 14.8, z: -0.62, r: 40.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 1.8, z: -1.38, r: 29.3, estimated: true }  # 긴문맥
  instruction: { s: 32.1, z: -0.83, r: 37.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mixtral 8x7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-17
timestamp: 2026-07-17T00:00:00Z
---

# Mixtral 8x7B

Mistral · Open · Unknown · 컨텍스트 32k · 종합지능 **2.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $0.45 · 출력 $0.7 · 혼합 $0.47/1M · None t/s · TTFT Nones · 32k ctx` · 가성비 4.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.4 | -1.18 | 실측 | [[gpqa-diamond]] 29.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 35.4 | -0.97 | 실측 | [[gpqa-diamond]] 29.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 23.9 | -1.74 | 실측 | [[scicode]] 3.0%×1.0 |
| 에이전트 | 35.1 | -0.99 | 추정 | (추정) |
| 신뢰성 | 40.8 | -0.62 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.3 | -1.38 | 추정 | (추정) |
| 지시 따르기 | 37.5 | -0.83 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
