---
type: Model
title: Mistral Large 4 (high)
creator: Mistral
license: Open
intelligence_index: 26.1249946754784
price_blended_usd_1m: 0.399
output_speed_tps: 75.92082626642066
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.0, z: -0.05, r: 49.2, estimated: true }  # 전문 지식
  reasoning: { s: 28.0, z: -0.36, r: 44.5, estimated: false }  # 추론
  coding: { s: 15.9, z: -0.81, r: 37.9, estimated: true }  # 코딩
  agentic: { s: 29.3, z: -0.53, r: 42.0, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.3, z: -0.18, r: 47.3, estimated: true }  # 긴문맥
  instruction: { s: 43.7, z: -0.42, r: 43.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 4 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Mistral Large 4 (high)

Mistral · Open · Large · 컨텍스트 1M · 종합지능 **26.1249946754784**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.7 · 출력 $2.1 · 혼합 $0.399/1M · 75.92082626642066 t/s · TTFT 3.369093990510965s · 1M ctx` · 가성비 65.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.2 | -0.05 | 추정 | (추정) |
| 추론 | 44.5 | -0.36 | 실측 | [[critpt]] 10.0%×1.0 |
| 코딩 | 37.9 | -0.81 | 추정 | (추정) |
| 에이전트 | 42.0 | -0.53 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.3 | -0.18 | 추정 | (추정) |
| 지시 따르기 | 43.8 | -0.42 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
