---
type: Model
title: LFM3-VL-2B
creator: Liquid AI
license: Open
intelligence_index: 1.70629313092144
price_blended_usd_1m: 0.084
output_speed_tps: 338.187175687652
context_window: 128000
status: current
size_class: Tiny
params_b: 1.9
is_reasoning: true
radar:
  knowledge: { s: null, z: null, r: null, estimated: false }  # 전문 지식
  reasoning: { s: null, z: null, r: null, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: null, z: null, r: null, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 43.9, z: -1.4, r: 29.0, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LFM3-VL-2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# LFM3-VL-2B

Liquid AI · Open · Tiny(1.9B) · 컨텍스트 128k · 종합지능 **1.70629313092144**

## 강점 / 약점 (평균 대비)
- **강점**: 멀티모달
- **약점**: —

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.084/1M · 338.187175687652 t/s · TTFT 0.46982044207714s · 128k ctx` · 가성비 20.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | — | — | 측정 안 됨 | — |
| 추론 | — | — | 측정 안 됨 | — |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | — | — | 측정 안 됨 | — |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 29.0 | -1.4 | 실측 | [[mmmu-pro]] 47.4566%×1.0 |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
