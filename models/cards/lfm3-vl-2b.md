---
type: Model
title: LFM3-VL-2B
creator: Liquid AI
license: Open
intelligence_index: 1.70629313092144
price_blended_usd_1m: 0.084
output_speed_tps: 331.804819152576
context_window: 128000
status: current
size_class: Tiny
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 27.2, z: -0.97, r: 35.5, estimated: true }  # 전문 지식
  reasoning: { s: 17.9, z: -0.87, r: 36.9, estimated: true }  # 추론
  coding: { s: 10.5, z: -1.0, r: 35.0, estimated: true }  # 코딩
  agentic: { s: 17.7, z: -0.94, r: 35.9, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 43.9, z: -1.4, r: 29.0, estimated: false }  # 멀티모달
  long_context: { s: 28.9, z: -0.73, r: 39.0, estimated: true }  # 긴문맥
  instruction: { s: 38.7, z: -0.64, r: 40.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LFM3-VL-2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# LFM3-VL-2B

Liquid AI · Open · Tiny · 컨텍스트 128k · 종합지능 **1.70629313092144**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.084/1M · 331.804819152576 t/s · TTFT 0.548789314852774s · 128k ctx` · 가성비 20.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.5 | -0.97 | 추정 | (추정) |
| 추론 | 36.9 | -0.87 | 추정 | (추정) |
| 코딩 | 35.0 | -1.0 | 추정 | (추정) |
| 에이전트 | 35.9 | -0.94 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 29.0 | -1.4 | 실측 | [[mmmu-pro]] 47.4566473988439%×1.0 |
| 긴문맥 | 39.0 | -0.73 | 추정 | (추정) |
| 지시 따르기 | 40.5 | -0.64 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
