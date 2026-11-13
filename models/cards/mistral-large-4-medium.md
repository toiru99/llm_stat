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
  knowledge: { s: 32.3, z: -0.71, r: 39.3, estimated: true }  # 전문 지식
  reasoning: { s: 29.4, z: -0.68, r: 39.8, estimated: false }  # 추론
  coding: { s: 8.5, z: -0.98, r: 35.3, estimated: true }  # 코딩
  agentic: { s: 8.9, z: -0.88, r: 36.8, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 22.5, z: -0.92, r: 36.2, estimated: true }  # 긴문맥
  instruction: { s: 37.8, z: -0.65, r: 40.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 4 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Mistral Large 4 (medium)

Mistral · Open · Large · 컨텍스트 1M · 종합지능 **23.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $0.7 · 출력 $2.1 · 혼합 $0.399/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 57.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.3 | -0.71 | 추정 | (추정) |
| 추론 | 39.8 | -0.68 | 실측 | [[critpt]] 22.5%×1.0 |
| 코딩 | 35.3 | -0.98 | 추정 | (추정) |
| 에이전트 | 36.8 | -0.88 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.2 | -0.92 | 추정 | (추정) |
| 지시 따르기 | 40.2 | -0.65 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
