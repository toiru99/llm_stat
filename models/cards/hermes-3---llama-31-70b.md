---
type: Model
title: Hermes 3 - Llama-3.1 70B
creator: Nous Research
license: Open
intelligence_index: 1.0
price_blended_usd_1m: 0.7
output_speed_tps: 35.0
context_window: 128000
status: past
size_class: Medium
params_b: 70.6
is_reasoning: false
radar:
  knowledge: { s: 22.2, z: -0.9, r: 36.4, estimated: false }  # 전문 지식
  reasoning: { s: 20.0, z: -0.72, r: 39.1, estimated: false }  # 추론
  coding: { s: 6.0, z: -0.91, r: 36.3, estimated: true }  # 코딩
  agentic: { s: 18.6, z: -0.72, r: 39.1, estimated: true }  # 에이전트
  trust: { s: 13.8, z: -0.5, r: 42.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 11.5, z: -1.16, r: 32.6, estimated: true }  # 긴문맥
  instruction: { s: 28.2, z: -1.02, r: 34.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hermes 3 - Llama-3.1 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Hermes 3 - Llama-3.1 70B

Nous Research · Open · Medium(70.6B) · 컨텍스트 128k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.7 · 출력 $0.7 · 혼합 $0.7/1M · 35.0 t/s · TTFT 1.98s · 128k ctx` · 가성비 1.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.4 | -0.9 | 실측 | [[gpqa-diamond]] 40.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.1 | -0.72 | 실측 | [[gpqa-diamond]] 40.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 36.3 | -0.91 | 추정 | (추정) |
| 에이전트 | 39.1 | -0.72 | 추정 | (추정) |
| 신뢰성 | 42.5 | -0.5 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.6 | -1.16 | 추정 | (추정) |
| 지시 따르기 | 34.7 | -1.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
