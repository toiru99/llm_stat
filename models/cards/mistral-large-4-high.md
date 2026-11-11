---
type: Model
title: Mistral Large 4 (high)
creator: Mistral
license: Open
intelligence_index: 26.0
price_blended_usd_1m: 0.399
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 37.1, z: -0.48, r: 42.9, estimated: true }  # 전문 지식
  reasoning: { s: 35.3, z: -0.39, r: 44.2, estimated: false }  # 추론
  coding: { s: 32.6, z: -0.17, r: 47.5, estimated: true }  # 코딩
  agentic: { s: 25.8, z: -0.31, r: 45.4, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 32.9, z: -0.6, r: 40.9, estimated: true }  # 긴문맥
  instruction: { s: 48.1, z: -0.2, r: 47.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 4 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Mistral Large 4 (high)

Mistral · Open · Large · 컨텍스트 1M · 종합지능 **26.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $0.7 · 출력 $2.1 · 혼합 $0.399/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 65.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.9 | -0.48 | 추정 | (추정) |
| 추론 | 44.2 | -0.39 | 실측 | [[critpt]] 27.0%×1.0 |
| 코딩 | 47.5 | -0.17 | 추정 | (추정) |
| 에이전트 | 45.4 | -0.31 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.9 | -0.6 | 추정 | (추정) |
| 지시 따르기 | 47.0 | -0.2 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
