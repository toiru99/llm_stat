---
type: Model
title: Phi-4 Multimodal
creator: Microsoft
license: Open
intelligence_index: None
price_blended_usd_1m: 0.104
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 17.5, z: -1.41, r: 28.9, estimated: false }  # 전문 지식
  reasoning: { s: 16.1, z: -1.34, r: 29.9, estimated: false }  # 추론
  coding: { s: 0.3, z: -1.23, r: 31.5, estimated: true }  # 코딩
  agentic: { s: 2.1, z: -1.1, r: 33.5, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 0.0, z: -3.59, r: 0, estimated: false }  # 멀티모달
  long_context: { s: 2.3, z: -1.5, r: 27.5, estimated: true }  # 긴문맥
  instruction: { s: 16.1, z: -1.53, r: 27.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Phi-4 Multimodal
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Phi-4 Multimodal

Microsoft · Open · Small · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.08 · 출력 $0.32 · 혼합 $0.104/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 28.9 | -1.41 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 29.9 | -1.34 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 31.5 | -1.23 | 추정 | (추정) |
| 에이전트 | 33.5 | -1.1 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 0 | -3.59 | 실측 | [[mmmu-pro]] 15.0%×1.0 |
| 긴문맥 | 27.5 | -1.5 | 추정 | (추정) |
| 지시 따르기 | 27.0 | -1.53 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
