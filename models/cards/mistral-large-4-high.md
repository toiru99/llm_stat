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
  knowledge: { s: 40.8, z: -0.38, r: 44.3, estimated: true }  # 전문 지식
  reasoning: { s: 37.5, z: -0.36, r: 44.6, estimated: false }  # 추론
  coding: { s: 22.0, z: -0.51, r: 42.3, estimated: true }  # 코딩
  agentic: { s: 18.5, z: -0.54, r: 41.9, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 58.1, z: 0.16, r: 52.4, estimated: true }  # 긴문맥
  instruction: { s: 46.7, z: -0.26, r: 46.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 4 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Mistral Large 4 (high)

Mistral · Open · Large · 컨텍스트 1M · 종합지능 **26.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.7 · 출력 $2.1 · 혼합 $0.399/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 65.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.3 | -0.38 | 추정 | (추정) |
| 추론 | 44.6 | -0.36 | 실측 | [[critpt]] 27.0%×1.0 |
| 코딩 | 42.3 | -0.51 | 추정 | (추정) |
| 에이전트 | 41.9 | -0.54 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.4 | +0.16 | 추정 | (추정) |
| 지시 따르기 | 46.0 | -0.26 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
