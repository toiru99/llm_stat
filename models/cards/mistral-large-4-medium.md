---
type: Model
title: Mistral Large 4 (medium)
creator: Mistral
license: Open
intelligence_index: 23.1277321742266
price_blended_usd_1m: 0.399
output_speed_tps: 75.7304037541687
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 47.7, z: 0.03, r: 50.4, estimated: true }  # 전문 지식
  reasoning: { s: 31.2, z: -0.21, r: 46.9, estimated: false }  # 추론
  coding: { s: 43.1, z: 0.12, r: 51.8, estimated: true }  # 코딩
  agentic: { s: 38.1, z: -0.22, r: 46.6, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 52.6, z: -0.02, r: 49.7, estimated: true }  # 긴문맥
  instruction: { s: 44.9, z: -0.37, r: 44.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 4 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Mistral Large 4 (medium)

Mistral · Open · Large · 컨텍스트 1M · 종합지능 **23.1277321742266**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $0.7 · 출력 $2.1 · 혼합 $0.399/1M · 75.7304037541687 t/s · TTFT 5.261762580620309s · 1M ctx` · 가성비 58.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.4 | +0.03 | 추정 | (추정) |
| 추론 | 46.9 | -0.21 | 실측 | [[critpt]] 11.1428571428571%×1.0 |
| 코딩 | 51.8 | +0.12 | 추정 | (추정) |
| 에이전트 | 46.6 | -0.22 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.7 | -0.02 | 추정 | (추정) |
| 지시 따르기 | 44.5 | -0.37 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
