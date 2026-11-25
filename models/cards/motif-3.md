---
type: Model
title: Motif 3
creator: Motif Technologies
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: current
size_class: Large
params_b: 314
is_reasoning: true
radar:
  knowledge: { s: 69.7, z: 1.11, r: 66.7, estimated: false }  # 전문 지식
  reasoning: { s: 50.9, z: 0.78, r: 61.7, estimated: false }  # 추론
  coding: { s: 58.1, z: 0.57, r: 58.6, estimated: false }  # 코딩
  agentic: { s: 68.0, z: 0.74, r: 61.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.7, z: 0.86, r: 62.9, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Motif 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Motif 3

Motif Technologies · Open · Large(314B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 66.7 | +1.11 | 실측 | [[gpqa-diamond]] 83.4343%×0.4, [[humanitys-last-exam]] 36.9787%×0.3 |
| 추론 | 61.7 | +0.78 | 실측 | [[critpt]] 6.57143%×1.0, [[gpqa-diamond]] 83.4343%×1.0, [[humanitys-last-exam]] 36.9787%×1.0 |
| 코딩 | 58.6 | +0.57 | 실측 | [[scicode]] 42.2454%×1.0 |
| 에이전트 | 61.0 | +0.74 | 실측 | [[gdpval]] 1126.49 Elo×1.0, [[tau3-banking]] 35.2577%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.9 | +0.86 | 실측 | [[aa-lcr]] 76%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
