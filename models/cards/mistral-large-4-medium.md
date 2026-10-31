---
type: Model
title: Mistral Large 4 (medium)
creator: Mistral
license: Open
intelligence_index: 23.0
price_blended_usd_1m: 0.399
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 34.2, z: -0.67, r: 39.9, estimated: true }  # 전문 지식
  reasoning: { s: 30.6, z: -0.68, r: 39.8, estimated: false }  # 추론
  coding: { s: 13.0, z: -0.81, r: 37.9, estimated: true }  # 코딩
  agentic: { s: 10.5, z: -0.82, r: 37.8, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 23.6, z: -0.86, r: 37.1, estimated: true }  # 긴문맥
  instruction: { s: 39.2, z: -0.57, r: 41.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 4 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Mistral Large 4 (medium)

Mistral · Open · Large · 컨텍스트 1M · 종합지능 **23.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.7 · 출력 $2.1 · 혼합 $0.399/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 57.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.9 | -0.67 | 추정 | (추정) |
| 추론 | 39.8 | -0.68 | 실측 | [[critpt]] 22.0%×1.0 |
| 코딩 | 37.9 | -0.81 | 추정 | (추정) |
| 에이전트 | 37.8 | -0.82 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.1 | -0.86 | 추정 | (추정) |
| 지시 따르기 | 41.5 | -0.57 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
