---
type: Model
title: Inkling 2 Small
creator: Thinking Machines
license: Open
intelligence_index: 30.6791832004009
price_blended_usd_1m: 0.181
output_speed_tps: 102.082567540283
context_window: 1024000
status: current
size_class: Large
params_b: 594
is_reasoning: true
radar:
  knowledge: { s: 58.8, z: 0.58, r: 58.8, estimated: false }  # 전문 지식
  reasoning: { s: 58.8, z: 1.17, r: 67.6, estimated: false }  # 추론
  coding: { s: 74.7, z: 1.13, r: 67.0, estimated: false }  # 코딩
  agentic: { s: 84.1, z: 1.31, r: 69.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 89.4, z: 0.92, r: 63.8, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.11, r: 66.7, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling 2 Small
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Inkling 2 Small

Thinking Machines · Open · Large(594B) · 컨텍스트 1M · 종합지능 **30.6791832004009**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $1.0 · 혼합 $0.181/1M · 102.082567540283 t/s · TTFT 2.15460043519573s · 1M ctx` · 가성비 169.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 58.8 | +0.58 | 실측 | [[humanitys-last-exam]] 44.1149%×0.3 |
| 추론 | 67.6 | +1.17 | 실측 | [[humanitys-last-exam]] 44.1149%×1.0 |
| 코딩 | 67.0 | +1.13 | 실측 | [[scicode]] 52.3148%×1.0 |
| 에이전트 | 69.6 | +1.31 | 실측 | [[gdpval]] 1630.23 Elo×1.0, [[tau3-banking]] 40.4124%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 63.8 | +0.92 | 실측 | [[mmmu-pro]] 81.5607%×1.0 |
| 긴문맥 | 66.7 | +1.11 | 실측 | [[aa-lcr]] 83.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
