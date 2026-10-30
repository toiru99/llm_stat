---
type: Model
title: Mistral Large 4 (high)
creator: Mistral
license: Open
intelligence_index: 26.0
price_blended_usd_1m: 0.399
output_speed_tps: 161.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 40.1, z: -0.41, r: 43.8, estimated: true }  # 전문 지식
  reasoning: { s: 36.1, z: -0.43, r: 43.5, estimated: false }  # 추론
  coding: { s: 23.7, z: -0.45, r: 43.3, estimated: true }  # 코딩
  agentic: { s: 20.5, z: -0.47, r: 43.0, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 38.9, z: -0.4, r: 44.0, estimated: true }  # 긴문맥
  instruction: { s: 45.6, z: -0.3, r: 45.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 4 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# Mistral Large 4 (high)

Mistral · Open · Large · 컨텍스트 1M · 종합지능 **26.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.7 · 출력 $2.1 · 혼합 $0.399/1M · 161.0 t/s · TTFT 1.42s · 1M ctx` · 가성비 65.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.8 | -0.41 | 추정 | (추정) |
| 추론 | 43.5 | -0.43 | 실측 | [[critpt]] 26.0%×1.0 |
| 코딩 | 43.3 | -0.45 | 추정 | (추정) |
| 에이전트 | 43.0 | -0.47 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.0 | -0.4 | 추정 | (추정) |
| 지시 따르기 | 45.5 | -0.3 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
